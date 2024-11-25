import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg";
import profile_img from "../assets/profile_img.png";
import caret_icon from "../assets/caret_icon.svg";

const Navbar = () => {

  const navRef = useRef()

  useEffect(() =>{
    window.addEventListener('scroll', ()=> {
      if(window.scrollY >= 80) {
        navRef.current.classList.add('bg-[#141414]')
      } else {
        navRef.current.classList.remove('bg-[#141414]')
      }
    })
  },[])

  return (
    <div ref={navRef} className="w-full py-5 px-[6%] flex justify-between fixed text-[14px] bg-nav-gradient z-10">
      <div className="flex items-center gap-12">
        <img className="w-[90px]" src={logo} alt="" />
        <ul className="flex list-none gap-5">
          <li className=" cursor-pointer">Home</li>
          <li className=" cursor-pointer">Tv Shows</li>
          <li className=" cursor-pointer">Movies</li>
          <li className=" cursor-pointer">New & Popular</li>
          <li className=" cursor-pointer">My List</li>
          <li className=" cursor-pointer">Browse by Languages</li>
        </ul>
      </div>
      <div className="flex gap-5 items-center">
        <img className="cursor-pointer w-5" src={search_icon} alt="icons" />
        <p>Children</p>
        <img className="cursor-pointer w-5" src={bell_icon} alt="icons" />
        <div className="flex items-center gap-2 cursor-pointer relative group">
          <img className="rounded" src={profile_img} alt="profile" />
          <img className="rounded" src={caret_icon} alt="" />
          <div className="absolute top-full right-0 w-max bg-[#191919] py-4 px-5 rounded underline z-10 hidden group-hover:block">
            <p className="text-[13px] cursor-pointer">Sign Out of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
