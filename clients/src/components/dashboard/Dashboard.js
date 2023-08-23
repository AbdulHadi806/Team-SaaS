import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
const Dashboard = () => {
  return (
    <>
      <div className="max-w-[1600px] mx-auto p-[40px]">
        <div className="flex items-center justify-between wrap mb-[50px]">
          <div>
            <h2 className="text-[30px] font-bold text-[#3E1D47]">
              Hello, Sara
            </h2>
            <data className="text-[#3E1D47] text-[20px]">
              Today is Monday, 20 Aug 2023
            </data>
          </div>
          <div className="flex items-center">
            <i class="fa-solid fa-magnifying-glass  px-5 py-[25px] color bg-[#D1D5DB] mr-2 rounded-md text-[20px] text-[#000000] font-bold"></i>
            <a
              href="/dashboard"
              className="px-[40px] py-6 color bg-[#000000] text-white rounded-md "
            >
              Add New User
            </a>
          </div>
        </div>

        <div className="flex wrap justify-between">
          <div className="w-[470px] h-[260px] bg-[#70367C] rounded-lg p-[30px] pb-[40px">
            <div className="flex items-center justify-between mb-1 ">
              <div className=" bg-[#fff] mb-3 rounded-full">
                <img
                  src="assets/avatar-4.png"
                  alt="not found"
                  className="w-[50px]"
                />
              </div>
              <FontAwesomeIcon
                className=" text-[30px] text-[#fff] cursor-pointer"
                icon={faEllipsisVertical}
              />
            </div>
            <h3 className="text-[30px] font-bold text-[#fff] mb-3 ">
              Web <br /> Development
            </h3>
            <div>
              <span className="text-[#fff] mb-2 inline-block">10 task-80% complete</span>
              <div className="w-full bg-[#9d9d9d] rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#fff] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="w-[470px] h-[240px] bg-[#95CFD5] rounded-lg p-6">
            <div className="flex items-center justify-between mb-1 ">
              <div className=" bg-[#fff] m-3 rounded-full">
                <img
                  src="assets/avatar-3.png"
                  alt="not found"
                  className="w-[50px]"
                />
              </div>
              <FontAwesomeIcon
                className=" text-[30px] text-[#fff] "
                icon={faEllipsisVertical}
              />
            </div>
            <h3 className="text-[30px] font-bold text-[#fff] mb-1 ">
              Mobile App <br /> Design
            </h3>
            <div>
              <span className="text-[#fff] mb-2">10 task-80% complete</span>
              <div className="w-full bg-[#9d9d9d] rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#fff] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="w-[470px] h-[240px] bg-[#FD7E50] rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div className=" bg-[#fff] m-3 rounded-full">
                <img
                  src="assets/avatar-1.png"
                  alt="not found"
                  className="w-[50px]"
                />
              </div>
              <FontAwesomeIcon
                className="p-4 text-[30px] text-[#fff] "
                icon={faEllipsisVertical}
              />
            </div>
            <h3 className="text-[30px] font-bold text-[#fff] mb-2 ">
              FaceBook <br /> Brand UI Kit
            </h3>
            <div>
              <span className="text-[#fff] mb-2">10 task-80% complete</span>
              <div className="w-full bg-[#9d9d9d] rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#fff] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
