import React, { useEffect, useState } from "react";
import {
  useGetAdminProfileQuery,
  useGetUserByTaskQuery,
  useGetUserProfileQuery,
} from "../redux/apiCalls/apiSlice";
import {
  LogoutAdminHandler,
  UserToken,
} from "../redux/utils/adminAuth";

import Header from "../components/Header";
import { io } from "socket.io-client";
function HeaderPage({ role }) {
  const testToken = UserToken();
  const { data: adminProfile, refetch: getAdminProfile } = useGetAdminProfileQuery(testToken);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const socket = io("http://localhost:8000");

  const { data: userProfile, refetch: getUserProfile } = useGetUserProfileQuery(testToken);

  const { data: notifications, refetch: getAllUserTasks } = useGetUserByTaskQuery(testToken);
  
  useEffect(() => { 
    socket.on("connect", () => {
      console.log("Socket is running at App");
    });
    socket.on(`new_Task_Update_to_${userProfile && userProfile.user._id.toUpperCase()}`, (data) => {
      console.log(data)
      getAllUserTasks();
      console.log(notifications, "notifications");
    });
    return () => {
      socket.off(`new_Task_Update_to_${userProfile && userProfile.user._id.toUpperCase()}`);
    };
  }, [socket]);

  useEffect(() => {
    getAdminProfile();
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
