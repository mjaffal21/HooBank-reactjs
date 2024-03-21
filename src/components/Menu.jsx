import React from "react";

const Menu = () => {
  return (
    <>
      <ul className="text-black absolute z-10 top-0 right-0 bottom-0 w-[50%] min-h-screen bg-white text-2xl flex flex-col gap-5 justify-center items-center">
        <li className="hover:cursor-pointer hover:underline hover:underline-offset-8">
          Home
        </li>
        <li className="hover:cursor-pointer hover:underline hover:underline-offset-8">
          About
        </li>
        <li className="hover:cursor-pointer hover:underline hover:underline-offset-8">
          Features
        </li>
        <li className="hover:cursor-pointer hover:underline hover:underline-offset-8">
          Solutions
        </li>
      </ul>
    </>
  );
};

export default Menu;
