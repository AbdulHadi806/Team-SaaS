import React, { useEffect, useState } from "react";
import { useGetAdminProfileMutation } from "../redux/apiCalls/apiSlice";
import { AdminToken } from "../redux/utils/adminAuth";
import { AdminProfile } from "../components/user/AdminProfile";
function AdminProfilePage() {
  const [getAdminProfile] = useGetAdminProfileMutation();
  const token = AdminToken();
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    username: "",
    createAt: "",
  });

  const getAdminInfo = async () => {
    try {
      const response = await getAdminProfile(token);
      const { name, email, userName, createdAt } = response.data;
      setProfileData({ name, email, username: userName, createAt: createdAt });
    } catch (error) {
      console.log(error);
    }
  };

  const getData = (item) => {
    const timestamp = item;
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  useEffect(() => {
    if (token) {
      getAdminInfo();
    }
  }, [token]);

  return <AdminProfile profileData={profileData} getData={getData} />;
}

export default AdminProfilePage;
