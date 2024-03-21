import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Sling as Hamburger } from "hamburger-react";
import Menu from "./Menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex justify-between items-center">
        <img src={logo} className="w-36" alt="logo" />
        <nav className="text-white hidden md:block">
          <ul className="hidden md:flex gap-5">
            <li>Home</li>
            <li>About</li>
            <li>Features</li>
            <li>Solutions</li>
          </ul>
        </nav>
        <div className="md:hidden absolute z-20 top-3 right-3">
          <Hamburger color="#4FD1C5" toggled={isOpen} toggle={setIsOpen} />
        </div>
      </div>
      {isOpen && <Menu />}
    </>
  );
};

export default Navbar;
