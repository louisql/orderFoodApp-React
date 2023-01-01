import { useContext, useEffect, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/cart-context"; /* Importing not the cart provider but the Cart Context itself (we don.t need the provider component) */
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;

  const numberOfCartItems = items.reduce((currentNumber, item) => {
    return currentNumber + item.amount
  }, 0)
  /* not using lenght if we add several times the same meal 
    instead we use the built in method which transform an array of data into single value
  */


  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : '' }`;

  useEffect( () => {
    if (items.length === 0){
      return;
    }
    setBtnIsHighlighted(true)

    const timer = setTimeout(() => { 
      setBtnIsHighlighted(false); /* Will be run after the specified duration */
      
      return () =>{
        clearTimeout(timer);
      }
    }, 300); /* Reminder: animation duration was 300ms */

  }, [items]); /* we can't simply specify [cartCtx] as an array of dependencies, or the effect would re-run when anything about the cart context changes - hence the object descturing above */
  /* 
    cleaning the timer in the event of itmes rapidly added after each otehr
  */




  return (
    <button className={btnClasses} onClick={props.onClickPointer}>
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
