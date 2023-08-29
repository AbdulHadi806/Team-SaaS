import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDashboard,
  faUser,
  faSignInAlt,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const menuItems = [
  { icon: faDashboard, text: "Dashboard", link: "/mainDashboard" },
  { icon: faUser, text: "Users", link: "/mainDashboard" },
  { icon: faSignInAlt, text: "Sign In", link: "/mainDashboard" },
  { icon: faSignOutAlt, text: "Log Out", link: "/logout" },
];

function Sidebar() {
  return (
    <div className="h-screen w-60 h-full transition-transform -translate-x-full sm:translate-x-0 fixed">
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-800">
        <ul className="space-y-2 font-medium">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a
                href={item.link}
                className="flex items-center p-2  rounded-lg text-white hover:text-[#000] hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <FontAwesomeIcon icon={item.icon} />
                <span className="ml-3">{item.text}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
