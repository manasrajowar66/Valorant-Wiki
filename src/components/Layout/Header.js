import classes from "./Header.module.css";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
        <Link to="/">VALORANT - WIKI</Link>
      </div>
      <div className={classes.links}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} exact to="/agents">
              Agents
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} exact to="/weapons">
              Weapons
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/maps">
              Maps
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
