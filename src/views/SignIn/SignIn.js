import Checkbox from "@components/Checkbox";
import Header from "@components/Header";
import Input from "@components/Input";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <section>
      <div className="absolute top-0 left-0 w-full z-[10] bg-white lg:hidden">
        <Header />
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-[55%,auto] gap-7 xl:px-9 py-[55px] min-h-screen">
        <div className="bg-slate-100 rounded-[20px] overflow-hidden hidden xl:block [&>span]:!h-full">
          <Image
            width={706 * 2.5}
            height={590 * 2.5}
            layout="responsive"
            src="/img/slider_section_img.jpg"
            alt="slider_section_img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white rounded-[20px] flex flex-col justify-center items-center px-5 xl:px-[50px] py-[100px] xl:card_shadow">
          <Image
            width={520}
            height={93}
            src="/img/medengene.png"
            alt="medengene"
            className="hidden xl:block w-full max-w-[520px]"
          />
          <h1 className="text-[35px] leading-[45px] lg:text-3xl font-bold text-black mt-[60px] text-center">
            Welcome to medengene+
          </h1>
          <p className="subtitle_lg mt-1.5 text-center">
            Please sign-in to your account and start the adventure
          </p>

          <form className="mt-[60px] space-y-5 w-full">
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Checkbox label={"Remember me"} />
            <Link href={"/care-center"}>
              <a type="submit" className="__button py-4 w-full">
                Sign In
              </a>
            </Link>
          </form>

          <div className="mt-[90px]">
            <p className="text-[#282828] font-semibold">
              I don’t have an account?
              <Link href="/signup">
                <a className="text-primary hover:underline ml-2">Signup</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
