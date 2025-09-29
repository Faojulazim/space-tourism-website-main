import { useState, useEffect } from "react";
import Header from "./components/Header";
import { Outlet, useLocation } from "react-router-dom";

const backgrounds = {
  "": {
    mobile: "/assets/home/background-home-mobile.jpg",
    tablet: "/assets/home/background-home-tablet.jpg",
    desktop: "/assets/home/background-home-desktop.jpg",
  },
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
  const basePath = location.pathname.split("/")[1] || "";
  const [loaded, setLoaded] = useState(false);
  const [currentBg, setCurrentBg] = useState(backgrounds[basePath]);

  useEffect(() => {
    const bgSet = backgrounds[basePath] || backgrounds[""];
    const images = Object.values(bgSet).map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    let loadedCount = 0;
    images.forEach((img) => {
      img.onload = () => {
        loadedCount++;
        if (loadedCount === images.length) {
          setCurrentBg(bgSet);
          setLoaded(true);
        }
      };
    });
  }, [basePath]);

  if (!loaded) return null; // avoid flicker

  return (
    <div
      className={`min-h-screen bg-cover text-white`}
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${currentBg.mobile})`,
      }}
    >
      <Header />
      <Outlet />
    </div>
  );
}
