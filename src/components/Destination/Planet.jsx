import React from "react";
import { NavLink } from "react-router-dom";
import usePlanetImage from "../../hooks/usePlanetImage";
import useSpaceData from "../../hooks/useSpaceData";
function Moon() {
  const data = useSpaceData("destinations");
  const { planet, planetImg } = usePlanetImage();
  const planetData = data?.find(
    (item) => item.name.toLowerCase() === planet.toLowerCase()
  );
  const planetNames = data?.map((items) => items.name);

  if (!planetData)
    return (
      <div className="fixed inset-0 bg-white text-black font-Barlow text-xl flex items-center justify-center w-full">
        <p className="text-center">No data available for "{planet}"</p>
      </div>
    );
  return (
    <div className="mt-10 w-full 1200:mt-24 1440:mt-30 flex flex-col items-center justify-center md:max-w-[600px] md:mx-auto 1200:flex-row 1200:!max-w-[1200px] 1200:gap-x-20 ">
      <img
        className="px-25 1200:px-0 !w-full max-w-[600px]  1200:!max-w-[650px] 1200:!w-[650px]"
        src={planetImg}
      />
      <div className="mt-10 1200:!mt-0 1200:text-start px-5  1200:w-[70%]">
        <ul className="flex items-center 1200:items-start justify-center 1200:justify-start gap-x-8 md:mt-12  1200:!mt-0 ">
          {planetNames.map((items, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={"/destination/" + items.toLowerCase()}
                  className={({ isActive }) =>
                    `relative font-BCondensed tracking-widest uppercase text-xl ${
                      isActive
                        ? "after:content-[''] after:w-full after:h-[3px] after:bg-white after:absolute after:left-0 after:bottom-[-15px] text-white"
                        : "text-Blue300"
                    }`
                  }
                >
                  {items}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className="text-center 1200:text-start ">
          <div className="mt-12 1200:mt-15 flex flex-col 1200:justify-start 1200:items-start items-center justify-center">
            <h1 className="font-Bellefair uppercase text-6xl md:text-7xl 1440:!text-8xl">
              {planetData.name}
            </h1>
            <p className="font-Barlow leading-6 text-[17px] mt-5 text-Blue300 1200:leading-7">
              {planetData.description}
            </p>
          </div>
          <div className="w-full h-[2px] bg-white/40 my-7 1200:my-10"></div>
          <div className="uppercase flex flex-col items-center justify-center text-center gap-y-7 pb-5 1200:pb-0 md:flex-row md:gap-x-30 1200:items-start 1200:justify-start 1200:text-start">
            <div>
              <p className="font-BCondensed tracking-widest text-Blue300 text-xl ">
                AVG. DISTANCE
              </p>
              <h1 className="font-Bellefair text-4xl mt-3">
                {planetData.distance}
              </h1>
            </div>
            <div>
              <p className="font-BCondensed tracking-widest text-Blue300 text-xl ">
                EST. TRAVEL TIME
              </p>
              <h1 className="font-Bellefair text-4xl mt-3">
                {planetData.travel}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Moon;
