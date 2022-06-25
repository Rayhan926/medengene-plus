import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[260px,auto] bg-[#F8F8F8] min-h-screen">
      <DashboardSidebar />

      <div className="py-5 px-[26px] flex flex-col">
        <DashboardHeader />

        <div className="mt-5 rounded-[10px] bg-white grow">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
