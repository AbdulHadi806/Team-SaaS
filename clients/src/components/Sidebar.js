import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Logout } from "./login/Logout";
import { Link } from "react-router-dom";
const menuItems = [
  { icon: faDashboard, text: "Dashboard", link: "/mainDashboard" },
  { icon: faUser, text: "Users", link: "/mainDashboard" },
];

function Sidebar() {
  return (
    <div className="h-screen w-60 h-full transition-transform -translate-x-full sm:translate-x-0 fixed">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.link}
                className="flex items-center p-2  rounded-lg text-white hover:text-[#000] hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={item.icon} />
                <span className="ml-3">{item.text}</span>
              </Link>
            </li>
          ))}
          <li >
            <button onClick={Logout}
              className="bg-[#f00] hover:bg-[#d00] gap-3 flex items-center w-[100%] px-4 py-2 text-white rounded text-[18px] w-100 font-semibold"
            >
              <FontAwesomeIcon icon={faSignOutAlt} />
             Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
