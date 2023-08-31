import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import InputFields from "../login/InputFields";
import { AdminToken } from "../../redux/utils/adminAuth";

import {
  faUserCheck,
  faClipboardCheck,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import { useCreateUserMutation } from "../../redux/apiCalls/apiSlice";

const UserCreate = ({ openModal, closeModal }) => {
  const [createUser] = useCreateUserMutation();

  const [user, setUser] = useState({
    userName: "",
    password: "",
    role: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await createUser(user);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded-lg shadow-md relative">
        <form
          className="className= md:w-[600px] p-[60px]  rounded "
          onSubmit={submitHandler}
          key={user._id}
        >
          <InputFields
            iconname={faUserSecret}
            type="text"
            name="userName"
            id="userName"
            value={user.userName}
            onChange={handleChange}
            placeholder="Username"
            className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
          />
          <InputFields
            iconname={faClipboardCheck}
            type={showPassword ? "text" : "password"}
            variant="pass"
            name="password"
            id="password"
            value={user.password}
            onChange={handleChange}
            placeholder=" Password"
            togglePassword={togglePassword}
            showpassword={showPassword}
            className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
          />

          <InputFields
            iconname={faUserSecret}
            type="text"
            name="role"
            id="role"
            value={user.role}
            onChange={handleChange}
            placeholder="Role"
            className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
          />

          <div className="flex justify-center pt-8">
            <button
              type="submit"
              className=" hover:bg-gray-800 text-white uppercase font-semibold mt-4 py-2 bg-[#000] hover:transition-all  px-6 rounded"
            >
              Create User
            </button>
            <button
              className="hover:bg-gray-800  text-white uppercase font-semibold mt-4 py-2 bg-teal-500 hover:transition-all ms-3  px-6 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserCreate;
