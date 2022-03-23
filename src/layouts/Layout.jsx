import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../helpers/AuthorizationProvider";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  // const { user, handlePersistUser } = useAuth();
  // useEffect(() => handlePersistUser(), []);
  return (
    <div>
      <NavBar>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/status">Status</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/logout">Logout</NavLink>
      </NavBar>
      {children}
      <Footer>Footer</Footer>
    </div>
  );
}

export default Layout;
