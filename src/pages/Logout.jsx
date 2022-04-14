import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ModalCard from "../components/ModalCard";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";

function Logout() {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    handleLogout();
    navigate("/");
  }, [navigate, handleLogout]);

  return (
    <ModalCard>
      <Title>Log Out</Title>
      <div>You have successfully logged out.</div>;
    </ModalCard>
  );
}

export default Logout;
