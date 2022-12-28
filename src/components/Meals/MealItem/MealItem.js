import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css'

const MealItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  /* Making sure there are 2 decimals to the price */

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id}/>
      </div>
    </li>
  );
};

export default MealItem;
