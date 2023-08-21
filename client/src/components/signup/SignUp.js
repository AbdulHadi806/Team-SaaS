import React from "react";
import "./SignUp.css";
const SignUp = () => {
  return (
    <>
      <div className="background">
        <div>
          <div className="md:w-[700px] p-[60px]  bg-[#fff] rounded ">
            <h2 className="text-center text-[36px] text-blue-600 font-bold mb-2">
              Get started with Us
            </h2>
            <span className="text-center block mb-6  text-[17px] font-bold">
              Register a new membership
            </span>
            <form className="w-[100%] mb-6">
              <div className="flex items-center mb-6 ">
                <i className="fa-regular fa-user border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
                />
              </div>
              <div className="flex items-center mb-6 ">
                <i className="fa-regular fa-envelope border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
                <input
                  type="text"
                  placeholder="Email"
                  className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
                />
              </div>
              <div className="flex items-center mb-6 ">
                <i className="fa-solid fa-lock border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
                <input
                  type="text"
                  placeholder="Password"
                  className="border border-[#86a4c3] w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
                />
              </div>
              <div className="flex items-center mb-6 ">
                <i className="fa-solid fa-lock border border  border-[#86a4c3]  p-4 rounded rounded-r-none  "></i>
                <input
                  type="text"
                  placeholder="ReTyype Password"
                  className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
                />
              </div>
              <div className="flex items-center  mb-[40px] gap-[40px] ">
                <input type="checkbox" className="h-6 w-6 text-indigo-600" />
                <label className="text-[17px] ">
                  {" "}
                  I agree to the{" "}
                  <span className="text-[#D97706] font-bold">Terms</span>
                </label>
              </div>
              <div className="flex justify-center ">
                <button className="bg-[#00abea] text-white font-semibold py-4 px-6 rounded">
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="flex justify-center">
              <label className="text-[17px] ">
                {" "}
                Already have an account?{" "}
                <a href="/" className="text-[#D97706] font-bold">
                  sign In
                </a>
              </label>
            </div>
            <span className="block text-center pt-3 text-[#fff] text-[20px]">
              -Register with-
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
      </div>
    </>
  );
};

export default SignUp;
