import React, { useState } from "react";
import usePlanetImage from "../hooks/usePlanetImage";
import useSpaceData from "../hooks/useSpaceData";
export default function Crew() {
  const [currItem, setCurrItem] = useState(0);
  const data = useSpaceData("crew");

  return (
    <div className="flex gap-x-5 flex-col items-center mt-5 md:mt-10 1200:!mt-5">
      <div className="self-start px-10 md:px-10 1200:!px-40">
        <h1 className="font-BCondensed tracking-widest text-xl flex gap-x-5 md:text-2xl 1200:!text-[1.6rem]">
          <span className="text-white/40 font-[600] ">02</span>
          MEET YOUR CREW
        </h1>
      </div>
      <div className="flex flex-col items-center 1200:items-center 1200:flex-row 1200:gap-x-20 1200:pb-15 1200:px-10 1200:mt-7">
        <div className="flex flex-col items-center justify-center text-center px-5 mt-0 max-w-[700px] md:mt-20 1200:items-start 1200:text-start 1200:justify-between ">
          <div className="flex flex-col items-center 1200:items-start justify-center mt-24 1200:mb-40 ">
            <h1 className="font-Bellefair uppercase text-white/40 text-xl 500:text-2xl sm:text-3xl 800:!text-4xl">
              {data[currItem]?.role}
            </h1>
            <h1 className="font-Bellefair uppercase text-3xl mt-1 500:text-4xl 500:mt-3 sm:text-5xl 800:mt-5 800:!text-[3.75rem]">
              {data[currItem]?.name}
            </h1>
            <p className="font-Barlow text-Blue300 mt-5 leading-7 500:text-lg 1200:text-xl">
              {data[currItem]?.bio}
            </p>
          </div>
          <div className="flex items-center gap-x-5 mt-5 md:gap-x-7 1200:mb-5 1200:!gap-x-10">
            {data.map((items, index) => {
              return (
                <span
                  key={index}
                  onClick={() => setCurrItem(index)}
                  className={`size-[14px] md:size-[17px] rounded-full ${
                    index == currItem ? "bg-white" : "bg-white/25"
                  }`}
                ></span>
              );
            })}
          </div>
        </div>
        <div className="">
          <img
            className=" hidden 1200:block 1200:min-w-[500px] 1200:!max-w-[500px] 1200:!w-full"
            src={data[currItem]?.images?.png}
            alt="Crew"
          />
          <img
            className="mt-10 hidden md:block 1200:!hidden w-[65%] max-w-[450px] mx-auto"
            src={data[currItem]?.images?.webp}
            alt="Crew"
          />
          <img
            className="mt-10 w-[65%] md:hidden max-w-[350px] mx-auto pb-5"
            src={data[currItem]?.images?.png}
            alt="Crew"
          />
        </div>
      </div>
    </div>
  );
}
