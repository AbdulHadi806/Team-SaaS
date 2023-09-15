import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import Header from "../Header";
import {
  useDeleteUserMutation,
  useGetRolesQuery,
  useGetUserByRoleQuery,
} from "../../redux/apiCalls/apiSlice";
import { useParams } from "react-router-dom";
import { AdminToken } from "../../redux/utils/adminAuth";
import { ToolTip } from "../reusableComponent/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faCog } from "@fortawesome/free-solid-svg-icons";
import Pagination from "../reusableComponent/Pagination";
import ConfirmationModal from "../reusableComponent/ComfirmationModel";
import SpecificTask from "./SpecificTask";
import { SpecificUser } from "./SpecificUser";
import { NewTabs } from "./NewTabs";

const RolesDetail = () => {
  const [deleteUser] = useDeleteUserMutation();
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userid, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const tableHeaderData = ["#", "Username", "Role", "createdAt", "Action"];
  const { roles } = useParams();
  const token = AdminToken();
  const { data: getRoles, refetch: getTasksByRoles } = useGetRolesQuery({
    token,
    roles,
  });
  const { data: getUsers, refetch: getUserByRole } = useGetUserByRoleQuery({
    token,
    roles,
  });

  useEffect(() => {
    console.log(getUsers, ":getUsers");
    getTasksByRoles({ token, roles });
    getUserByRole({ token, roles });

    console.log(getUsers, "getUsers");
  }, [roles]);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };

  const handleDelete = async () => {
    const tokenTest = AdminToken();
    console.log(userid);
    try {
      await deleteUser({ _id: userid, tokenTest });
      getUserByRole();
      setShowModal(false);
      // getAllUsersHandler(currentPage);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
    setShowModal(false);
  };

  const getData = (item) => {
    const timestamp = item;
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const day = String(dateObject.getDate()).padStart(2, "0");
    const formattedDate = `${day}-${month}-${year}`;
    return formattedDate;
  };

  const getTime = (item) => {
    const timestamp = item;
    const dateObject = new Date(timestamp);

    const hours = String(dateObject.getUTCHours()).padStart(2, "0");
    const minutes = String(dateObject.getUTCMinutes()).padStart(2, "0");
    const formattedTime = `${hours}:${minutes}`;
    return formattedTime;
  };

  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col md:pl-[240px]">
          <Header />
          {getRoles &&
            getRoles.getAllTasksByRole.map((i) => (
              <div className="p-[20px]">
                <h3 className="text-[27px] pb-[14px] font-bold">
                  Dashboard-project
                  <br />
                  {i.assigned_to_role}
                </h3>
                <span className="inline-block text-[20px] font-bold">
                  CreateAt : {getData(i.createdAt)}
                </span>
              </div>
            ))}

          <div className=" flex p-[40px]  gap-[20px]">
            <div className="w-[175px] p-[30px] bg-[#F0F8FF]  flex-col  items-center justify-center rounded-[4px] text-center  mb-[40px]">
              <div className=" flex justify-center pb-2">
                <img
                  src="/assets/task.svg"
                  alt="AdminImage"
                  className="  w-[80px] h-[80px] color-[#1c274c] mx-auto relative mt-[-60px]"
                />
              </div>
              <div>
                {getRoles &&
                  getRoles.getAllTasksByRole.map((i) => {
                    return (
                      <span className="text-[20px] font-bold">
                        total task:{i.task.length}
                      </span>
                    );
                  })}
              </div>
            </div>

            <div className="flex-col w-[100%] ">
              <div className=" p-[30px] bg-[#F0F8FF]  flex-col  items-center justify-center rounded-[4px] text-center ">
                <div className=" flex justify-center pb-2">
                  <img
                    src="/assets/users.svg"
                    alt="AdminImage"
                    className="    w-[120px] h-[80px]  mx-auto relative mt-[-60px] "
                  />
                </div>
                <div>
                  <span className="text-[20px] font-bold">
                    total user :{getUsers && getUsers.users.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <NewTabs />
        </div>
      </div>
    </>
  );
};

export default RolesDetail;
