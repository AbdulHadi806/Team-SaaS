import "./App.css";
import SignUpPage from "./page/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import DashboardProtectedroute from "./components/protectedRoute/DashboardProtectedRouter";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/dashboard/MainDashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import { AdminProfile } from "./components/user/AdminProfile";
import { useEffect } from "react";
import io from 'socket.io-client';
import CreateTask from "./components/tasks/CreateTask";
import RolesDetail from "./components/tasks/RolesDetail";

function App() {
const socket = io('http://localhost:8000');

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket is running")
    })
    socket.on('connect_error', (error) => {
      console.error('Socket connection error:', error);
    });
    socket.on("todoadded", (data) => {
      console.log(data)
    })
    return () => {
      socket.off('todoadded'); 
    };
  }, [])
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Login />} />
        <Route element={<DashboardProtectedroute />}>
          <Route path="/mainDashboard" element={<MainDashboard />} />
          <Route path="/admin-profile" element={<AdminProfile />} />
          <Route path="/rolesDetail/:roles" element={<RolesDetail />} />
        </Route>
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/signUp" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
