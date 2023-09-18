import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import DashboardPage from "../../page/DashboardPage";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";
import Tabs from "./Tabs";
import HeaderPage from "../../page/HeaderPage";

function MainDashboard() {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();
  const adminRole = localStorage.getItem("adminRole");
  const tokenTest = AdminToken();

  const fetchAdminProfile = async () => {
    try {
      const response = await getAdminProfile(tokenTest);
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
        <HeaderPage role={adminRole} />
          {/* {tokenTest ? (
            <HeaderPage role={adminRole} />
          ) : (
            <HeaderPage role={userRole} />
          )} */}
          <DashboardPage profile={profile} />
          <div className="pb-[40px]"><Tabs /> </div>
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
