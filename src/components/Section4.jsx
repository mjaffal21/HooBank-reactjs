import React from "react";
import doubleQuotes from "../assets/double-quotes.svg";
import testimonial1 from "../assets/testimonial-1.svg";
import testimonial2 from "../assets/testimonial-2.svg";
import testimonial3 from "../assets/testimonial-3.svg";
import airbnb from "../assets/airbnb-icon.png";
import binance from "../assets/binance-icon.png";
import coinbase from "../assets/coinbase-icon.png";
import dropbox from "../assets/dropbox-icon.png";

const Section4 = () => {
  return (
    <>
      <div className="my-24 flex flex-col md:flex-row md:justify-center md:items-center">
        <h1 className="text-white text-3xl font-bold pb-7 md:pb-0 leading-[50px] text-center md:text-left md:max-w-[20rem]">
          What people are saying about us
        </h1>
        <p className="text-gray-400 text-xl text-center leading-[30px] max-w-md">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row md:gap-5">
        <div id="testimonial1" className="max-w-md mx-auto my-10 p-5 md:my-0">
          <img src={doubleQuotes} loading="lazy" alt="doublequotes" />
          <p className="text-white mt-5 max-w-[20rem] pb-5">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex gap-5">
            <img src={testimonial1} loading="lazy" alt="testimonialImage" />
            <div>
              <h1 className="text-white">Herman Jensen</h1>
              <p className="text-gray-400">Founder & Leader</p>
            </div>
          </div>
        </div>

        <div id="testimonial2" className="max-w-md mx-auto mb-10 p-5 md:mb-0">
          <img src={doubleQuotes} loading="lazy" alt="doublequotes" />
          <p className="text-white mt-5 max-w-[20rem] pb-5">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex gap-5">
            <img src={testimonial2} loading="lazy" alt="testimonialImage" />
            <div>
              <h1 className="text-white">Steve Mark</h1>
              <p className="text-gray-400">Founder & Leader</p>
            </div>
          </div>
        </div>

        <div id="testimonial3" className="max-w-md mx-auto p-5">
          <img src={doubleQuotes} loading="lazy" alt="doublequotes" />
          <p className="text-white mt-5 max-w-[20rem] pb-5">
            Money is only a tool. It will take you wherever you wish, but it
            will not replace you as the driver.
          </p>
          <div className="flex gap-5">
            <img src={testimonial3} loading="lazy" alt="testimonialImage" />
            <div>
              <h1 className="text-white">Kenn Gallagher</h1>
              <p className="text-gray-400">Founder & Leader</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7 md:flex-row md:items-center md:justify-around justify-center items-center mt-14">
        <img
          src={airbnb}
          loading="lazy"
          alt="airbnb"
          className="w-[50%] md:w-[18%]"
        />
        <img
          src={binance}
          loading="lazy"
          alt="binance"
          className="w-[50%] md:w-[18%]"
        />
        <img
          src={dropbox}
          loading="lazy"
          alt="dropboc"
          className="w-[50%] md:w-[18%]"
        />
        <img
          src={coinbase}
          loading="lazy"
          alt="coinbase"
          className="w-[50%] md:w-[15%] md:mb-3"
        />
      </div>
      <div className="mt-16 flex flex-col md:flex-row md:justify-between md:items-center md:max-w-5xl md:mx-auto rounded-xl service-gradient p-10">
        <div>
          <h1 className="text-white text-3xl font-bold text-center md:text-left">
            Let's try our service now!
          </h1>
          <p className="text-gray-400 mt-5 text-xl text-center md:text-left md:max-w-md">
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
        <div className="text-center">
          <button className="gradient-button rounded-lg py-2 px-4 mt-7 text-2xl">
            Get Started
          </button>
        </div>
      </div>
    </>
  );
};

export default Section4;
