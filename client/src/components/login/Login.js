import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <>
      <div className="background-1">
        <div>
          <div className="md:w-[600px] p-[60px]  bg-[#fff] rounded ">
            <h2 className="text-center text-[36px] text-blue-600 font-bold mb-2">
              Get started with Us
            </h2>
            <span className="text-center block mb-6  text-[17px] font-bold">
              Sign in to continue to WebkitX.
            </span>
            <form className="w-[100%] mb-6">
              <div className="flex items-center mb-6 ">
                <i className="fa-regular fa-user border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
                <input
                  type="text"
                  placeholder="Username"
                  className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
                />
              </div>

              <div className="flex items-center mb-6 ">
                <i className="fa-solid fa-lock border border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
                <input
                  type="text"
                  placeholder="Password"
                  className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
                />
              </div>

              <div className="flex  justify-between ">
                <div className="flex items-start  mb-[40px] gap-[30px] ">
                  <input type="checkbox" className="h-6 w-6 text-indigo-600" />
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
                <button className="bg-[#FF6C6C] text-white font-semibold py-2 hover:bg-[#000] hover:transition-all  px-6 rounded">
                  LOG IN
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <label className="text-[17px] ">
                {" "}
                Don't have an account?
                <span className="text-[#D97706] hover:text-[#FF6C6C] font-bold">
                  Sign Up
                </span>
              </label>
            </div>
          </div>
          <span className="block text-center pt-3 text-[#fff] text-[20px]">
            -sign with-
          </span>
          <div className="flex items-center justify-center mt-3">
            <a
              href="/"
              className=" h-[50px] w-[50px] bg-[#3b5998] rounded-[100%] box-border inline-block text-[#fff] flex items-center justify-center text-[20px]"
            >
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="/"
              className=" mx-2 h-[50px] w-[50px] bg-[#1da1f2] rounded-[100%] box-border inline-block text-[#fff] flex items-center justify-center text-[20px]"
            >
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a
              href="/"
              className=" h-[50px] w-[50px] bg-[#e1306c] rounded-[100%] box-border inline-block text-[#fff] flex items-center justify-center text-[20px]"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
