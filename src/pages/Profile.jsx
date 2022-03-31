import PageCard from "../components/PageCard";
import Title from "../components/Title";
import { useAuth } from "../helpers/AuthorizationProvider";

function Profile() {
  const { user, loading } = useAuth();
  return (
    <>
      {loading ? (
        <PageCard>Loading...</PageCard>
      ) : (
        <PageCard>
          <Title>Edit {user.full_name}</Title>
        </PageCard>
      )}
    </>
  );
}

export default Profile;
