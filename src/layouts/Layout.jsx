import { NavLink } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  const { user } = useAuth();
  return (
    <div>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/status">Status</NavLink>
        {user.id ? null : <NavLink to="/login">Login</NavLink>}
        {user.id ? null : <NavLink to="/signup">Signup</NavLink>}
        {user.id ? <NavLink to="/logout">Logout</NavLink> : null}
      </NavBar>
      {children}
      <Footer>Footer</Footer>
    </div>
  );
}

export default Layout;
