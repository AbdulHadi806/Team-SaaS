import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";
import { AdminToken } from "../../redux/utils/adminAuth";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";
import UserTable from "../user/UserTable";
import Header from "../Header";
import { useSelector } from "react-redux";

function MainDashboard() {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();
  const tokenFromRedux = useSelector(state => state.adminSlice.token);
  const token = AdminToken()
  const fetchAdminProfile = async () => {
    try {
      let response;;
      if(tokenFromRedux){
        response = await getAdminProfile(tokenFromRedux);
      }
      else {
        response = await getAdminProfile(token);
      }
      const adminName = response.data.name;
      console.log("response", response);
      setProfile(adminName);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchAdminProfile();
  }, [token]);
  useEffect(() => {
    console.log(tokenFromRedux, "tokenFromRedux from mainDashgboard")
  },[tokenFromRedux])
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col md:pl-[240px]">
          <Header />
          <Dashboard profile={profile} />
          <UserTable />
        </div>
      </div>
    </>
  )
}

export default MainDashboard;