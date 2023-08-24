import "./App.css";
import SignUpPage from "./page/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Protectedroute from "./components/protectedRoute/ProtectedRouter";
import DashboardPage from "./page/DashboardPage";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/dashboard/MainDashboard";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Protectedroute />}>
          <Route path="/mainDashboard" element={<MainDashboard />} />
        </Route>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/sideBar" element={<Sidebar />} />
      </Routes>
    </div>
  );
}

export default App;
