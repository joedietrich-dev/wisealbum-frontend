import { NavLink } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import Footer from "./Footer";
import NavBar from "./NavBar";
import { ROLE } from "../helpers/roles";
import NavHolder from "../components/NavHolder";
import WordMark from "../components/WordMark";

function Layout({ children }) {
  const { user } = useAuth();
  return (
    <div>
      <NavHolder>
        <NavBar>
          <WordMark>WiseAlbum</WordMark>
          <NavLink to="/">Home</NavLink>
          {user.id ? (
            <>
              <NavLink to="/dashboard">Dashboard</NavLink>
              {user.organization_id && (ROLE.isOrgOwner(user) || ROLE.isSuperAdmin(user)) ? (
                <NavLink to={`/organizations/${user.organization_id}/edit`}>Edit Organization</NavLink>
              ) : null}
              {user.organization_id && (ROLE.isOrgOwner(user) || ROLE.isContributor(user)) ? (
                <NavLink to={`/organizations/${user.organization_id}/albums`}>Edit Albums</NavLink>
              ) : null}
              <NavLink to="/profile">My Profile</NavLink>
              <NavLink to="/logout">Logout</NavLink>
              <NavLink to="/test">TestPage</NavLink>
            </>
          ) : (
            <>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </>
          )}
        </NavBar>
      </NavHolder>
      {children}
      <Footer>
        <a href="https://github.com/joedietrich-dev">Github</a>
        <WordMark>WiseAlbum</WordMark>
        <a href="https://joedietrich.net">© 2022 Joe Dietrich</a>
      </Footer>
    </div>
  );
}

export default Layout;
