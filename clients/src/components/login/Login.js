import React, { useState, useEffect } from "react";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import "./Login.css";

import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import { useLoginAdminMutation } from "../../redux/apiCalls/apiSlice";
import InputFields from "./InputFields";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { socialIcons } from "../login/SocialIcons";
import { useDispatch, useSelector } from "react-redux";
import { setAdminToken } from "../../redux/slice/adminSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [saveAdmin, setSaveAdmin] = useState(false)
  const [loginAdmin, { error: loginError }] = useLoginAdminMutation();

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const tokenFromRedux = useSelector(state => state.adminSlice.token)
  const [inputValue, setInput] = useState({
    userName: "",
    password: "",
  });


  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      let res;
         res = await loginAdmin(inputValue);
      if(tokenFromRedux) {
        
         res = await loginAdmin(inputValue, tokenFromRedux);
      }
      if (res.data.status) {
        const token = res.data.token;
        
        if(saveAdmin){
          localStorage.setItem("access_token_admin", token);
        }
        else {
          dispatch(setAdminToken(token))
        }
        alertify.set("notifier", "position", "top-center");
        alertify.success(res.data.message);
        navigate("/mainDashboard");
      }

      if (!res.data.status) {
        alertify.set("notifier", "position", "top-center");
        alertify.error(res.data.message);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (loginError) {
      alertify.set("notifier", "position", "top-center");
      alertify.error(loginError && loginError.data.message);
    }
  }, [loginError, navigate]);
  
  const handleChange = (e) => {
    setInput({ ...inputValue, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="background-1 h-full">
        <div>
          <div className="md:w-[600px] p-[60px]  bg-[#fff] rounded ">
            <h2 className="text-center text-[36px] text-blue-600 font-bold mb-2">
              Get started with Us
            </h2>
            <span className="text-center block mb-6  text-[17px] font-bold">
              Sign in to continue to WebkitX.
            </span>
            <form className="w-[100%] mb-6" onSubmit={submitHandler}>
              <InputFields
                iconname={faUser}
                type="text"
                name="userName"
                id="userName"
                value={inputValue.userName}
                onChange={handleChange}
                placeholder="Username"
                className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
              />
              <InputFields
                iconname={faLock}
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                variant="pass"
                value={inputValue.password}
                onChange={handleChange}
                placeholder="Password"
                className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none "
                togglepassword={togglePassword}
                showpassword={showPassword}
              />
              <div className="flex  justify-between ">
                <div className="flex items-start  mb-[40px] gap-[30px] ">
                  <input type="checkbox" onChange={() => setSaveAdmin(!saveAdmin)} className="h-6 w-6 text-indigo-600" />
                  <label className="text-[17px] ">
                    {" "}
                    Remember Me{" "}
                    <span className="text-[#D97706] font-bold">Terms</span>
                  </label>
                </div>
                <div className="flex gap-[4px] ">
                  <i className="fa-solid fa-lock  pt-1 pe-2 "></i>
                  <a href="/">Forget Password</a>
                </div>
              </div>
              <div className="flex justify-center ">
                <button
                  type="submit"
                  className="bg-[#FF6C6C] text-white font-semibold py-2 hover:bg-[#000] hover:transition-all  px-6 rounded"
                >
                  LOG IN
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <label className="text-[17px] ">
                Don't have an account?
                <Link
                  to="/signUp"
                  className="text-[#D97706] hover:text-[#FF6C6C] font-bold ms-1"
                >
                  Sign Up
                </Link>
              </label>
            </div>
          </div>
          <span className="block text-center pt-3 text-[#fff] text-[20px]">
            -sign with-
          </span>
          <div className="flex items-center justify-center mt-3">
            {socialIcons.map((icons, index) => (
              <a
                key={index}
                href={icons.link}
                className={`mx-2 h-[50px] w-[50px] bg-[${icons.color}] rounded-[100%] box-border inline-block text-[#fff] flex items-center justify-center text-[20px]`}
                style={{ backgroundColor: icons.color }}
              >
                <FontAwesomeIcon icon={icons.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
