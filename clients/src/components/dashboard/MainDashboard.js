import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";
import UserTable from "../user/UserTable";
import Header from "../Header";
import Tabs from "./Tabs";

function MainDashboard() {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();

  
  const token = AdminToken()
  const fetchAdminProfile = async () => {
    try {
      const  response = await getAdminProfile(token);
      const adminName = response.data.name;
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
        <div className="flex-1 flex flex-col md:pl-[240px]">
          <Header />
          <Dashboard profile={profile} />
          <div className="pb-[40px]">
          <Tabs />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainDashboard;