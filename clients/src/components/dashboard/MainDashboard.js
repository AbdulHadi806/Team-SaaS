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
      <div className="flex">
        <Sidebar />
<<<<<<< HEAD
=======
        <div className="flex flex-col pr-[30px]">
>>>>>>> 0d04df339979434f15ad4c67352e56109f55bb5d
        <Dashboard profile={profile} />
      </div>
    </>
  );
}

export default MainDashboard;
