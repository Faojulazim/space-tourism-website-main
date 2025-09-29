import React, { useState } from "react";
import useSpaceData from "../hooks/useSpaceData";
export default function Technology() {
  const [currItem, setCurrItem] = useState(0);
  const data = useSpaceData("technology");

  return (
    <div className="mt-5">
      <div className="flex gap-x-5 flex-col items-center sm:items-start sm:px-10 md:mt-10 1200:!px-20 1300:!px-32">
        <h1 className="font-BCondensed tracking-widest text-xl flex gap-x-5 1200:text-[1.6rem]">
          <span className="text-white/40 font-[600]">03</span>
          SPACE LAUNCH 101
        </h1>
      </div>
      <div className="mt-15 1100:mt-5  flex flex-col items-center justify-center 1100:flex-row-reverse 1100:gap-x-10  2xl:justify-between 2xl:pb-15 1660:gap-x-25">
        <div className="w-full 1100:w-[40%] 1770:w-[45%]">
          <img
            className="h-[250px] 425:h-[300px] 500:h-[350px] sm:h-[400px] md:h-[400px] 850:!h-[450px] 950:!h-[500px] object-cover object-[50%_80%] sm:object-[50%_55%] w-full 1100:hidden"
            src={data[currItem]?.images?.landscape}
            alt=""
          />
          <img
            className="hidden 1100:block w-full"
            src={data[currItem]?.images?.portrait}
            alt=""
          />
        </div>
        <div className="flex flex-col items-center max-w-[650px] mx-auto 1100:!max-w-none 1100:!w-[60%] 2xl:w-[50%] 1100:!flex-row 1100:!pl-[10%]  1100:gap-x-5 1200:gap-x-7 ">
          <div className="font-Bellefair text-2xl flex items-center gap-5 mt-7 1100:!mt-0 1100:!flex-col 1100:!gap-7 2xl:!gap-10">
            {data.map((items, index) => {
              return (
                <div
                  key={index}
                  onClick={() => setCurrItem(index)}
                  className={`border size-[40px] sm:size-[50px] 1100:!size-[55px] 1200:!size-[60px] rounded-full flex items-center justify-center 1770:!size-[70px] border-white/40 cursor-pointer ${
                    index == currItem ? "bg-white text-black" : "bg-transparent"
                  }`}
                >
                  <div className="mt-[2px]">{index + 1}</div>
                </div>
              );
            })}
          </div>
          <div className="font-Bellefair 1100:!pb-0 mt-7 1100:!mt-0 flex flex-col items-center justify-center px-5 text-center pb-10 1100:!items-start 1100:!text-start">
            <h1 className="uppercase text-white/40 text-xl sm:text-2xl 2xl:text-3xl 1770:!text-[2rem]">
              THE TERMINOLOGY…
            </h1>
            <h1 className="uppercase text-3xl mt-3 sm:text-4xl xl:text-5xl 2xl:text-7xl 1770:!text-[5rem] 2xl:mt-4">
              {data[currItem]?.name}
            </h1>
            <p className="font-Barlow mt-5 text-Blue300 leading-7 text-[15px] sm:text-lg 2xl:text-xl 2xl:leading-8 2xl:mt-7">
              {data[currItem]?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
