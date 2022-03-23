import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";

function Logout() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    handleLogout();
    navigate("/");
  }, []);

  return <div>You have successfully logged out.</div>;
}

export default Logout;
