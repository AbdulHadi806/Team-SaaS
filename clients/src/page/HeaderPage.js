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
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import Header from "../components/Header";
import { io } from "socket.io-client";

function HeaderPage({ role }) {
  const testToken = UserToken();
  const { data: adminProfile, refetch: getAdminProfile } = useGetAdminProfileQuery(testToken);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const socket = io("http://localhost:8000");

  const { data: userProfile } = useGetUserProfileQuery(testToken);
  const { data: notifications, refetch: getAllUserTasks } = useGetUserByTaskQuery(testToken);
  
  useEffect(() => { 
    socket.on(`new_Task_Update_to_${userProfile && userProfile.user._id.toUpperCase()}`, (data) => {
      alertify.set("notifier", "position", "top-right");
          alertify.success(data.message);
      getAllUserTasks();
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
