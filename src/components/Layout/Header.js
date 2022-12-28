import { Fragment } from "react";

import classes from "./Header.module.css";

import mealsImage from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";
/* Using import mealsImage to practice  */

const Header = (props) => {
  return (
    /* 
    Reminder - Fragment used to avoid having too many div in the code. Just a container - could have also imported
    React only and do react.fragment instead of Fragment
  */
    <Fragment>
      <header className={classes.header}>
        <h1>Food Ordering App</h1>
        <HeaderCartButton />
      </header>
      <div className={classes["main-image"]}>
        {/* because of the dash in main-image we can't use the dot notation */}
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </Fragment>
  );
};

export default Header;
