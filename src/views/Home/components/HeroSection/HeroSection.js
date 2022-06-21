import React from "react";
import { ImPlay3 } from "react-icons/im";

const HeroSection = () => {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/hero_bg.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-[60px] text-[#333333] mb-1.5 font-bold uppercase">
          Suspendisse ultrices eget
        </h1>
        <p className="max-w-[700px] text-center text-base text-dark-700">
          Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac
          volutpat condimentum pretiu mauctor id maecenas Scelerisque at
        </p>

        <div className="mt-[55px] flex items-center flex-wrap gap-6">
          <button className="__button">Get Started</button>
          <button className="flex items-center justify-center py-3 px-9 gap-3 rounded-full hover:bg-dark-700/10 duration-100">
            <ImPlay3 />
            Watch film
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
