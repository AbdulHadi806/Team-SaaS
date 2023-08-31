import "./App.css";
import SignUpPage from "./page/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import DashboardProtectedroute from "./components/protectedRoute/DashboardProtectedRouter";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/dashboard/MainDashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import CreateTask from "./components/tasks/CreateTask";
import CreateUsers from "./components/user/CreateUsers";

import UserTable from "./components/user/UserTable";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<Login />} />
        <Route element={<DashboardProtectedroute />}>
          <Route path="/mainDashboard" element={<MainDashboard />} />
        </Route>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/createTask" element={<CreateTask />} />
        <Route path="/createUser" element={<CreateUsers />} />
        <Route path="/userTable" element={<UserTable />} />
      </Routes>
    </div>
  );
}

export default App;
