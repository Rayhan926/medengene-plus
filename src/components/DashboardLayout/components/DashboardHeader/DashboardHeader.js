import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { FiBell, FiSearch, FiSun } from "react-icons/fi";
import { NavLinks } from "../DashboardSidebar";

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
    <>
      <header className="bg-white px-5 py-2 items-center justify-between rounded-[10px] shrink-0 hidden lg:flex">
        <p className="text-[25px]">
          {headerTitles.filter((e) => e.url === router.pathname)[0].title}
        </p>

        <HeaderRight />
      </header>
      <MobileHeader />
    </>
  );
};

export default DashboardHeader;

const MobileHeader = () => {
  const router = useRouter();
  const [isOpenNav, setIsOpenNav] = useState(false);

  const shouldCloseMobileNav = (e) => {
    if (e.target.id === "dashboardMobileNavOverley") {
      setIsOpenNav(false);
    }
  };

  const forceClose = () => setIsOpenNav(false);

  return (
    <div className="lg:hidden bg-white">
      <div className="flex items-center justify-between px-5 py-6">
        <Link href={"/"}>
          <a>
            <Image
              src={"/img/medengene-small.png"}
              width={177}
              height={49}
              alt="medengene"
            />
          </a>
        </Link>

        <div onClick={() => setIsOpenNav((prev) => !prev)}>
          <svg
            width="34"
            height="20"
            viewBox="0 0 34 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0.5H33.5" stroke="#008858" />
            <path d="M0 10H33.5" stroke="#008858" />
            <path d="M0 19.5H33.5" stroke="#008858" />
          </svg>
        </div>
      </div>

      <div
        id="dashboardMobileNavOverley"
        onClick={shouldCloseMobileNav}
        className={`fixed bg-black/50 top-0 left-0 w-full h-screen z-50 duration-200 ${
          isOpenNav
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`w-[75%] h-full bg-white ${
            isOpenNav ? "translate-x-0" : "-translate-x-full"
          } duration-200`}
        >
          <div className="h-full flex-col flex justify-between">
            <div>
              <p className="text-[22px] font-semibold px-6 bg-primary/5 py-4">
                {headerTitles.filter((e) => e.url === router.pathname)[0].title}
              </p>

              <div className="px-4 pr-5 mt-7">
                <NavLinks forceClose={forceClose} />
              </div>
            </div>

            <div className="px-5 py-6">
              <HeaderRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeaderRight = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-4">
      <div className="flex items-center gap-2 text-black">
        <img src="/img/english.png" alt="english" />
        English
      </div>
      <FiSun size={22} className="cursor-pointer" />
      <FiSearch size={22} className="cursor-pointer" />
      <FiBell size={22} className="cursor-pointer" />

      <div className="flex flex-row-reverse lg:flex-row justify-end lg:justify-start items-center gap-3 lg:ml-2">
        <div className="lg:text-right">
          <h6 className="font-medium">Jhon Doe</h6>
          <p className="text-sm">Admin</p>
        </div>
        <div className="relative shrink-0">
          <div className="shrink-0 w-[42px] h-[42px] rounded-full overflow-hidden bg-slate-100 relative">
            <Image src="/img/profile.png" alt="profile" layout="fill" />
          </div>

          <div className="w-3 h-3 rounded-full bg-[#1DBF73] border border-black absolute top-full left-full -translate-x-full -translate-y-full"></div>
        </div>
      </div>
    </div>
  );
};
