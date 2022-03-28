import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import { authorizedGet } from "../helpers/fetchers/get";
import Title from "../components/Title";

function OrganizationEdit() {
  const { organizationId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [org, setOrg] = useState();

  useEffect(() => {
    authorizedGet(`/organizations/${organizationId}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res);
        }
      })
      .then((json) => {
        console.log(json);
        setOrg(json);
      })
      .catch((err) => console.error(err));
  }, [organizationId]);
  return (
    <div>
      <Title>{org?.name}</Title>
    </div>
  );
}

export default OrganizationEdit;
