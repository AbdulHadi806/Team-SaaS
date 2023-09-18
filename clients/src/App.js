import "./App.css";
import SignUpPage from "./page/SignUpPage";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import DashboardProtectedroute from "./components/protectedRoute/DashboardProtectedRouter";
import MainDashboard from "./components/dashboard/MainDashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import AdminProfilePage from "./page/AdminProfilePage";
import UserDashboard from "./components/dashboard/UserDashboard";
import RolesDetail from "./components/tasks/RolesDetail";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<LoginPage />} />
        <Route element={<DashboardProtectedroute />}>
          <Route path="/user-dashboard" element={<UserDashboard />} />
          <Route path="/mainDashboard" element={<MainDashboard />} />
          <Route path="/admin-profile" element={<AdminProfilePage />} />
          <Route path="/rolesDetail/:roles" element={<RolesDetail />} />
        </Route>

        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
