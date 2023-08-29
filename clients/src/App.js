import "./App.css";
import SignUpPage from "./page/SignUpPage";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import DashboardProtectedroute from "./components/protectedRoute/DashboardProtectedRouter";
import { Logout } from "./components/login/Logout";
import Sidebar from "./components/Sidebar";
import MainDashboard from "./components/dashboard/MainDashboard";
import NotFoundPage from "./components/NotFound/NotFoundPage";
import CreateUsers from "./components/user/CreateUsers";


function App() {
  return (
    <div className="App h-[100vh]">
      <Routes>
      <Route path='*' element={<NotFoundPage />}/>
        <Route path="/" element={<Login />} />
        <Route element={<DashboardProtectedroute />}>
          <Route path="/mainDashboard" element={<MainDashboard />} />
        </Route>
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/sideBar" element={<Sidebar />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/createUser" element={<CreateUsers/>}/>
      </Routes>
    </div>
  );
}

export default App;
