import TheFutureOfQualityYourHealth from "@components/TheFutureOfQualityYourHealth";
import { blogs } from "@config/constants";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <div className="mt-[180px] pb-[180px]">
      <TheFutureOfQualityYourHealth />
      <section>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px]">
            {blogs.map(({ title, description, image, link }, i) => (
              <div key={i}>
                <Link href={link}>
                  <a className="block rounded-[20px] overflow-hidden bg-[#FAFAFB] hover:bg-white duration-150 hover:card_shadow">
                    <div className="w-fulll max-h-[423px] overflow-hidden">
                      <img src={image} alt={title} className="w-full" />
                    </div>
                    <div className="px-[50px] py-10">
                      <h3 className="text-[30px] font-bold leading-[45px]">
                        {title}
                      </h3>
                      <p className="subtitle_lg mt-2.5">{description}</p>
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogSection;
