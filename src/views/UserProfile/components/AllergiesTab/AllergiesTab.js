import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { BiPlus } from "react-icons/bi";
import MethotrexateAnalogues from "@components/Icons/MethotrexateAnalogues";

const AllergiesTab = () => {
  return (
    <div>
      <p className="text-[17px]">
        Please review your allergies and verify that the list is up to date.
        <span className="font-semibold text-primary ml-1">
          Call 911 if you have an emergency.
        </span>
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {[1, 2, 3, 4].map((e) => (
            <div className="rounded-[10px] bg-[#F8F8F8] px-5 py-[22px] relative">
              <div className="absolute top-4 right-4 text-[#BEBEBE] cursor-pointer hover:text-black/80">
                <IoCloseOutline size={24} />
              </div>
              <MethotrexateAnalogues />
              <h3 className="text-xl font-bold mt-3.5">
                Methotrexate Analogues
              </h3>
              <p className="mt-1.5 text-lg">Added 03/10/2022</p>
            </div>
          ))}
        </div>

        <div className="rounded-[10px] cursor-pointer bg-[#F8F8F8] text-[#BEBEBE] flex items-center justify-center p-8 flex-col gap-3">
          <BiPlus size={120} />
          <p className="font-semibold text-[#BEBEBE]">Report an Allergic</p>
        </div>
      </div>
    </div>
  );
};

export default AllergiesTab;
