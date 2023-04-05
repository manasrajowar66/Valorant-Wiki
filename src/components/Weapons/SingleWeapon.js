import classes from "./SingleWeapon.module.css";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

const SingleWeapon = () => {
  const { weaponUuid } = useParams();
  const [weaponDetails, setWeaponDetails] = useState(null);
  const [selectedSkin, setSelectedSkin] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://valorant-api.com/v1/weapons/${weaponUuid}`
      );
      const data = await res.json();
      console.log(data.data);
      setWeaponDetails(data.data);
    };
    fetchData();
    return () => {};
  }, [setWeaponDetails, weaponUuid]);

  const onChangeHandler = (e) => {
    setSelectedSkin(+e.target.value);
    setSelectedVariant(0);
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 100);
  };

  const onVariantChangeHandler = (index) => {
    setSelectedVariant(index);
    setToggle(false);
    setTimeout(() => {
      setToggle(true);
    }, 100);
  };

  let variants = [];
  if (weaponDetails) {
    variants = weaponDetails.skins[selectedSkin].chromas.filter(
      (chroma) => chroma.swatch
    );
  }
  // console.log(variants);
  // console.log(selectedSkin);

  return (
    <div className={classes["weapon-container"]}>
      <div className={classes["weapon-details"]}>
        <h1>
          {"// "}
          {weaponDetails && weaponDetails.skins[selectedSkin].displayName}
        </h1>
        <img
          src={weaponDetails && weaponDetails.skins[selectedSkin].displayIcon}
          alt=""
        />
        <div className={classes["dropdown-container"]}>
          <p>Select Skin</p>
          <select onChange={onChangeHandler} value={selectedSkin}>
            {/* eslint-disable-next-line */}
            {weaponDetails &&
              // eslint-disable-next-line
              weaponDetails.skins.map((skin, index) => {
                if (skin.displayIcon) {
                  return (
                    <option
                      value={index}
                      key={skin.uuid}
                      className={classes["menu-item"]}
                    >
                      {skin.displayName}
                    </option>
                  );
                }
              })}
          </select>
        </div>
      </div>
      <div className={classes["variants-container"]}>
        <div className={classes.title}>
          <h1>Variants</h1>
          <div></div>
        </div>
        {variants.length === 0 ? (
          <h2>Variants Not Available!</h2>
        ) : (
          <>
            <div className={classes.variants}>
              {/* eslint-disable-next-line */}
              {variants.map((chroma, index) => {
                if (chroma.swatch) {
                  return (
                    <div
                      className={`${
                        selectedVariant === index && classes["active-variant"]
                      }`}
                      onClick={() => onVariantChangeHandler(index)}
                      key={chroma.uuid}
                    >
                      <img src={chroma.swatch} alt="" />
                    </div>
                  );
                }
              })}
            </div>
            <div className={classes["selected-variant"]}>
              <img
                src={
                  variants[selectedVariant].displayIcon
                    ? variants[selectedVariant].displayIcon
                    : variants[selectedVariant].fullRender
                }
                alt=""
              />
              <h1 className={`${toggle && classes.zoom}`}>
                {variants[selectedVariant].displayName}
              </h1>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SingleWeapon;
