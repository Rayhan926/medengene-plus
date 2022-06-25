import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import { FiBell, FiSearch, FiSun } from "react-icons/fi";

const headerTitles = [
  {
    title: "Care Center",
    url: "/care-center",
  },
  {
    title: "User Profile",
    url: "/user-profile",
  },
  {
    title: "Find Care",
    url: "/find-care",
  },
];

const DashboardHeader = () => {
  const router = useRouter();
  return (
    <header className="bg-white px-5 py-2 flex items-center justify-between rounded-[10px] shrink-0">
      <p className="text-[25px]">
        {headerTitles.filter((e) => e.url === router.pathname)[0].title}
      </p>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 text-black">
          <img src="/img/english.png" alt="english" />
          English
        </div>
        <FiSun size={22} className="cursor-pointer" />
        <FiSearch size={22} className="cursor-pointer" />
        <FiBell size={22} className="cursor-pointer" />

        <div className="flex items-center gap-3 ml-2">
          <div className="text-right">
            <h6 className="font-medium">Jhon Doe</h6>
            <p className="text-sm">Admin</p>
          </div>
          <div className="relative shrink-0">
            <div className="shrink-0 w-[42px] h-[42px] rounded-full overflow-hidden bg-slate-100 relative">
              <Image src="/img/profile.png" layout="fill" />
            </div>

            <div className="w-3 h-3 rounded-full bg-[#1DBF73] border border-black absolute top-full left-full -translate-x-full -translate-y-full"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
