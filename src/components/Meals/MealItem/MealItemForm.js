import { useRef, useState } from "react";
/* Important: refs do not work by default on custom components. you have to go to the component,, import React there and wrap our component function with React Forwards rep */
import Input from "../../UI/Input";

import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHander = event => {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;  /* Always use .current for refs created with useRef */
        /* enteredAmount will be a string, using + to convert to a number */
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false);
            return;
        }

        /* Here we just have amount and lack id, name, price so the context method will be called elsewhere */
        props.onAddToCart(enteredAmountNumber);
    }
    
  return (
    <form className={classes.form} onSubmit={submitHander}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>¸
      {!amountIsValid && <p>Please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default MealItemForm;
