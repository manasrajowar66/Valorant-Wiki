import React from "react";
import { useEffect, useState } from "react";
import classes from "./Maps.module.css";

const Maps = () => {
  const [mapsDetails, setMapsDetails] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://valorant-api.com/v1/maps");
      const data = await res.json();
      setMapsDetails(data.data);
      console.log(data.data);
    };
    fetchData();
    return () => {};
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>Maps</h1>
        <div></div>
      </div>
      <div className={classes["maps-container"]}>
        {mapsDetails.map((map) => {
          return (
            <div
              key={map.uuid}
              className={classes.map}
              style={{ backgroundImage: `url(${map.splash})` }}
            >
              <h1>{map.coordinates}</h1>
              <h1>{map.displayName}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Maps;
