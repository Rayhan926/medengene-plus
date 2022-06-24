import { navLinks } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Header = () => {
  return (
    <header className="py-6 absolute left-0 top-0 w-full z-[10]">
      <div className="flex justify-between items-center px-5 max-w-[1730px] mx-auto">
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

        <nav className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden lg:block">
          <ul className="flex items-center gap-10">
            <NavLinksRenderer />
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Buttons />
        </div>

        <MobileHeader />
      </div>
    </header>
  );
};

export default Header;

const NavLinksRenderer = () => {
  const router = useRouter();
  return (
    <>
      {navLinks.map((navLink, i) => {
        const isActive = navLink.url === router.pathname;
        return (
          <li key={i}>
            <Link href={navLink.url}>
              <a
                className={`px-6 lg:px-0 py-2.5 lg:py-1 block border-l-[3px] lg:border-l-0 lg:border-b-[2.5px] ${
                  isActive
                    ? "font-bold border-primary"
                    : "border-transparent hover:border-dark-700/50"
                }`}
              >
                {navLink.text}
              </a>
            </Link>
          </li>
        );
      })}
    </>
  );
};

const MobileHeader = () => {
  const [isOpenNav, setIsOpenNav] = useState(false);

  const shouldCloseMobileNav = (e) => {
    if (e.target.id === "mobileNavOverley") {
      setIsOpenNav(false);
    }
  };

  return (
    <div className="lg:hidden">
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

      <div
        id="mobileNavOverley"
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
          <nav className="h-full flex flex-col">
            <ul className="pt-3">
              <NavLinksRenderer />
            </ul>

            <div className="mt-auto p-6">
              <Buttons />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

const Buttons = () => {
  return (
    <div className="flex flex-wrap gap-4">
      <button className="block w-full lg:w-auto __button_outline">
        Get the app
      </button>
      <button className="block w-full lg:w-auto __button">Signup</button>
    </div>
  );
};
