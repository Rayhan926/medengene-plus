import Plus from "@components/Icons/Plus";
import TheFutureOfQualityYourHealth from "@components/TheFutureOfQualityYourHealth";
import { qualitiHealthCards } from "@config/constants";
import React from "react";

const QualityYourHealthSection = () => {
  return (
    <div id="about">
      <TheFutureOfQualityYourHealth />

      <section>
        <div className="container relative">
          <div className="absolute bottom-[-100px] left-[-100px] w-[260px] z-[-1] hidden xl:block">
            <Plus />
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10 bg-white rounded-[20px] relative z-[2]">
            {qualitiHealthCards.map((card, i) => (
              <Card {...card} key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityYourHealthSection;

const Card = ({ icon, title, description }) => {
  return (
    <div className="rounded-[20px] xl:border-2 xl:border-[#E1E2E2] px-5 xl:px-10 py-6 xl:pt-[130px] xl:pb-20 hover:card_shadow duration-200 hover:border-white">
      <div className="px-[20px] flex items-center gap-7">
        <div className="shrink-0">{icon}</div>
        <h4 className="text-[24px] xl:text-[30px] leading-[40px] font-bold text-black">
          {title}
        </h4>
      </div>
      <p className="subtitle_lg mt-[60px] text-center xl:text-left">
        {description}
      </p>
    </div>
  );
};
