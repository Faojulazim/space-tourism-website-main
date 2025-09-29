import { useState } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";
import homeBg from "/assets/home/background-home-mobile.jpg";

function App() {
  const location = useLocation();

  const backgroundsMap = {
    "": "bg-[url('/assets/home/background-home-mobile.jpg')] sm:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
    home: "bg-[url('/assets/home/background-home-mobile.jpg')] sm:bg-[url('/assets/home/background-home-tablet.jpg')] lg:bg-[url('/assets/home/background-home-desktop.jpg')]",
    destination:
      "bg-[url('/assets/destination/background-destination-mobile.jpg')] sm:bg-[url('/assets/destination/background-destination-tablet.jpg')] lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]",
    crew: "bg-[url('/assets/crew/background-crew-mobile.jpg')] sm:bg-[url('/assets/crew/background-crew-tablet.jpg')] lg:bg-[url('/assets/crew/background-crew-desktop.jpg')]",
    technology:
      "bg-[url('/assets/technology/background-technology-mobile.jpg')] sm:bg-[url('/assets/technology/background-technology-tablet.jpg')] lg:bg-[url('/assets/technology/background-technology-desktop.jpg')]",
  };

  const basePath = location.pathname.split("/")[1];
  const currentBg = backgroundsMap[basePath] || homeBg;

  return (
    <div className={`min-h-screen bg-cover text-white ${currentBg}`}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
