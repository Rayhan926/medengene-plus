import DashboardLayout from "@components/DashboardLayout";

import React, { useState } from "react";

import { userProfilePageTabs } from "@config/constants";

const UserProfile = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(2);
  const activeTabComponent = userProfilePageTabs[activeTabIndex].component;
  console.log({ activeTabComponent });
  return (
    <DashboardLayout>
      <div className="pb-8">
        <div className="mt-20 px-4 lg:px-[50px]">
          <h1 className="text-[35px] lg:text-[40px] font-bold text-primary">
            Health Summary
          </h1>
          <p className="text-base lg:text-xl mt-4">
            Use the tabs to open a section of your Health Summary.
          </p>
        </div>

        <div className="lg:px-5 mt-[15px]">
          <div className="flex items-center overflow-x-auto gap-12 px-[30px] bg-[#F8F8F8] lg:rounded-[10px]">
            {userProfilePageTabs.map((tab, i) => {
              const isActive = i === activeTabIndex;
              return (
                <button
                  key={i}
                  onClick={() => setActiveTabIndex(i)}
                  className={`inline-block py-4 border-b-[3px] outline-none shrink-0 ${
                    isActive
                      ? "border-primary text-black font-bold"
                      : "border-transparent text-[#747474]"
                  }`}
                >
                  {tab.text}
                </button>
              );
            })}
          </div>
        </div>

        <div className="px-4 lg:px-[50px] mt-20">{activeTabComponent}</div>
      </div>
    </DashboardLayout>
  );
};

export default UserProfile;
