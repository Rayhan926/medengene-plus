import { sidebarLinks } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

const DashboardSidebar = () => {
  const router = useRouter();
  return (
    <div className="bg-white px-4 py-6">
      <Link href={"/"}>
        <a>
          <Image
            src={"/img/medengene-sidebar.png"}
            width={213}
            height={49}
            alt="medengene"
          />
        </a>
      </Link>

      <div className="mt-[85px]">
        <ul>
          {sidebarLinks.map((props, i) => {
            return (
              <li key={i}>
                <LinkRenderer {...props} />
                <div className="pl-4 mt-5 space-y-3">
                  {props.sublinks.map((sublink, index) => (
                    <LinkRenderer {...sublink} key={index} />
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DashboardSidebar;

const LinkRenderer = ({ icon, sublinks, text, url }) => {
  const router = useRouter();
  const isActive = router.pathname === url;
  return (
    <Link href={url}>
      <a
        className={`flex justify-between items-center rounded-full py-3 px-5 ${
          isActive
            ? "bg-[#F0F0F0] text-black"
            : "hover:bg-[#F0F0F0]/30 text-[#929292]"
        }`}
      >
        <span className="flex items-center gap-4">
          {icon}
          {text}
        </span>

        {sublinks && <FiChevronDown size={18} />}
      </a>
    </Link>
  );
};
