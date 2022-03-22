import { Route, Routes } from "react-router-dom";
import { AuthorizationProvider } from "./helpers/AuthorizationProvider";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <AuthorizationProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Layout>
      </AuthorizationProvider>
    </div>
  );
}

export default App;
