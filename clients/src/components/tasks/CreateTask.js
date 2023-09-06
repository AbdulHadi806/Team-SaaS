import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  useCreateTaskMutation,
  useGetAllUsersQuery,
} from "../../redux/apiCalls/apiSlice";
import InputFields from "../login/InputFields";
import { AdminToken } from "../../redux/utils/adminAuth";
import {
  faUserCheck,
  faClipboardCheck,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";

function CreateTask({ openModal, closeModal }) {
  const [usersData, setUsersData] = useState([]);
  const tokenTest = AdminToken()
  const currentPage = 1
  const {data, refetch: getAllUsers} = useGetAllUsersQuery({currentPage,tokenTest})
  const navigate = useNavigate();
  const [task, setTask] = useState({
    task: "",
    assigned_to_role: "",
    assigned_to: " ",
  });
  useEffect(() => {
    getAllUsers({currentPage,tokenTest})
    console.log(data,':datadatadata')
  }, [])
  const [createTask] = useCreateTaskMutation();

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const testToken = AdminToken();
    try {
      const response = await createTask({task, testToken});
      closeModal();
      if (response) {
        navigate("/mainDashboard");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-50 ">
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <button
            className=" absolute right-[-10px] top-[-20px] text-dark uppercase font-semibold mt-4 py-2  hover:transition-all ms-3  px-6 rounded text-[30px]"
            onClick={closeModal}
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <form
            className="className= md:w-[600px] p-[60px]  rounded "
            onSubmit={submitHandler}
          >
            <InputFields
              iconname={faClipboardCheck}
              type="text"
              name="task"
              id="task"
              value={task.task}
              onChange={handleChange}
              placeholder="Task"
              className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none focus:border-0"
            />
            <InputFields
              iconname={faUserSecret}
              type="text"
              name="assigned_to_role"
              id="assigned_to_role"
              value={task.assigned_to_role}
              onChange={handleChange}
              placeholder=" Assigned Role"
              className="border  border-[#86a4c3]  w-[100%] p-3 border-l-0 rounded rounded-l-none outline-none  focus:border-0"
            />
            <div className="flex items-center  mb-4 relative">
              <FontAwesomeIcon
                icon={faUserCheck}
                className=" border  border-[#86a4c3]  py-[16px] w-[54px] rounded rounded-r-none  "
              />
              <select
                name="assigned_to"
                value={task.assigned_to}
                onChange={handleChange}
                className="border border-[#86a4c3] w-[100%] p-3  outline-none text-[#B9BAC4]  focus:border-0 border-l-0"
              >
                <option className="text-[#000]">Assigned To</option>
                {data &&
                  data.users.map((user) => (
                    <option
                      key={user._id}
                      value={user._id}
                      className=" bg-dark text-[16px] text-[#000]"
                    >
                      {user.userName}
                    </option>
                  ))}
              </select>
            </div>
            <div className="flex justify-center pt-8">
              <button
                type="submit"
                className=" hover:bg-gray-800 text-white uppercase font-semibold mt-4 py-2 bg-[#000] hover:transition-all  px-6 rounded"
              >
                Create Task
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
    </>
  );
}

export default CreateTask;
