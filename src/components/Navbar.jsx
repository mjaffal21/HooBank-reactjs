import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <img src={logo} className="w-36" alt="logo" />
      <nav className="text-white">
        <ul className="hidden md:flex gap-5">
          <li>Home</li>
          <li>About</li>
          <li>Features</li>
          <li>Solutions</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
