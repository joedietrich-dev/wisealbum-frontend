import { createContext, useContext, useEffect, useState } from "react";
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

  const handleLogin = (data, callback = (f) => f) => {
    post(`${process.env.REACT_APP_QUERY_DOMAIN}/login`, {
      user: {
        email: data.email,
        password: data.password,
      },
    })
      .then((res) => {
        if (res.ok) {
          localStorage.setItem("token", res.headers.get("Authorization"));
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => {
        const { id, full_name, role_id, organization_id } = json.data;
        setUser({
          id,
          full_name,
          role_id,
          organization_id,
          token: localStorage.getItem("token"),
        });
        setLoading(false);
        callback();
      })
      .catch((err) => console.error(err));
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

  const handlePersistUser = () => {
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
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    if (token && !user.id) {
      handlePersistUser();
    } else if (!token) {
      setUser({
        id: null,
        full_name: "",
        role_id: undefined,
        organization_id: undefined,
        token: undefined,
      });
    }
  }, [token]);

  return <authContext.Provider value={{ user, loading, setUser, handleLogin, handleLogout }}>{children}</authContext.Provider>;
}

export { AuthorizationProvider };
