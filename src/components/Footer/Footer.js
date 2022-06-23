import { footerLinks } from "@config/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import FooterLinksRenderer from "./components/FooterLinksRenderer";
import { BsFacebook, BsTwitter, BsGithub, BsYoutube } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-primary">
      <div className="container pt-[60px] pb-[70px]">
        <div className="grid grid-cols-2 gap-y-16 xl:grid-cols-[25%,18%,18%,18%,21%]">
          <div className="hidden xl:block">
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
          </div>

          <FooterLinksRenderer {...footerLinks.company} />
          <FooterLinksRenderer {...footerLinks.discover} />
          <FooterLinksRenderer {...footerLinks.legal} />
          <div>
            <h6 className="text-lx mb-5 text-white font-semibold">
              Connect With Us
            </h6>
            <div className="flex gap-6">
              <a href="#" className="text-white hover:scale-110 duration-150">
                <BsFacebook size={24} />
              </a>
              <a href="#" className="text-white hover:scale-110 duration-150">
                <BsTwitter size={24} />
              </a>
              <a href="#" className="text-white hover:scale-110 duration-150">
                <BsGithub size={24} />
              </a>
              <a href="#" className="text-white hover:scale-110 duration-150">
                <BsYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex justify-center xl:hidden">
          <Link href={"/"}>
            <a>
              <Image
                src={"/img/medengene-medium.png"}
                width={318}
                height={89}
                alt="medengene"
              />
            </a>
          </Link>
        </div>
      </div>

      <div className="container py-5 border-t border-white flex gap-3 flex-wrap justify-center lg:justify-between text-base lg:text-lg text-white">
        <p className="order-2 lg:order-[unset]">
          2021 © Copyright, NUA. All rights reserved.
        </p>

        <Link href="#">
          <a className="underline hover:no-underline">Terms of Use</a>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
