import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";
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
        <div className="flex-1 flex flex-col ps-[60px]">
          <Dashboard profile={profile} />
        </div>
      </div>
    </>
  )
}

export default MainDashboard;