import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div>
      <NavBar>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/signup">Signup</NavLink>
        <NavLink to="/">Home</NavLink>
      </NavBar>
      {children}
      <Footer>Footer</Footer>
    </div>
  );
}

export default Layout;
