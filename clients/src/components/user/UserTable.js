import React, { useEffect, useState } from "react";

import {
  useGetAllUsersMutation,
  useDeleteUserMutation,
} from "../../redux/apiCalls/apiSlice";
import { AdminToken } from "../../redux/utils/adminAuth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ConfirmationModal from "../reusableComponent/ComfirmationModel";
import {
  faCog,
  faCircle,
  faTimes,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";


import ReactPaginate from "react-paginate";
import Pagination from "../reusableComponent/Pagination";
import { ToolTip } from "../reusableComponent/Tooltip";

const UserTable = () => {
  const [getAllUsers, { data }] = useGetAllUsersMutation();
  const [deleteUser] = useDeleteUserMutation();
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [userid, setId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const getAllUsersHandler = async (currentPage) => {
    try {
      const res = await getAllUsers(currentPage);
      const count = Math.ceil(res.data.totalCount / 5);
      setTotalCount(count);
    } catch (err) {
      console.log(err);
    }
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


  useEffect(() => {
    getAllUsersHandler(currentPage);
    console.log(data, "data");
  }, [currentPage]);
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected + 1);
  };
  

  const handleDelete = async () => {
    try {
      const res = await deleteUser({ _id: userid });

      setShowModal(false);
      console.log(res, "getAllUsersHandler");
      getAllUsersHandler(currentPage);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCancelDelete = () => {
    setUserToDelete(null);
    setShowModal(false);
  };

  return (
    <div class=" w-6/12 m-auto  overflow-x-auto shadow-md sm:rounded-lg mt-[80px]">
      <table class="w-full">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr className="bg-[#299be4] text-[15px] font-bold text-[#fff] text-center">
            <th scope="col" class="px-6 py-3">
              #
            </th>
            <th scope="col" class="px-6 py-3">
              User name
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
            <th scope="col" class="px-6 py-3">
              create
            </th>
            <th scope="col" class="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data.users.map((item, index) => (
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700  text-[18px] text-bold  hover:bg-[#edeaea]  text-center">
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {index + 1}
                </td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.userName}
                </td>
                <td class="px-6 py-4">{item.role}</td>
                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                  {getData(item.updatedAt)}{" "}
                  <span className="text-[12px] font-medium">
                    {getTime(item.updatedAt)}
                  </span>
                </td>

                <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white  flex gap-2 justify-center item-center text-center text-[20px]">
                  <button>
                    {" "}
                    <ToolTip content="update">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCog}
                        style={{ color: "#59b5f8" }}
                      />
                    </ToolTip>
                  </button>
                  <button
                    onClick={(e) => {
                      setShowModal(true);
                    setId(item._id, index);
                    }}
                  >
                    {" "}
                    <ToolTip content="setting">
                      {" "}
                      <FontAwesomeIcon
                        icon={faCircleXmark}
                        style={{ color: "#972020" }}
                      />
                    </ToolTip>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {showModal && (
        <ConfirmationModal
          isOpen={showModal}
          onClose={handleCancelDelete}
          onDelete={handleDelete}
        />
      )}
      <div className="flex justify-end">
        <Pagination
          pageCount={totalCount}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default UserTable;
