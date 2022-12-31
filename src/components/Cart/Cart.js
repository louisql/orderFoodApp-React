import { useContext } from "react";

import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id)
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({...item, amount: 1})
  };

  const cartitems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map(
        (item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)} 
            /* 
            IMPORTANT
              here we bind to preconfigure the argument the function will receive when it is executed 
              because cartItemRemoveHandler is a reference to the function, not an execution (if there was no arguments we wouldn't have parentheses )
             onRemove={() => cartItemRemoveHandler(item.id)} arrow notation to remove bind
            */
 
            onAdd={cartItemAddHandler.bind(null, item)} 
          />
        ) /* Do not forget to add key props when you have a list */
      )}
    </ul>
  );

  return (
    <Modal onClosePointer={props.onClose}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
