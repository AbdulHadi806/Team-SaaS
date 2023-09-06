import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faTrash } from "@fortawesome/free-solid-svg-icons";
import dateFormat from "dateformat";
import { useEffect, useState } from "react";
import CreateTask from "../tasks/CreateTask";
import { Link } from "react-router-dom";
import { useDeleteTaskMutation, useGetAllTasksQuery } from "../../redux/apiCalls/apiSlice";
import { useLocation } from "react-router-dom";
import UserCreate from "../user/UserCreate";
import { AdminToken } from "../../redux/utils/adminAuth";

const Dashboard = ({ profile }) => {
  const [dateTime, setDateTime] = useState();
  const [day, setDay] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const testToken = AdminToken()
  const {data: taskRoles} = useGetAllTasksQuery(testToken);
  const [isUserModalOpen, setIsUserModalOpen] = useState(false);
  const [deletetask, setDeletetask] = useState(
    new Array(taskRoles && taskRoles.getAllTasks.length).fill(false)
  );
  const toggleCard = (index) => {
    const updatedIndex = new Array(taskRoles.getAllTasks.length).fill(false);
    updatedIndex[index] = !deletetask[index];
    setDeletetask(updatedIndex);
  };
  const [deleteTask] = useDeleteTaskMutation(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const deleteTaskHandler = async (id) => {
    try {
      await deleteTask({ _id: id });
      setDeletetask(!deleteTask); 
    } catch (error) {
      console.log(error); 
    } 
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  }; 

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openUserModal = () => {
    setIsUserModalOpen(true);
  };

  const closeUserModal = () => {
    setIsUserModalOpen(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const colors = ["bg-[#2F4F4F]", "bg-[#1F2937]", "bg-[#4A5568]"];

  const formattedTime = dateFormat(day, "h:MM:ss TT");
  const formattedDateTime = dateFormat(dateTime, "dddd, mmmm dS, yyyy");
  return (
    <>
      <div className="w-full flex-row justify-between p-[40px]">
        <div className="flex justify-between wrap mb-[50px]">
          <div>
            <h2 className="text-[30px] font-bold text-[#3E1D47] capitalize">
              Hello, {profile}
            </h2>
            <span className="text-[#3E1D47] text-[20px]">
              Today is {formattedDateTime}
            </span>
            <span className="text-[#3E1D47] text-[20px] block">
              {formattedTime}
            </span>
          </div>
          <div className="flex items-start gap-[10px]">
            <button
              onClick={openModal}
              className="px-[40px] py-4 color bg-[#274747] hover:bg-[#4A5568] text-white rounded-md "
            >
              Add Task
            </button>
            <button
              onClick={openUserModal}
              className="px-[40px] py-4 color bg-[#4A5568] hover:bg-[#274747] text-white rounded-md "
            >
              Add User
            </button>
          </div>
        </div> 

        <div className="flex gap-4  ">
        {taskRoles &&
            taskRoles.getAllTasks.map((item, index) => (
              <div
                key={item._id}
                className={` w-1/3 ${
                  colors[index % colors.length]
                }   rounded-lg p-[30px] ease-in-out duration-300 pb-[40px] hover:scale-[1.05] hover:shadow-[2px_3px_31px_4px_rgb(0,0,0,0.3)]`}
              >
                <div className="flex items-center justify-between mb-1 ">
                  <div className=" bg-[#fff] mb-3 rounded-full">
                    <img
                      src="assets/avatar-4.png"
                      alt="not found"
                      className="w-[50px]"
                    />
                  </div>
                  <div className="relative">
                    <button onClick={() => toggleCard(index)}>
                      <FontAwesomeIcon
                        className=" text-[30px] text-[#fff] cursor-pointer "
                        icon={faEllipsisVertical}
                      />
                    </button>
                    <div
                      className={`${
                        deletetask[index]
                          ? "transition ease-in-out delay-150 block w-[90px] opacity-1  bg-white h-[30px] rounded-lg absolute top-[35px] right-0 flex"
                          : "height-[0px] transition ease-in-out delay-150 hidden"
                      }`}
                    >
                      <div
                        onClick={() => {
                          deleteTaskHandler(item._id);
                          console.log("id", item._id);
                        }}
                        className="flex justify-between block  w-full p-3 items-center
                        cursor-pointer"
                      >
                        <FontAwesomeIcon
                          icon={faTrash}
                          className="text-[11px]"
                        />
                        <span className="font-bold">Delete</span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="text-[30px] font-bold text-[#fff] mb-3 ">
                  {item.assigned_to_role}
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
            ))}
        </div>
      </div>
      {isModalOpen && (
        <CreateTask closeModal={closeModal} openModal={openModal} />
      )}

      {isUserModalOpen && (
        <UserCreate closeModal={closeUserModal} openModal={openUserModal} />
      )}
    </>
  );
};

export default Dashboard;
