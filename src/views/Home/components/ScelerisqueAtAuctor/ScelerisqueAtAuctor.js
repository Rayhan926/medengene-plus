import React from "react";
import { FiCheck } from "react-icons/fi";

const ScelerisqueAtAuctor = () => {
  return (
    <section className="mt-[160px]">
      <div className="container">
        <div className="text-center">
          <h2 className="title_md">
            Scelerisque at <span className="text-primary">auctor</span>
          </h2>
          <p className="max-w-[700px] mx-auto mt-5 subtitle_lg text-center">
            Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a ac
            volutpat condim entum pretiu
          </p>
        </div>

        <div className="mt-[100px] max-w-[1150px] mx-auto grid grid-cols-2 gap-[50px]">
          {[1, 2].map((e) => (
            <div
              key={e}
              className="px-10 py-[60px] rounded-[20px]"
              style={{
                boxShadow: "0px 0px 97px 15px #0000000A",
              }}
            >
              <h4 className="text-[30px] leading-[45px] font-bold mb-10">
                Eligible Employees and Families
              </h4>

              <ul className="space-y-4 mb-10">
                <li className="flex gap-6 subtitle_lg">
                  <FiCheck
                    size={22}
                    className="translate-y-0.5"
                    color="#008858"
                  />
                  Scelerisque at auctor id maecenas amet, nisl ipsum urna ut a
                  ac
                </li>
                <li className="flex gap-6 subtitle_lg">
                  <FiCheck
                    size={22}
                    className="translate-y-0.5"
                    color="#008858"
                  />
                  Olutpat condim entum pretiu mauctor id maecenas Sceleri.
                </li>
              </ul>
              <button className="__button">Get Started</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScelerisqueAtAuctor;
