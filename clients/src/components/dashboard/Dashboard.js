import React from "react";
import CreateTask from "../tasks/CreateTask";
import UserCreate from "../user/UserCreate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical, faTrash } from "@fortawesome/free-solid-svg-icons";

function Dashboard(props) {
  const {
    profile,
    formattedDateTime,
    openModal,
    formattedTime,
    openUserModal,
    taskRoles,
    toggleCard,
    deletetask,
    colors,
    deleteTaskHandler,
    isModalOpen,
    isUserModalOpen,
    closeModal,
    closeUserModal,
  } = props;
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
            [
              ...new Set(
                taskRoles.getAllTasks.map((item) => item.assigned_to_role)
              ),
            ].map((role, index) => {
              // Find the first task with the current role
              const taskWithRole = taskRoles.getAllTasks.find(
                (item) => item.assigned_to_role === role
              );

              // Check if a task with the current role exists
              if (taskWithRole) {
                return (
                  <div
                    key={taskWithRole._id} // Use the unique identifier of the task (assuming it's unique)
                    className={`w-1/3 ${
                      colors[index % colors.length]
                    } rounded-lg p-[30px] ease-in-out duration-300 pb-[40px] hover:scale-[1.05] hover:shadow-[2px_3px_31px_4px_rgb(0,0,0,0.3)]`}
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
                              ? "transition ease-in-out delay-150 block w-[80px] opacity-1  bg-white h-[30px] rounded-lg absolute top-[35px] right-0 flex"
                              : "height-[0px] transition ease-in-out delay-150 hidden"
                          }`}
                        >
                          <div
                            onClick={() => {
                              deleteTaskHandler(taskWithRole.assigned_to_role);
                              console.log("id", taskWithRole.assigned_to_role);
                            }}
                            className="flex  block  gap-2 w-full p-2 justify-center items-center
                        cursor-pointer"
                          >
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="text-[11px]"
                            />
                            <span className="font-bold text-[15px]">Delete</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-[30px] font-bold text-[#fff] mb-3 ">
                      {taskWithRole.assigned_to_role}
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
                );
              }
            })}
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
}

export default Dashboard;
