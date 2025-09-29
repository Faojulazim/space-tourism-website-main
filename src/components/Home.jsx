import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div className="1200:mt-70">
      <div className="flex flex-col items-center px-7 text-center mt-7 pb-10 max-w-[700px] mx-auto md:mt-32 1200:flex-row  1200:text-start 1200:px-32 1200:justify-between 1200:items-center 1200:max-w-none 1200:gap-x-50 1200:pb-0 1440:px-52">
        <div className="1200:w-[50%] max-w-[600px]">
          <h1 className="text-2xl 650:text-3xl tracking-wider font-BCondensed text-Blue300 font-[300]">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <h2 className="font-Bellefair text-8xl mt-7 550:text-9xl 1440:text-[10rem]">
            SPACE
          </h2>
          <p className="text-Blue300 font-Barlow text-lg leading-7 1440:leading-8 mt-7 425:text-xl">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <NavLink
          to="destination"
          className="mt-32 1200:mt-0 425:mt-24 hover:ring-[40px] duration-300 cursor-pointer transition-all ease-in hover:ring-white/30 bg-white font-Bellefair size-[150px] text-Blue900 flex items-center justify-center rounded-full text-xl 425:size-[170px] 700:text-2xl 500:size-[180px] 600:size-[200px] 700:size-[220px] 1440:size-[270px]"
        >
          <h1 className="uppercase">Explore</h1>
        </NavLink>
      </div>
    </div>
  );
}
