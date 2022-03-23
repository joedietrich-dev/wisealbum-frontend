import { useAuth } from "../helpers/AuthorizationProvider";

function Status() {
  const { user } = useAuth();
  return <div>{user.full_name}</div>;
}

export default Status;
