import { Route, Routes } from "react-router-dom";
import { AuthorizationProvider } from "./helpers/AuthorizationProvider";
import Layout from "./layouts/Layout";
import OrganizationCreate from "./pages/OrganizationCreate";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Signup from "./pages/Signup";
import Status from "./pages/Status";
import OrganizationEdit from "./pages/OrganizationEdit";
import Forbidden from "./pages/Forbidden";
import Profile from "./pages/Profile";
import UserDashboard from "./pages/UserDashboard";
import AdminCompanyDashboard from "./pages/AdminCompanyDashboard";
import AlbumsList from "./pages/AlbumsList";
import AlbumCreate from "./pages/AlbumCreate";
import AlbumEdit from "./pages/AlbumEdit";
import MediaEdit from "./pages/MediaEdit";
import Verify from "./pages/Verify";
import SignupVerificationSent from "./pages/SignupVerificationSent";
import ForgotPassword from "./pages/ForgotPassword";
import ForgotPasswordSent from "./pages/ForgotPasswordSent";
import ResetPassword from "./pages/ResetPassword";

function App() {
  return (
    <div className="App">
      <AuthorizationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
            <Route path="/forgot_password/verification_sent" element={<ForgotPasswordSent />} />
            <Route path="/reset_password/:verificationToken" element={<ResetPassword />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signup/verification_sent" element={<SignupVerificationSent />} />
            <Route path="/verify/:verificationToken" element={<Verify />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/status" element={<Status />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/organizations/create" element={<OrganizationCreate />} />
            <Route path="/organizations/:organizationId/dashboard" element={<AdminCompanyDashboard />} />
            <Route path="/organizations/:organizationId/edit" element={<OrganizationEdit />} />
            <Route path="/organizations/:organizationId/albums" element={<AlbumsList />} />
            <Route path="/organizations/:organizationId/albums/create" element={<AlbumCreate />} />
            <Route path="/organizations/:organizationId/albums/:albumId/edit" element={<AlbumEdit />} />
            <Route path="/organizations/:organizationId/albums/:albumId/:mediaId/edit" element={<MediaEdit />} />
            <Route path="/forbidden" element={<Forbidden />} />
          </Routes>
        </Layout>
      </AuthorizationProvider>
    </div>
  );
}

export default App;
