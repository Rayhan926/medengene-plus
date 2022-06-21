import { navLinks } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Header = () => {
  const router = useRouter();
  return (
    <header className="py-[45px] absolute left-0 top-0 w-full z-[10]">
      <div className="max-w-[1690px] mx-auto flex justify-between items-center px-5">
        {/* Logo --Start-- */}
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
        {/* Logo --End-- */}

        {/* Nav --Start-- */}
        <nav className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
          <ul className="flex gap-[35px]">
            {navLinks.map(({ text, url }, i) => {
              const isActive = url === router.pathname;
              return (
                <li key={i}>
                  <Link href={url}>
                    <a
                      className={`py-1 block border-b-[2.5px] ${
                        isActive
                          ? "font-bold border-primary"
                          : "border-transparent hover:border-dark-700/50"
                      }`}
                    >
                      {text}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        {/* Nav --End-- */}

        {/* Call to Action Buttons --Start-- */}
        <div className="flex gap-4">
          <button className="__button_outline">Get the app</button>
          <button className="__button">Signup</button>
        </div>
        {/* Call to Action Buttons --End-- */}
      </div>
    </header>
  );
};

export default Header;
