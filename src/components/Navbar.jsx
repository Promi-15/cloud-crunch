import React from "react";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center px-5 py-5 text-white    backdrop-blur-[10px] bg-[rgba(149,86,86,0.5)] rounded-xl p-6 ">
      <div className="first text-2xl font-bold  cloud-crunch-font">Cloud-<span className="text-amber-950">Crunch</span></div>
      <div className="middle">
        <ul className="flex flex-row  gap-10">
          <li className="relative group cursor-pointer">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            Movies
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            K-Drama
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            Anime
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
      <div className="last flex flex-row gap-5 items-center">
        <ul className="last flex flex-row gap-5 items-center">
          <li className="relative group cursor-pointer text-xl">
            <CiHeart />
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
          <li className="relative group cursor-pointer">
            Login
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
