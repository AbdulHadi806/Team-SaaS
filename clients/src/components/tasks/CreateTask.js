import React, { useState, useEffect } from "react";
import {
  useCreateTaskMutation,
  useGetAllUsersMutation,
} from "../../redux/apiCalls/apiSlice";
import InputFields from "../login/InputFields";
import { AdminToken } from "../../redux/utils/adminAuth";
import { faTasks, faTasksAlt } from "@fortawesome/free-solid-svg-icons";

function CreateTask({ openModal, closeModal }) {
  const [usersData, setUsersData] = useState([]);
  const [task, setTask] = useState({
    task: "",
    assigned_to_role: "",
    assigned_to: " ",
  });

  const [createTask] = useCreateTaskMutation();
  const [getAllUsers] = useGetAllUsersMutation();
  const token = AdminToken();

  useEffect(() => {
    getAllUsersHandler();
  }, []);

  useEffect(() => {
    console.log("Updated user data:", usersData);
  }, [usersData]);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
    console.log("ghjgjhg", task);
  };

  const getAllUsersHandler = async () => {
    try {
      const res = await getAllUsers(token);
      console.log(res, "getAllUsersHandler");
      setUsersData(res.data.users);
      console.log("userdata", usersData);
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      console.log(token, "tooo");
      const response = await createTask(task);
      console.log("respo", response);
      closeModal();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className=" z-10 fixed inset-0 w-[100%] h-screen flex justify-center items-center">
        <form
          className="className= md:w-[600px] p-[60px]  bg-[#125680] rounded "
          onSubmit={submitHandler}
        >
          <InputFields
            iconname={faTasksAlt}
            type="text"
            name="task"
            id="task"
            value={task.task}
            onChange={handleChange}
            placeholder="Task"
            className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
          />
          <InputFields
            iconname={faTasks}
            type="text"
            name="assigned_to_role"
            id="assigned_to_role"
            value={task.assigned_to_role}
            onChange={handleChange}
            placeholder=" Assigned Role"
            className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
          />
          <select
            name="assigned_to"
            value={task.assigned_to}
            onChange={handleChange}
            className="border border-[#86a4c3] w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none"
          >
            <option value="">Assigned To</option>
            {usersData &&
              usersData.map((user) => (
                <option key={user._id} value={user._id}>
                  {user.userName}
                </option>
              ))}
          </select>

          <div className="flex justify-center pt-10">
            <button
              type="submit"
              className="bg-[#FF6C6C] text-white uppercase font-semibold mt-4 py-2 hover:bg-[#000] hover:transition-all  px-6 rounded"
            >
              Create Task
            </button>
            <button
              className="bg-[#134E4C] text-white uppercase font-semibold mt-4 py-2 hover:bg-[#000] hover:transition-all ms-3  px-6 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateTask;
