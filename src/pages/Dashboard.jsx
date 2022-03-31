import { useNavigate } from "react-router-dom";
import PageCard from "../components/PageCard";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Deck from "../components/Deck";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import { ROLE } from "../helpers/roles";
import Button from "../components/Button";

function Dashboard({ user, organization }) {
  const navigate = useNavigate();
  console.log(organization);
  return (
    <PageCard>
      <Title>Dashboard</Title>
      <Subtitle>See the dashboard.</Subtitle>
      <Deck>
        {ROLE.isSuperAdmin(user) || ROLE.isOrgOwner(user) ? (
          <Card>
            <CardTitle>Users</CardTitle>
            <p>Total Users: {organization.users.length}</p>
            <Button onClick={() => navigate(`/organization/${organization.id}/edit`)}>Edit Users</Button>
          </Card>
        ) : null}
        <Card>
          <CardTitle>Albums</CardTitle>
          <Button onClick={() => navigate(`/organization/${organization.id}/albums`)}>Edit Albums</Button>
        </Card>
      </Deck>
    </PageCard>
  );
}

export default Dashboard;
