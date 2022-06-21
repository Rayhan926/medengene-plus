import Plus from "@components/Icons/Plus";
import { qualitiHealthCards } from "@config/constants";
import React from "react";

const QualityYourHealthSection = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="flex items-center justify-between py-[120px]">
            <h2 className="title_md max-w-[520px]">
              The Future of Quality Your{" "}
              <span className="text-primary">Health</span>
            </h2>
            <p className="subtitle_lg max-w-[650px]">
              Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac
              volutpat condim entum pretiu mauctor id maecenas Scelerisque at
              Scelerisque at auctor id mae cenas amet,
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container relative">
          <div className="absolute bottom-[-100px] left-[-100px] w-[260px] z-[-1]">
            <Plus />
          </div>
          <div className="grid grid-cols-3 gap-10 bg-white rounded-[20px] relative z-[2]">
            {qualitiHealthCards.map((card, i) => (
              <Card {...card} key={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default QualityYourHealthSection;

const Card = ({ icon, title, description }) => {
  return (
    <div className="rounded-[20px] border-2 border-[#E1E2E2] px-10 pt-[130px] pb-20 hover:card_shadow duration-200 hover:border-white">
      <div className="px-[20px] flex items-center gap-7">
        <div className="shrink-0">{icon}</div>
        <h4 className="text-[30px] leading-[40px] font-bold text-black">
          {title}
        </h4>
      </div>
      <p className="subtitle_lg mt-[60px]">{description}</p>
    </div>
  );
};
