import React from "react";
import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";

function MainDashboard() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default MainDashboard;
