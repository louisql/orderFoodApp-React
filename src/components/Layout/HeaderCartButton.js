import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context"; /* Importing not the cart provider but the Cart Context itself (we don.t need the provider component) */
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)
  /* not using lenght if we add several times the same meal 
    instead we use the built in method which transform an array of data into single value
  */


  return (
    <button className={classes.button} onClick={props.onClickPointer}>
      {/* one span for icon, one span for text and one span for the badge */}
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
