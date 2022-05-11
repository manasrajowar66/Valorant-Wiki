import classes from "./Header.module.css";
import { useEffect, useState } from "react";

const Header = () => {
  const [isElevateHeader, setElevateHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY >= 100) {
        setElevateHeader(true);
      } else {
        setElevateHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [setElevateHeader]);

  return (
    <header
      className={`${classes.header} ${isElevateHeader && classes.elevate}`}
    >
      <div className={classes.logo}>
        <h1>VALORANT - WIKI</h1>
      </div>
      <div className={classes.links}>
        <ul>
          <li>Agents</li>
          <li>Guns</li>
          <li>Maps</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
