import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import Dashboard from "./Dashboard";

function UserDashboard() {
  const { user, loading } = useAuth();
  const [organization, setOrganization] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && user) {
      if (user.role_id === 2) {
        if (!user.organization_id) {
          navigate("/organizations/create");
        } else {
          authorizedGet(`/organizations/${user.organization_id}`)
            .then((json) => {
              setOrganization(json);
            })
            .catch((err) => console.error(err));
        }
      } else {
        navigate("/forbidden");
      }
    }
  }, [user, loading, navigate]);

  return loading || !organization ? <Loading /> : <Dashboard user={user} organization={organization} />;
}

export default UserDashboard;
