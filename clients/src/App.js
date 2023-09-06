import "./App.css";
import SignUpPage from "./page/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import DashboardProtectedroute from "./components/protectedRoute/DashboardProtectedRouter";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/dashboard/MainDashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import { AdminProfile } from "./components/user/AdminProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Login />} />
        <Route element={<DashboardProtectedroute />}>
          <Route path="/mainDashboard" element={<MainDashboard />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
        </Route>
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
