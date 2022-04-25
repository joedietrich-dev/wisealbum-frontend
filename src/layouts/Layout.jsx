import { NavLink } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { ROLE } from "../helpers/roles";
import WordMark from "../components/WordMark";
import NavItems from "../components/NavItems";
import NavToggle from "../components/NavToggle";
import { useState } from "react";
import Menu from "../components/Menu";

function Layout({ children }) {
  const { user } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <NavBar>
        <WordMark>WiseAlbum</WordMark>
        <Menu>
          <NavToggle onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>{isMenuOpen ? "X" : "Ξ"}</NavToggle>
          <NavItems className={isMenuOpen ? "open" : "collapsed"}>
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
              </>
            ) : (
              <>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
              </>
            )}
          </NavItems>
        </Menu>
      </NavBar>
      {children}
      <Footer>
        <a href="https://github.com/joedietrich-dev">Github</a>
        <a href="https://joedietrich.net">© 2022 Joe Dietrich</a>
      </Footer>
    </div>
  );
}

export default Layout;
