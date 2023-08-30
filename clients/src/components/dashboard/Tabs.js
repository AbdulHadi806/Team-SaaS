import React, { useState } from "react";
import CreateUsers from "../user/CreateUsers";
import UserTable from "../user/UserTable";
const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab-b");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className=" w-full">
      <ul className="w-11/12 flex-row flex p-[40px] py-[20px] rounded  bg-gray-800 mx-[40px] gap-[20px]">
        <li
          className={`cursor-pointer text-white tab-item h-[40px] bg-[#000] rounded font-semibold flex items-center px-[24px]`}
          style={
            activeTab === "tab-a"
              ? { background: "#008118" }
              : { background: "#000" }
          }
          onClick={() => handleTabClick("tab-a")}
        >
          Tasks
        </li>
        <li
          className={`cursor-pointer text-white tab-item h-[40px] bg-[#000] rounded font-semibold flex items-center px-[24px]`}
          style={
            activeTab === "tab-b"
              ? { background: "#008118" }
              : { background: "#000" }
          }
          onClick={() => handleTabClick("tab-b")}
        >
          Users
        </li>
      </ul>

      <div>
        {activeTab === "tab-a" && <CreateUsers />}
        {activeTab === "tab-b" && <UserTable />}
        {/* {activeTab === 'tab-c' && <ComponentC />} */}
      </div>
    </div>
  );
};

export default Tabs;
