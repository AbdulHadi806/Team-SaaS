import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import Header from "../Header";
import { useGetAdminProfileMutation } from "../../redux/apiCalls/apiSlice";
import { AdminToken } from "../../redux/utils/adminAuth";
export const AdminProfile = () => {

const [getAdminProfile]= useGetAdminProfileMutation();
const token = AdminToken();
const [profileData, setProfileData] = useState({
  name: '',
  email: '',
  username: '',
  createAt: '',
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

  return (
    <>
      <Sidebar />
      <div className="flex-1 flex  md:pl-[300px] gap-[20px] pr-[80px] pt-[60px]">
        <div className="w-[179px] p-[10px] bg-[#F0F8FF] flex items-center justify-center rounded-[4px] ">
          <img
            src="assets/avatar-1.png"
            alt="Admin Image"
            className="  w-[80px] h-[80px] rounded-[80px] "
          />
        </div>
        <div className=" w-[100%] px-[20px] py-[15px] bg-[#F0F8FF] rounded-[4px]">
          <ul>
            <li className="flex gap-2 text-[18px]">
              Name : <span className="font-bold">{profileData.name}</span>
            </li>
            <li className="flex gap-2 text-[18px]">
              Username : <span className="font-bold">{profileData.username}</span>{" "}
            </li>
            <li className="flex gap-2 text-[18px]">
              Email : <span className="font-bold">{profileData.email}</span>
            </li>
            <li className="flex gap-2 text-[18px]">
              CreateAt : <span className="font-bold">{getData (profileData.createAt)}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1 flex  md:pl-[300px] gap-[20px] pr-[80px] pt-[60px]">
        <div className="w-[179px] p-[10px] bg-[#F0F8FF]  items-center justify-center rounded-[4px] text-center ">
        <img
            src="assets/task.svg"
            alt="Admin Image"
            className="   w-[55px] h-[80%] rounded-[80px]  mx-auto relative mt-[-50px]"
          />
          <div><span className="text-[20px] font-bold">Total Task</span></div>
          <div><span className="text-[20px] font-bold">16</span></div>
        </div>
        <div className="w-[100%] px-[20px] py-[15px] bg-[#F0F8FF] rounded-[4px] text-center ">
        <img
            src="assets/users.svg"
            alt="Admin Image"
            className="  w-[90px] h-[80%] rounded-[80px]  mx-auto relative mt-[-50px] "
          />
          <div><span className="text-[20px] font-bold">Total Users</span></div>
          <div><span className="text-[20px] font-bold">16</span></div>
        </div>
      </div>
    </>
  );
};