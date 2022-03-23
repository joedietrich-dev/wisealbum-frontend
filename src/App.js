import { Route, Routes } from "react-router-dom";
import { AuthorizationProvider, useAuth } from "./helpers/AuthorizationProvider";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Status from "./pages/Status";

function App() {
  return (
    <div className="App">
      <AuthorizationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/status" element={<Status />} />
          </Routes>
        </Layout>
      </AuthorizationProvider>
    </div>
  );
}

export default App;
