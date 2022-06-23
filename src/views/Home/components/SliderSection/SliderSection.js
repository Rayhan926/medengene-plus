import Image from "next/image";
import React from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
const SliderSection = () => {
  return (
    <section className="pt-10 mt-10">
      <div className="container">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-[104px] place-items-center">
          <div>
            <div className="relative">
              <div className="absolute h-[90%] w-[500%] right-[30%] bg-primary z-[-1] -top-10 hidden xl:block"></div>
              <div className="rounded-[20px] overflow-hidden slider_section_img">
                <Image
                  objectFit="cover"
                  src={"/img/slider_section_img.jpg"}
                  alt="slider_section_img"
                  width={706}
                  height={590}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col-reverse">
            <div className="mt-[70px] flex items-center gap-[90px] cstm_pagination_wrapper">
              <div id="cstm_pagination" className="flex gap-3.5"></div>
              <div className="flex items-center gap-5">
                <div id="prev_btn">
                  <IoIosArrowRoundBack className="w-full h-auto" />
                </div>
                <div id="next_btn">
                  <IoIosArrowRoundForward className="w-full h-auto" />
                </div>
              </div>
            </div>
            <div>
              <Swiper
                slidesPerView={1}
                modules={[Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  el: "#cstm_pagination",
                }}
                navigation={{
                  nextEl: "#next_btn",
                  prevEl: "#prev_btn",
                }}
              >
                {[1, 2, 3, 4].map((e) => (
                  <SwiperSlide key={e}>
                    <div className="">
                      <p className="text-[150px] leading-[115px] text-[#B9B9B9] font-bold">
                        “
                      </p>
                      <h3 className="font-bold text-black text-[55px] leading-[70px] -mt-10">
                        I’m worried something’s wrong with me
                      </h3>
                      <p className="text-xl text-black mt-14">
                        confidence that you can prepare for your health risks
                        with a trusted clinician by your side.
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SliderSection;
