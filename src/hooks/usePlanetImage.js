import { useLocation } from "react-router-dom";
import moonImg from "/assets/destination/image-moon.webp";
import marsImg from "/assets/destination/image-mars.webp";
import europaImg from "/assets/destination/image-europa.webp";
import titanImg from "/assets/destination/image-titan.webp";

const planetImagesMap = {
  "": moonImg,
  moon: moonImg,
  mars: marsImg,
  europa: europaImg,
  titan: titanImg,
};

export default function usePlanetImage() {
  const location = useLocation();
  const planetFromUrl = location.pathname.split("/")[2];
  const planetImg = planetImagesMap[planetFromUrl];

  return { planet: planetFromUrl, planetImg };
}
