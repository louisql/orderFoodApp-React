import {useContext} from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'
import CartContext from '../../../store/cart-context';
import Cart from '../../Cart/Cart';

const MealItem = (props) => {
  const cartCtx = useContext(CartContext); /* Establishing the connexion */
  const price = `$${props.price.toFixed(2)}`;
  /* Making sure there are 2 decimals to the price */

  const addToCartHandler = amount => {
    /* From here we reach out to the context */
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
