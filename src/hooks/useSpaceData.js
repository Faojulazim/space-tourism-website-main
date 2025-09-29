import { useEffect, useState, useRef } from "react";

export default function useSpaceData(query) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const spaceData = await fetch("/data.json");
      const spaceDataJson = await spaceData.json();
      setData(spaceDataJson[query]);
    };
    fetchData();
  }, [query]);

  return data;
}
