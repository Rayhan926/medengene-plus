import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[260px,auto] bg-[#F8F8F8] min-h-screen">
      <DashboardSidebar />

      <div className="lg:py-5 lg:px-[26px] flex flex-col">
        <DashboardHeader />

        <div className="lg:mt-5 rounded-[10px] bg-white grow">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
