import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user.organization_id && user.role_id === 2) {
      navigate("/organization/create");
    }
  }, [user, navigate]);
  return <div>Dashboard</div>;
}

export default Dashboard;
