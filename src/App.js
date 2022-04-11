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
import ListAlbums from "./pages/ListAlbums";
import AlbumCreate from "./pages/AlbumCreate";
import AlbumEdit from "./pages/AlbumEdit";
import MediaEdit from "./pages/MediaEdit";

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
            <Route path="/profile" element={<Profile />} />
            <Route path="/status" element={<Status />} />
            <Route path="/dashboard" element={<UserDashboard />} />
            <Route path="/organizations/create" element={<OrganizationCreate />} />
            <Route path="/organizations/:organizationId/dashboard" element={<AdminCompanyDashboard />} />
            <Route path="/organizations/:organizationId/edit" element={<OrganizationEdit />} />
            <Route path="/organizations/:organizationId/albums" element={<ListAlbums />} />
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
