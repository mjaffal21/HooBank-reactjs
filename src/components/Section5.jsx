import React from "react";
import logo from "../assets/logo.svg";
import instagram from "../assets/instagram.svg";
import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";
const Section5 = () => {
  return (
    <div className="bg-black text-white mt-10 p-7 w-full mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
        <div>
          <img
            src={logo}
            loading="lazy"
            alt="logo"
            className="scale-70 mx-auto"
          />
          <p className="max-w-sm text-center mx-auto mt-5">
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>
        <div className="md:flex md:flex-row md:gap-10">
          <div>
            <ul className="flex flex-col justify-center items-center gap-3 mt-8 text-gray-400">
              <li className="text-white">Useful Links</li>
              <li className="hover:text-white">Content</li>
              <li className="hover:text-white">How It Works</li>
              <li className="hover:text-white">Create & Explore</li>
              <li className="hover:text-white">Terms & Services</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-center items-center gap-3 mt-8 text-gray-400">
              <li className="text-white">Community</li>
              <li className="hover:text-white">Help Center</li>
              <li className="hover:text-white">Partners</li>
              <li className="hover:text-white">Suggestions</li>
              <li className="hover:text-white">Blog</li>
              <li className="hover:text-white">Newsletters</li>
            </ul>
          </div>
          <div>
            <ul className="flex flex-col justify-center items-center gap-3 mt-8 text-gray-400">
              <li className="text-white">Partner</li>
              <li className="hover:text-white">Our Partners</li>
              <li className="hover:text-white">Become a Partner</li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="max-w-6xl mx-auto md:flex md:justify-between">
        <div className="flex justify-center items-center py-3 text-[10px] md:text-lg ">
          Copyright <span className="text-xl px-1">&copy;</span> 2021 HooBank.
          All Rights are Reserved.
        </div>
        <div className="flex justify-center gap-4">
          <img src={instagram} loading="lazy" alt="instagram" />
          <img src={facebook} loading="lazy" alt="facebook" />
          <img src={twitter} loading="lazy" alt="twitter" />
          <img src={linkedin} loading="lazy" alt="linkedin" />
        </div>
      </div>
    </div>
  );
};

export default Section5;
