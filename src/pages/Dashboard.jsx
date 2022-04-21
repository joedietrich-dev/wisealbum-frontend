import { useNavigate } from "react-router-dom";
import PageCard from "../components/PageCard";
import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import Deck from "../components/Deck";
import Card from "../components/Card";
import CardTitle from "../components/CardTitle";
import { ROLE } from "../helpers/roles";
import CardText from "../components/CardText";
import PrimaryButton from "../components/PrimaryButton";
import CardContent from "../components/CardContent";

function Dashboard({ user, organization }) {
  const navigate = useNavigate();

  return (
    <PageCard>
      <Title>Dashboard</Title>
      <Subtitle>See the dashboard.</Subtitle>
      <Deck>
        {ROLE.isSuperAdmin(user) || ROLE.isOrgOwner(user) ? (
          <Card>
            <CardContent>
              <CardTitle>Users</CardTitle>
              <CardText>Total Users: {organization.users.length}</CardText>
            </CardContent>
            <PrimaryButton onClick={() => navigate(`/organizations/${organization.id}/edit`)}>Edit Users</PrimaryButton>
          </Card>
        ) : null}
        <Card>
          <CardContent>
            <CardTitle>Albums</CardTitle>
            <CardText>Total Albums: {organization.albums.length}</CardText>
          </CardContent>
          <PrimaryButton onClick={() => navigate(`/organizations/${organization.id}/albums`)}>Edit Albums</PrimaryButton>
        </Card>
      </Deck>
    </PageCard>
  );
}

export default Dashboard;
