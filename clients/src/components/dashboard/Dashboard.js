import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import CreateTask from "../tasks/CreateTask";

const Dashboard = ({ profile }) => {
  const [dateTime, setDateTime] = useState();
  const [day, setDay] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formattedTime = dateFormat(day, "h:MM:ss TT");
  const formattedDateTime = dateFormat(dateTime, "dddd, mmmm dS, yyyy");
  return (
    <>
      <div className="w-11/12 flex-row justify-between p-[40px]">
        <div className="flex justify-between wrap mb-[50px]">
          <div>
            <h2 className="text-[30px] font-bold text-[#3E1D47]">
              Hello, {profile}
            </h2>
            <span className="text-[#3E1D47] text-[20px]">
              Today is {formattedDateTime}
            </span>
            <span className="text-[#3E1D47] text-[20px] block">
              {formattedTime}
            </span>
          </div>
          <div className="flex items-center">
            <i class="fa-solid fa-magnifying-glass  px-5 py-[25px] color bg-[#D1D5DB] mr-2 rounded-md text-[20px] text-[#000000] font-bold"></i>
            <button
              onClick={openModal}
              className="px-[40px] py-6 color bg-[#000000] text-white rounded-md "
            >
              Add New User
            </button>
          </div>
        </div>

        <div className="flex gap-4  ">
          <div className=" w-1/3  bg-[#70367C] rounded-lg p-[30px] pb-[40px">
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
              <span className="text-[#fff] mb-2 inline-block">
                10 task-80% complete
              </span>
              <div className="w-full bg-[#9d9d9d] rounded-full h-2.5 dark:bg-gray-700">
                <div
                  className="bg-[#fff] h-2.5 rounded-full"
                  style={{ width: "45%" }}
                ></div>
              </div>
            </div>
          </div>

          <div className="w-1/3 bg-[#95CFD5] rounded-lg p-6">
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

          <div className="w-1/3  bg-[#FD7E50] rounded-lg p-6">
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
      {isModalOpen && (
        <CreateTask closeModal={closeModal} openModal={openModal} />
      )}
    </>
  );
};

export default Dashboard;
