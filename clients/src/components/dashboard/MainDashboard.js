import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";
import Tasks from "./Tasks";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";

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
      <div className="flex w-full">
        <Sidebar />
        <div className="flex flex-col ps-[60px] w-11/12">
          <Dashboard profile={profile} />
          <Tasks />
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
