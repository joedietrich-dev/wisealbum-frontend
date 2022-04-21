import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { post } from "./fetchers/post";

const authContext = createContext();

export const useAuth = () => {
  return useContext(authContext);
};

function AuthorizationProvider({ children }) {
  const [user, setUser] = useState({
    id: null,
    full_name: "",
    role_id: undefined,
    organization_id: undefined,
    token: undefined,
  });
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const handleLogin = async (data, successCallback = (f) => f, errorCallback = (f) => f) => {
    try {
      const json = await post(`/login`, {
        user: {
          email: data.email,
          password: data.password,
        },
      });
      const { id, full_name, role_id, organization_id } = json.data;
      setUser({
        id,
        full_name,
        role_id,
        organization_id,
        token: localStorage.getItem("token"),
      });
      setLoading(false);
      return successCallback();
    } catch (err) {
      setLoading(false);
      return errorCallback(err);
    }
  };

  const handleLogout = () => {
    if (token) {
      fetch(`${process.env.REACT_APP_QUERY_DOMAIN}/logout`, {
        method: "DELETE",
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }).then((res) => {
        if (res.ok) {
          setUser({
            id: null,
            full_name: "",
            role_id: undefined,
            organization_id: undefined,
            token: undefined,
          });
          localStorage.removeItem("token");
        }
      });
    }
  };

  const handlePersistUser = useCallback(() => {
    fetch(`${process.env.REACT_APP_QUERY_DOMAIN}/current_user`, {
      method: "GET",
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          if (res.status === 401) {
            localStorage.removeItem("token");
          }
          return res.text().then((text) => {
            throw new Error(text);
          });
        }
      })
      .then((json) => {
        console.log(json);
        const { id, full_name, role_id, organization_id } = json;
        setUser({
          id,
          full_name,
          role_id,
          organization_id,
          token,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [token]);

  useEffect(() => {
    if (token) {
      handlePersistUser();
    } else {
      setUser({
        id: null,
        full_name: "",
        role_id: undefined,
        organization_id: undefined,
        token: undefined,
      });
      setLoading(false);
    }
  }, [token, handlePersistUser]);

  return <authContext.Provider value={{ user, loading, setUser, handleLogin, handleLogout }}>{children}</authContext.Provider>;
}

export { AuthorizationProvider };
