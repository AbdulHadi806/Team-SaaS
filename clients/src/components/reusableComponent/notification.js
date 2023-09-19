import { faBell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useTaskSeenMutation } from "../../redux/apiCalls/apiSlice";
import { UserToken } from "../../redux/utils/adminAuth";
function Notification({ notifications, profileDropdown }) {
  const [taskSeen] = useTaskSeenMutation();
  const userToken = UserToken();
  console.log("Dfd", notifications.getAllTasks);
  const updateHandler = async (id) => {
    console.log("id", id);
    try {
      const res = await taskSeen({ task_id: id, userToken });
      console.log(res, "ress");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mx-auto relative">
      <FontAwesomeIcon icon={faBell} />
      <div>
        <ul className="bg-white py-1 absolute shadow-lg w-[160px] border border-t-0 top-[41px] right-0 rounded-b-lg">
          {profileDropdown ? (
            notifications.getAllTasks.length > 0 ? (
              notifications.getAllTasks.map((item, index) => (
                <li
                  onClick={() => updateHandler(item._id)}
                  key={index}
                  className={`${
                    item.seen
                      ? "bg-[#000] text-[#fff]"
                      : "bg-[#fff]  text-[#fff]"
                  } border-t py-[5px] px-1 hover:text-[#660079] font-medium`}
                >
                  <span>{item.task.slice(0, 15)}</span>
                </li>
              ))
            ) : (
              <li className="border-t py-[5px] px-1 font-medium">
                No task found
              </li>
            )
          ) : null}
        </ul>
      </div>
    </div>
  );
}

export default Notification;
