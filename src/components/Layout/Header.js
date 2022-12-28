import { Fragment } from "react";

const Header = (props) => {
  return
  /* 
    Reminder - Fragment used to avoid having too many div in the code. Just a container - could have also imported
    React only and do react.fragment instead of Fragment
  */
  <Fragment>
    <header></header>
    <div></div>
  </Fragment>;
};

export default Header;
