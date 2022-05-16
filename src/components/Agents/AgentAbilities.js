import { useState } from "react";
import classes from "./AgentAbilities.module.css";

const AgentAbilities = (props) => {
  const [activeAbility, setActiveAbility] = useState(0);
  const [toggle, setToggle] = useState(true);
  return (
    <div className={classes["abilities-container"]}>
      <div className={classes.title}>
        <h1>Abilities</h1>
        <div></div>
      </div>
      <div className={classes.abilities}>
        {props.abilities.map((ability, index) => {
          if (ability.displayIcon) {
            return (
              <div
                key={ability.displayName}
                onClick={() => {
                  setActiveAbility(index);
                  setToggle(false);
                  setTimeout(() => {
                    setToggle(true);
                  }, 100);
                }}
                className={`icon ${activeAbility === index && classes.active}`}
              >
                <img src={ability.displayIcon} alt="" />
              </div>
            );
          }
          return <></>;
        })}
      </div>

      <div className={classes["description-container"]}>
        {toggle && (
          <>
            <h1 className={`${toggle && classes.zoom}`}>
              {props.abilities[activeAbility].displayName}
            </h1>
            <p className={`${toggle && classes.zoom}`}>
              {props.abilities[activeAbility].description}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default AgentAbilities;
