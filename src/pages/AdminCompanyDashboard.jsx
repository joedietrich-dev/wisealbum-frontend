import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import Dashboard from "./Dashboard";

function AdminCompanyDashboard() {
  const { organizationId } = useParams();
  const { user, loading } = useAuth();
  const [organization, setOrganization] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (user.role_id === 1) {
        authorizedGet(`/organizations/${parseInt(organizationId, 10)}`)
          .then((json) => {
            setOrganization(json);
          })
          .catch((err) => console.error(err));
      } else {
        navigate("/forbidden");
      }
    }
  }, [user, loading, organizationId, navigate]);

  return loading || !organization ? <Loading /> : <Dashboard user={user} organization={organization} />;
}

export default AdminCompanyDashboard;
