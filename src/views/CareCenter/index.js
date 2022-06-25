import DashboardLayout from "@components/DashboardLayout";
import ArrowRightCircle from "@components/Icons/ArrowRightCircle";
import BillPay from "@components/Icons/BillPay";
import Covid from "@components/Icons/Covid";
import Message from "@components/Icons/Message";
import Results from "@components/Icons/Results";
import React from "react";
import { FiChevronRight, FiPhone } from "react-icons/fi";
import { HiOutlineCalendar } from "react-icons/hi";
import { HiOutlineLocationMarker } from "react-icons/hi";

const CareCenter = () => {
  return (
    <DashboardLayout>
      <div className="px-5 py-9">
        <h3 className="font-bold text-xl mb-[25px]">Get Care</h3>
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            {[1, 2].map((e) => (
              <div
                key={e}
                className="bg-[#F8F8F8] rounded-[10px] px-[30px] py-5 flex items-center gap-8"
              >
                <div>
                  <div className="flex items-center gap-4">
                    <HiOutlineCalendar className="text-primary" size={26} />
                    <h5 className="font-bold text-xl">Schedule Now</h5>
                  </div>
                  <p className="mt-3 text-xl text-[#5E5E5E]">
                    Book loan appointment with your doctor, schedule a video
                    visit, and more.
                  </p>
                </div>

                <div className="shrink-0">
                  <ArrowRightCircle />
                </div>
              </div>
            ))}
          </div>

          <div className="bg-[#F8F8F8] rounded-[10px] px-[30px] py-5">
            <h5 className="font-bold text-xl">New Appointment</h5>

            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-[40px] font-bold text-primary mt-5">
                  Kirat Santanu Ghosh, MD
                </h2>

                <div className="flex items-center gap-12 mt-1.5">
                  <div className="flex items-center  gap-3.5 text-xl">
                    <HiOutlineLocationMarker className="text-primary" />
                    {"13350 Ti BLVD, DALLAS< Texas 75243"}
                  </div>
                  <div className="flex items-center  gap-3.5 text-xl">
                    <FiPhone className="text-primary" />
                    972 817 6200
                  </div>
                </div>
              </div>

              <div>
                <p className="text-xl">OFFICE VISIT</p>
                <div className="flex items-center gap-5 text-[40px] font-bold mt-1">
                  <span className="text-primary">$73.50</span>
                  <FiChevronRight size={30} />
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-5 text-[40px] font-bold mb-1 text-primary">
                  JUL 06
                </div>
                <p className="text-xl font-bold text-primary">10:30 AM</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="grid grid-cols-2 gap-5">
              <StatBox icon={<Covid />} label="Covid-19" />
              <StatBox icon={<Message />} label="Messages" />
              <StatBox icon={<Results />} label="Results" />
              <StatBox icon={<BillPay />} label="Bill Pay" />
            </div>
            <div className="bg-[#F8F8F8] rounded-[10px] px-[38px] py-[50px] relative">
              <div>
                <Message />
                <h5 className="font-bold text-xl mt-3.5">Community Support</h5>
                <p className="mt-3 text-xl text-[#5E5E5E]">
                  A community to ask for prayers, share support and comfort
                  others.
                </p>
              </div>

              <div className="shrink-0 absolute bottom-[30px] right-[30px]">
                <ArrowRightCircle />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CareCenter;

const StatBox = ({ icon, label }) => {
  return (
    <div className="bg-[#F8F8F8] rounded-[10px] flex justify-center items-center flex-col gap-4 py-12 px-6">
      <span className="text-primary">{icon}</span>
      <p className="text-xl font-bold">{label}</p>
    </div>
  );
};
