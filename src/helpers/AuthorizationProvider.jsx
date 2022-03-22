import { createContext, useContext, useState } from "react";
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
  });
  const [loading, setLoading] = useState(true);

  const handleLogin = ({ email, password }) => {
    post(`${process.env.REACT_APP_QUERY_DOMAIN}/login`, {
      user: {
        email,
        password,
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
        });
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  return <authContext.Provider value={{ user, loading, handleLogin }}>{children}</authContext.Provider>;
}

export { AuthorizationProvider };
