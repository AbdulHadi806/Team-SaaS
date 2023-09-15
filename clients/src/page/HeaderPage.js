import React, { useEffect, useState } from "react";
import { useGetAdminProfileMutation } from "../redux/apiCalls/apiSlice";
import { AdminToken, LogoutAdminHandler } from "../redux/utils/adminAuth";

import Header from "../components/Header";
function HeaderPage({ role }) {
  const [profile, setProfile] = useState("");
  const [getAdminProfile] = useGetAdminProfileMutation();
  const [profileDropdown, setProfileDropdown] = useState(false);

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
      setProfileDropdown={setProfileDropdown}
      profileDropdown={profileDropdown}
      LogoutAdminHandler={LogoutAdminHandler}
    />
  );
}

export default HeaderPage;
