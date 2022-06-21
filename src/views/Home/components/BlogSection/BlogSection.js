import TheFutureOfQualityYourHealth from "@components/TheFutureOfQualityYourHealth";
import Link from "next/link";
import React from "react";

const BlogSection = () => {
  return (
    <div className="mt-[180px]">
      <TheFutureOfQualityYourHealth />
      <section>
        <div className="container">
          <div className="grid grid-cols-2 gap-[60px]">
            {[1, 2, 3, 4].map((e) => (
              <div key={e}>
                <Link href={"#"}>
                  <a className="block rounded-[20px] overflow-hidden bg-[#FAFAFB] hover:bg-white duration-150 hover:card_shadow">
                    <img
                      src="/img/blog_1.jpg"
                      alt="blog_1"
                      className="w-full"
                    />
                    <div className="px-[50px] py-10">
                      <h3 className="text-[30px] font-bold leading-[45px]">
                        In faucibus sapien nunc eleifend
                      </h3>
                      <p className="subtitle_lg mt-2.5">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed scelerisque risus sed urna aliquet, ac hendrerit
                        turpis sollicitudin.{" "}
                      </p>
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
