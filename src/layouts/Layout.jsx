import Footer from "./Footer";
import NavBar from "./NavBar";

function Layout({ children }) {
  return (
    <div>
      <NavBar>Top Nav</NavBar>
      {children}
      <Footer>Footer</Footer>
    </div>
  );
}

export default Layout;
