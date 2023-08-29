import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";
import Header from "../Header";

function MainDashboard() {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();
  const fetchAdminProfile = async () => {
    try {
      const token = AdminToken();
      const response = await getAdminProfile(token);
      const adminName = response.data.name;
      console.log("response", response);
      setProfile(adminName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAdminProfile();
  }, []);

  return (
    <>
      <div className="flex offset-3">
        <Sidebar />
        <div className="flex-1 flex flex-col pl-60 mx-auto max-w-full">
          <div>
            <Header />
            <Dashboard profile={profile} />
            <Tasks />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
