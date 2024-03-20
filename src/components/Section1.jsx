import React from "react";
import discount from "../assets/discount.svg";
import image1 from "../assets/image-1.png";
import getstarted from "../assets/getstarted.svg";

const Section1 = () => {
  return (
    <section className="relative">
      <div className="my-20 flex flex-col md:flex-row md:items-center md:justify-center">
        <div className="md:w-[50%]">
          <div className="flex gap-2 items-center text-sm">
            <img src={discount} loading="lazy" alt="discount" />
            <p className="text-white">
              20% <span className="text-gray-400">DISCOUNT FOR</span> 1 MONTH{" "}
              <span className="text-gray-400">ACCOUNT</span>
            </p>
          </div>
          <div className="py-5">
            <h1 className="text-white text-5xl leading-[3.5rem] font-bold pb-5 max-w-md">
              The Next <span className="gradient">Generation</span> Payment
              Method
            </h1>
            <p className="text-gray-400 max-w-md">
              Our team of experts uses a methodology to identify the credit
              cards most likely to fit your needs. <br /> We examine annual
              percentage rates, annual fees.
            </p>
          </div>
        </div>
        <img src={image1} loading="lazy" alt="image1" className="md:w-[40%]" />
      </div>
      <img
        src={getstarted}
        loading="lazy"
        alt="getstarted"
        className="bg-transparent absolute hidden lg:block md:left-[40%] md:top-[10%]"
      />
      <div className="text-white md:text-2xl text-[1.5rem] font-bold flex flex-col md:flex-row md:gap-7 justify-center items-center gap-3 text-center">
        <h1>
          3800+ <span className="gradient">USER ACTIVE</span>
        </h1>
        <div className="lg:border lg:border-1 lg:border-r-white lg:h-3"></div>
        <h1>
          230+ <span className="gradient">TRUSTED BY COMPANY</span>
        </h1>
        <div className="lg:border lg:border-1 lg:border-r-white lg:h-3"></div>
        <h1>
          $230M+ <span className="gradient">TRANSACTION</span>
        </h1>
      </div>
    </section>
  );
};

export default Section1;
