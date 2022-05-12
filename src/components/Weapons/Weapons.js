import { useEffect } from "react";

const Weapons = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://valorant-api.com/v1/weapons");
      const data = await res.json();
      console.log(data.data);
    };
    fetchData();
  }, []);
  return <div>Weapons</div>;
};

export default Weapons;
