import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import DashboardPage from "../../page/DashboardPage";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";
import Header from "../Header";
import Tabs from "./Tabs";

function MainDashboard() {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();

  const fetchAdminProfile = async () => {
    const tokenTest = AdminToken();
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
          <Header />
          <DashboardPage profile={profile} />
          <div className="pb-[40px]">
            <Tabs />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
