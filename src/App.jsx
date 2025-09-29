import { useState, useEffect } from "react";
import { useLocation, Outlet } from "react-router-dom";
import Header from "./components/Header";

const backgrounds = {
  home: {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
  },
  destination: {
    mobile: "/assets/destination/background-destination-mobile.jpg",
    tablet: "/assets/destination/background-destination-tablet.jpg",
    desktop: "/assets/destination/background-destination-desktop.jpg",
  },
  crew: {
    mobile: "/assets/crew/background-crew-mobile.jpg",
    tablet: "/assets/crew/background-crew-tablet.jpg",
    desktop: "/assets/crew/background-crew-desktop.jpg",
  },
  technology: {
    mobile: "/assets/technology/background-technology-mobile.jpg",
    tablet: "/assets/technology/background-technology-tablet.jpg",
    desktop: "/assets/technology/background-technology-desktop.jpg",
  },
};

export default function App() {
  const location = useLocation();
  const basePath = location.pathname.split("/")[1] || "home";
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [currentBg, setCurrentBg] = useState("");
  const [prevBg, setPrevBg] = useState(""); // for smooth fade
  const [loaded, setLoaded] = useState(false);

  // Track window resize
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Load background based on route + screen width
  useEffect(() => {
    const bgSet = backgrounds[basePath] || backgrounds.home;

    let bgSrc;
    if (screenWidth >= 1024) bgSrc = bgSet.desktop;
    else if (screenWidth >= 640) bgSrc = bgSet.tablet;
    else bgSrc = bgSet.mobile;

    // preload image
    const img = new Image();
    img.src = bgSrc;
    img.onload = () => {
      setPrevBg(currentBg); // keep previous for fade
      setCurrentBg(bgSrc);
      setLoaded(true);
    };
  }, [basePath, screenWidth]);

  if (!loaded) return null;

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Backgrounds */}
      <div className="fixed inset-0 z-0">
        {prevBg && prevBg !== currentBg && (
          <div
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
            style={{ backgroundImage: `url(${prevBg})`, opacity: 0 }}
          ></div>
        )}
        <div
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 opacity-100"
          style={{ backgroundImage: `url(${currentBg})` }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
