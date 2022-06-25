import DashboardLayout from "@components/DashboardLayout";
import FindCareIcon from "@components/Icons/FindCareIcon";
import Input from "@components/Input";
import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiShieldCheckLine } from "react-icons/ri";

const FindCare = () => {
  return (
    <DashboardLayout>
      <div className="py-[35px] px-5">
        <h1 className="text-[40px] font-bold">Find Care</h1>
        <p className="text-lg mt-1 text-[#5E5E5E]">
          Search for the right docotr, loation, or type of care for you.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-[9px] mt-[34px]">
          <Input
            icon={<FiSearch size={22} />}
            placeholder="What care are you looking for?"
          />
          <Input
            icon={<HiOutlineLocationMarker size={24} />}
            placeholder="City or Zip"
          />
          <Input
            icon={<RiShieldCheckLine size={23} />}
            placeholder="Insurance"
          />
          <button className="__button flex items-center gap-3 shrink-0 grow lg:grow-0 w-full lg:w-auto justify-center py-4 pt-[18px]">
            <span className="shrink-0">
              <FindCareIcon />
            </span>
            Find Care
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default FindCare;
