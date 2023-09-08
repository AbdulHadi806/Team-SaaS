import React, { useEffect, useState } from "react";
import { useGetAdminProfileMutation } from "../redux/apiCalls/apiSlice";
import { AdminToken, LogoutAdminHandler } from "../redux/utils/adminAuth";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Header() {
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
    <div className="shadow px-[20px] flex justify-between items-center xl:px-[40px] py-[20px]  bg-white">
      <h3 className="text-[21px] font-semibold">Admin</h3>
      <button
        onClick={() => {
          setProfileDropdown(!profileDropdown);
        }}
        className="relative min-w-[50px] bg-[#1F2937] p-2 rounded-[100%]"
      >
        <div className="flex items-center">
          <div className="w-[40px]">
            <img src="/assets/avatar-3.png" alt="Admin Image" />
          </div>
        </div>
        <div
          className="bg-white py-1 absolute shadow-lg w-[130px] left-[-50px] top-[60px] right-0 rounded-b-lg"
          style={profileDropdown ? { display: "block" } : { display: "none" }}
        >
          <ul>
            <Link to={"/admin-profile"} className="px-1 py-[5px] hover:text-[#660079] font-medium">
              Profile
            </Link>
            <li className="border-t py-[5px] px-1 hover:text-[#660079] font-medium">
              Dashboard
            </li>
            <li
              className="border-t py-[5px] px-1 text-[#9b0202] font-medium"
              onClick={LogoutAdminHandler}
            >
              Logout
            </li>
          </ul>
        </div>
      </button>
    </div>
  );
}

export default Header;
