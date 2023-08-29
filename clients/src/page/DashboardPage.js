import React from "react";
import Dashboard from "../components/dashboard/Dashboard";
import Tasks from "../components/dashboard/Tasks";
import { Link, Route } from "react-router-dom";
import UserTable from "../components/user/UserTable";

const DashboardPage = () => {
  return (
    <>
      <Dashboard />
      <div className="bg-[#000]">
        <Link href="/mainDashboard/tasks">Tasks</Link>
        <Link href="/mainDashboard/users">Users</Link>
      </div>
      <Route path="/mainDashboard/tasks" element={<Tasks />} />
      <Route path="/mainDashboard/users" element={<UserTable />} />
    </>
  );
};

export default DashboardPage;
