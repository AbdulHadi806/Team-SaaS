import Sidebar from "../Sidebar";
import Dashboard from "./Dashboard";
import Header from "../Header";
import Tabs from "./Tabs";

function MainDashboard() {
  return (
    <>
      <div className="flex w-full">
        <Sidebar />
        <div className="flex-1 flex flex-col md:pl-[240px]">
          <Header />
          <Dashboard />
          <Tabs />
        </div>
      </div>
    </>
  );
}

export default MainDashboard;
