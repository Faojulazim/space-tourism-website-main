import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/shared/logo.svg";
import hamburger from "/assets/shared/icon-hamburger.svg";
import close from "/assets/shared/icon-close.svg";
export default function Header() {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  return (
    <div className="relative z-[200] flex flex-col md:flex-row  md:justify-between md:items-center md:p-0 lg:py-5 lg:pl-5">
      <nav className="flex items-center justify-between p-5 md:p-0">
        <img
          src={logo}
          className="md:px-10 950:px-0 md:w-[160px] 950:min-w-[130px] lg:max-w-[100px]"
          alt=""
        />
        <img
          className="md:hidden cursor-pointer"
          src={hamburger}
          onClick={() => setIsNavbarVisible(true)}
          alt=""
        />
      </nav>
      <div className="hidden lg:block relative w-full h-[1px] bg-white/40 translate-x-8 z-[200]"></div>
      <div
        className={`w-[60%] md:w-full 800:min-w-[600px] 900:min-w-[700px] lg:min-w-[800px]  900:max-w-[900px] md:static fixed top-0 right-0 font-BCondensed h-full backdrop-blur-xl md:bg-white/5 md:flex md:justify-end text-white transition-all duration-[400ms] md:pr-10 lg:pr-15 ease-in-out ${
          isNavbarVisible
            ? "translate-x-0 md:translate-x-0"
            : "translate-x-150 md:translate-x-0"
        }`}
      >
        <img
          onClick={() => setIsNavbarVisible(false)}
          className="absolute md:hidden right-5 top-9 cursor-pointer"
          src={close}
          alt=""
        />
        <ul className="mt-30 md:mt-0 flex flex-col gap-y-5 text-xl pl-5 md:flex-row md:gap-x-10 lg:gap-x-20">
          <li className="flex items-center w-full justify-between ">
            <NavLink
              to="/"
              onClick={() => setIsNavbarVisible(false)}
              className={({ isActive }) =>
                `md:py-10 relative tracking-wider uppercase flex items-center justify-between w-full after:absolute after:right-[2px] after:top-1/2 after:-translate-y-1/2 after:content-[''] after:bg-white after:w-[4px] after:h-[22px] md:after:bottom-0 md:after:w-full md:after:h-[2px] md:after:top-auto ${
                  !isActive ? "after:hidden" : ""
                }`
              }
            >
              <div className="flex gap-x-4">
                <span className="font-bold">00</span> Home
              </div>
            </NavLink>
          </li>
          <li className="flex items-center w-full justify-between">
            <NavLink
              onClick={() => setIsNavbarVisible(false)}
              to="destination"
              className={({ isActive }) =>
                `md:py-10 relative tracking-wider uppercase flex items-center justify-between w-full after:absolute after:right-[2px] after:top-1/2 after:-translate-y-1/2 after:content-[''] after:bg-white after:w-[4px] after:h-[22px] md:after:bottom-0 md:after:w-full md:after:h-[2px] md:after:top-auto ${
                  !isActive ? "after:hidden" : ""
                }`
              }
            >
              <div className="flex gap-x-4">
                <span className="font-bold">01</span> Destination
              </div>
            </NavLink>
          </li>
          <li className="flex items-center w-full justify-between">
            <NavLink
              onClick={() => setIsNavbarVisible(false)}
              to="crew"
              className={({ isActive }) =>
                `md:py-10 relative tracking-wider uppercase flex items-center justify-between w-full after:absolute after:right-[2px] after:top-1/2 after:-translate-y-1/2 after:content-[''] after:bg-white after:w-[4px] after:h-[22px] md:after:bottom-0 md:after:w-full md:after:h-[2px] md:after:top-auto ${
                  !isActive ? "after:hidden" : ""
                }`
              }
            >
              <div className="flex gap-x-4">
                <span className="font-bold">02</span> Crew
              </div>
            </NavLink>
          </li>
          <li className="flex items-center w-full justify-between">
            <NavLink
              onClick={() => setIsNavbarVisible(false)}
              to="technology"
              className={({ isActive }) =>
                `md:py-10 relative tracking-wider uppercase flex items-center justify-between w-full after:absolute after:right-[2px] after:top-1/2 after:-translate-y-1/2 after:content-[''] after:bg-white after:w-[4px] after:h-[22px] md:after:bottom-0 md:after:w-full md:after:h-[2px] md:after:top-auto ${
                  !isActive ? "after:hidden" : ""
                }`
              }
            >
              <div className="flex gap-x-4">
                <span className="font-bold">03</span> Technology
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
