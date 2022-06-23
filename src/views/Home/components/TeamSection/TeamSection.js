import React from "react";
import { FiCheck } from "react-icons/fi";

const TeamSection = () => {
  return (
    <section className="mt-[90px] xl:mt-[150px]">
      <div className="container xl:-mb-[90px] relative z-[2]">
        <div
          style={{
            boxShadow: "0px 100px 113px -11px #0000000A",
          }}
          className="mx-auto bg-white pt-10 pb-20 px-[60px] xl:py-9 flex flex-col xl:flex-row gap-[100px] items-center justify-between"
        >
          <p className="subtitle_lg text-center xl:text-left">
            Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac
            volutpat condim entum pretiu mauctor id maec enas Scelerisque at
            Scelerisque.
          </p>
          <div className="flex flex-col items-center gap-16 xl:flex-row xl:gap-20">
            <StatBox value="2000" label="Doctor" />
            <StatBox value="62" label="City" />
            <StatBox value="100" label="Facility" />
          </div>
        </div>
      </div>

      <div className="max-w-[92%] mt-[70px] xl:mt-0 mx-auto xl:bg-[#FDFDFD] rounded-[40px] pb-[100px]">
        <div className="container">
          <h2 className="title_md xl:hidden text-center mb-10">
            You Care <span className="text-primary">Team</span>
          </h2>
          <div className="xl:pt-[185px] grid grid-cols-1 xl:grid-cols-2 gap-10 xl:gap-[150px]">
            <div className="-mt-12 xl:mt-0 xl:pt-14 order-2 xl:order-[unset]">
              <h2 className="title_md hidden xl:block">
                You Care <span className="text-primary">Team</span>
              </h2>
              <div className="subtitle_lg mt-[30px]">
                Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac
                volutpat condim entum pretiu mauctor id maecenas Scelerisque at
                Scelerisque at auctor id mae cenas amet, Scelerisque at auctor
                id maecenas amet.
              </div>
              <ul className="mt-[60px] space-y-3">
                <li className="flex items-center gap-[30px] subtitle_lg">
                  <FiCheck size={22} color="#008858" />
                  Scelerisque at auctor id maecenas amet
                </li>
                <li className="flex items-center gap-[30px] subtitle_lg">
                  <FiCheck size={22} color="#008858" />
                  nisl ipsum urna ut a ac volutpat condim{" "}
                </li>
                <li className="flex items-center gap-[30px] subtitle_lg">
                  <FiCheck size={22} color="#008858" />
                  entum pretiu mauctor id maecenas Sce{" "}
                </li>
              </ul>
            </div>

            <div className="space-y-[21px] px-6 xl:px-0">
              <div className="grid grid-cols-[45%,55%] xl:grid-cols-[260px,310px] gap-[43px]">
                <img
                  src="/img/team_1.jpg"
                  className="w-full rounded-[20px] overflow-hidden h-auto"
                  style={{
                    boxShadow: "0px 100px 113px -11px #0000000A",
                  }}
                  alt="team_1"
                />
                <img
                  src="/img/team_2.jpg"
                  className="w-full rounded-[20px] overflow-hidden h-auto"
                  style={{
                    boxShadow: "0px 100px 113px -11px #0000000A",
                  }}
                  alt="team_2"
                />
              </div>
              <div className="grid grid-cols-[55%,45%] xl:grid-cols-[310px,260px] gap-[43px] -translate-x-[45px]">
                <img
                  src="/img/team_3.jpg"
                  className="w-full rounded-[20px] overflow-hidden h-auto -translate-y-[52px]"
                  style={{
                    boxShadow: "0px 100px 113px -11px #0000000A",
                  }}
                  alt="team_3"
                />
                <img
                  src="/img/team_4.jpg"
                  className="w-full rounded-[20px] overflow-hidden h-auto"
                  style={{
                    boxShadow: "0px 100px 113px -11px #0000000A",
                  }}
                  alt="team_4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

const StatBox = ({ value, label }) => {
  return (
    <div className="text-center">
      <h6 className="text-black font-bold text-[52px] flex items-center gap-3">
        {value} <span className="text-primary">+</span>
      </h6>
      <p className="text-[24px] -mt-1 text-dark-700">{label}</p>
    </div>
  );
};
