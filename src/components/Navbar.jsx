import React from "react";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-5 py-5 text-white    backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)] rounded-xl p-6 ">
      <div className="first text-2xl font-bold  ">
        Cloud-Crunch
      </div>
      <div className="middle">
        <ul className="flex flex-row  gap-10">
          <li>Home</li>
          <li>Movies</li>
          <li>K-Drama</li>
          <li>About</li>
      
        </ul>
      </div>
      <div className="last flex flex-row gap-5 items-center">
        <p>
          <CiHeart />
        </p>
        <p>Login</p>
      </div>
    </div>
  );
};

export default Navbar;
