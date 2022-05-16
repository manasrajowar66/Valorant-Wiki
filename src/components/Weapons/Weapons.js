import { useEffect, useState } from "react";
import classes from './Weapons.module.css';
import { useHistory } from "react-router-dom";

const Weapons = () => {
  const [weaponsDetails, setWeaponsDetails] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://valorant-api.com/v1/weapons");
      const data = await res.json();
      console.log(data.data);
      setWeaponsDetails(data.data);
    };
    fetchData();
  }, []);

  const onClickHandler = (uuid) => {
    history.push(`/weapons/${uuid}`);
  }

  return (
    <div className={classes['weapons-container']}>
      <div className={classes.title}>
        <h1>Weapons</h1>
        <div></div>
      </div>
      <div className={classes.weapons}>
        {weaponsDetails && weaponsDetails.map((weapon) => {
          return (
            <div className={classes["weapon-card"]} key={weapon.uuid}>
              <div className={classes["card-details"]}>
                <h4>{weapon.displayName}</h4>
                <img src={weapon.displayIcon} alt="" />
              </div>
              <button className={`btn`} onClick={() => onClickHandler(weapon.uuid)}>
                Know More
              </button>
            </div>
          );
        })}
      </div>
    </div>
  )
};

export default Weapons;
