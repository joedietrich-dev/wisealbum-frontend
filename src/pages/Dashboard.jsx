import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import PageCard from "../components/PageCard";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";

function Dashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user);
    if (!user.organization_id && user.role_id === 2) {
      navigate("/organization/create");
    }
  }, [user, navigate]);
  return (
    <PageCard>
      <Title>Dashboard</Title>
      <Subtitle>See the dashboard.</Subtitle>
    </PageCard>
  );
}

export default Dashboard;
