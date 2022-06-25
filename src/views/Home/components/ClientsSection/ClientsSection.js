import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from "next/image";

const ClientsSection = () => {
  return (
    <section className="mt-[140px]">
      <div className="title_sm uppercase text-center px-5">
        What Our clients <span className="text-primary">say</span>
      </div>

      <div className="mt-[120px] flex flex-col-reverse">
        <div className="w-full mt-[90px] flex items-center justify-center gap-11 client_pagination_wrapper">
          <div id="client_prev_btn">
            <IoIosArrowRoundBack className="w-full h-auto" />
          </div>
          <div id="client_cstm_pagination" className="flex gap-2.5"></div>
          <div id="client_next_btn">
            <IoIosArrowRoundForward className="w-full h-auto" />
          </div>
        </div>

        <div className="w-full px-5 xl:px-0">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              // disableOnInteraction: true,
              // pauseOnMouseEnter: true,
            }}
            // loop
            modules={[Autoplay, Pagination, Navigation]}
            pagination={{
              clickable: true,
              el: "#client_cstm_pagination",
            }}
            navigation={{
              nextEl: "#client_next_btn",
              prevEl: "#client_prev_btn",
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              1280: {
                slidesPerView: 2.2,
                spaceBetween: 120,
              },
            }}
          >
            {[1, 2, 3, 4].map((e) => (
              <SwiperSlide key={e}>
                <div className="w-full client_testimonial_slide">
                  <div className="w-8">
                    <svg
                      viewBox="0 0 48 43"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.962891 42.5986H13.7612L21.6054 0H12.1098L0.962891 42.5986ZM27.1789 42.5986H39.9772L47.8214 0H38.3258L27.1789 42.5986Z"
                        fill="black"
                      />
                    </svg>
                  </div>

                  <p className="text-[25px] text-[#A7A8B6] mt-6">
                    Egestas adipiscing varius ut etiam aliquam in dictum enim
                    egestas orci nisl faucibus nam cursus ac purus vitae,
                    vestibulum elementum Egestas adipiscing varius ut etiam
                    aliquam in dictum enim egestas orci nisl faucibus nam cursus
                    ac purus vitae, vestibulum elementum
                  </p>

                  <div className="mt-14 flex items-start justify-between">
                    <div className="flex items-center gap-6">
                      <div className="w-[60px] h-[60px] rounded-full overflow-hidden bg-slate-100 relative">
                        <Image
                          src={"/img/jhon.jpg"}
                          alt="Jhon"
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                      <div>
                        <h6 className="text-xl font-bold text-black">
                          Jhon Smith
                        </h6>
                        <p className="mt-0.5 text-base text-black/90">
                          CEO of Group Of Company
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:block">
                      <Link href={"#"}>
                        <a className="flex items-center gap-3.5 py-1.5 border-b-[3px] border-primary">
                          View Project
                          <IoIosArrowRoundForward size={34} />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
