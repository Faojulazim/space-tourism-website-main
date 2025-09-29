import React, { use } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header";

export default function Destination() {
  return (
    <div className="flex gap-x-5 flex-col items-start px-10 1200:!mt-5 mt-5 md:mt-10">
      <h1 className="font-BCondensed tracking-widest text-xl flex gap-x-5 1200:text-[1.6rem] 1200:px-20 1300:px-32">
        <span className="text-white/40 font-[600] ">01</span> PICK YOUR
        DESTINATION
      </h1>
      <Outlet />
    </div>
  );
}
