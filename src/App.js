import { Route, Routes } from "react-router-dom";
import { AuthorizationProvider } from "./helpers/AuthorizationProvider";
import Layout from "./layouts/Layout";
import OrganizationCreate from "./pages/OrganizationCreate";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Status from "./pages/Status";
import OrganizationEdit from "./pages/OrganizationEdit";

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
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/organization/create" element={<OrganizationCreate />} />
            <Route path="/organization/:organizationId/edit" element={<OrganizationEdit />} />
          </Routes>
        </Layout>
      </AuthorizationProvider>
    </div>
  );
}

export default App;
