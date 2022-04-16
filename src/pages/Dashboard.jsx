import { useNavigate } from "react-router-dom";
import PageCard from "../components/PageCard";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Deck from "../components/Deck";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import { ROLE } from "../helpers/roles";
import Button from "../components/Button";
import CardText from "../components/CardText";

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
            <CardText>Total Users: {organization.users.length}</CardText>
            <Button onClick={() => navigate(`/organizations/${organization.id}/edit`)}>Edit Users</Button>
          </Card>
        ) : null}
        <Card>
          <CardTitle>Albums</CardTitle>
          <CardText>Total Albums: {organization.albums.length}</CardText>
          <Button onClick={() => navigate(`/organizations/${organization.id}/albums`)}>Edit Albums</Button>
        </Card>
      </Deck>
    </PageCard>
  );
}

export default Dashboard;
