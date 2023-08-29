import React, { useEffect, useState } from "react";
import { useGetAllUsersMutation } from "../../redux/apiCalls/apiSlice";
import { AdminToken } from "../../redux/utils/adminAuth";

const UserTable = () => {
  const [getAllUsers, { data }] = useGetAllUsersMutation();
  const getAllUsersHandler = async () => {
    const token = AdminToken();
    try {
      const res = await getAllUsers(token);
      console.log(res, "getAllUsersHandler");
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getAllUsersHandler();
    console.log(data, "data");
  }, []);
  return (
    <div class=" w-6/12 m-auto  overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              User name
            </th>
            <th scope="col" class="px-6 py-3">
              Role
            </th>
         
          </tr>
        </thead>
        <tbody>
          {data &&
            data.users.map((item) => (
              <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {item.userName}
                </th>
                <td class="px-6 py-4">{item.role}</td>
               
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
