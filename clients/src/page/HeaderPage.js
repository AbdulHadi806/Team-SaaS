import React, { useEffect, useState } from "react";
import {
  useGetAdminProfileMutation,
  useGetUserByTaskQuery,
} from "../redux/apiCalls/apiSlice";
import {
  AdminToken,
  LogoutAdminHandler,
  UserToken,
} from "../redux/utils/adminAuth";

import Header from "../components/Header";
import { io } from "socket.io-client";
function HeaderPage({ role }) {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();
  const [profileDropdown, setProfileDropdown] = useState(false);
  const socket = io("http://localhost:8000");

  const testToken = UserToken();
  const { data: notifications, refetch: getAllUserTasks } =
    useGetUserByTaskQuery(testToken);
  useEffect(() => {
    socket.on("connect", () => {
      console.log("Socket is running at App");
    });
    socket.on("connect_error", (error) => {
      console.error("Socket connection error:", error);
    });
    socket.on("new_Task_Update", (data) => {
      console.log(data, "data from userTestDashboard");
      getAllUserTasks();
      console.log(notifications, "notifications");
    });
    return () => {
      socket.off("new_Task_Update");
    };
  }, [socket]);
  const token = AdminToken();
  const fetchAdminProfile = async () => {
    try {
      const response = await getAdminProfile(token);
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
    <Header
      role={role}
      notifications={notifications}
      setProfileDropdown={setProfileDropdown}
      profileDropdown={profileDropdown}
      LogoutAdminHandler={LogoutAdminHandler}
    />
  );
}

export default HeaderPage;
