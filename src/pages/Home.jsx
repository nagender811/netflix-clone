import React from "react";
import Navbar from "../components/Navbar";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import play_icon from "../assets/play_icon.png";
import info_icon from "../assets/info_icon.png";
import TitleCards from "../components/TitleCards";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="">
      <Navbar />
      <div className="relative w-full">
        <img className=" w-full mask-gradient" src={hero_banner} alt="" />
        <div className="absolute w-full pl-[6%] bottom-0">
          <img
            className="w-[50%] sm:w-[60%] md:w-[90%] max-w-[420px] mb-2 md:mb-7"
            src={hero_title}
            alt=""
          />
          <p className="max-w-[700px] text-[10px] sm:text-sm md:text-[17px] mb-2 sm:mb-5">
            Discovering his ties to a secret ancient order, a young man living
            in modern Istanbul embarks on a quest to save the city from an
            immortal enemy.
          </p>
          <div className="flex gap-2 mb-2 md:mb-12">
            <button className="h-8 sm:h-10 border-0 outline-0 py-1 sm:py-2 px-3 sm:px-5 inline-flex items-center gap-2 text-xs sm:text-[15px] bg-white cursor-pointer text-black hover:bg-[#ffffffbf]">
              <img className="w-4 sm:w-6" src={play_icon} alt="" />
              Play
            </button>
            <button className="h-8 sm:h-10 border-0 outline-0 py-2 px-3 sm:px-5 inline-flex items-center gap-2 text-xs sm:text-[15px] bg-[#5d6d6eb3] cursor-pointer text-white hover:bg-[#6d6d6e66]">
              <img className="w-4 md:w-6" src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <div className="hidden lg:block">
            <TitleCards />
          </div>
        </div>
      </div>
      <div className="more-cards pl-[6%] ">
        <TitleCards title={"Blockbuster Movies"} category={"top_rated"} />
        <TitleCards title={"Only on Netflix"} category={"popular"} />
        <TitleCards title={"Upcoming"} category={"upcoming"} />
        <TitleCards title={"Top Pics for You"} category={"now_playing"} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
