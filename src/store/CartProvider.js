/* 
    Manage the cart context date and provide context to all components that want access to it - provide the context to components (with useState/Reducer) that want access to it 
    Cart-context.js used to create the general context
*/

import { useReducer } from "react";
/* Using Reducer beacuse the state here is complex - need to check if meals is in the cart or not + manage removing */

import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

/* 
    Outside of CartProvider because does not need anything from the component and shouldn't be recreated all the time the component is reevalutated 
    Action will be dispatched by by me in my code
    state is the last state snapshot of the state managed by the reducer
*/
const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    /* We check if the item is already in the cart - function returns the index of the item if it is found and -1 otherwise (will be executed for every functions in the array) */

    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [
        ...state.items,
      ]; /* just making a copy of the arrey, update on the next line */
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    /*
         IMPORTANT
         Unlike push, concate does not omdify the existing array but returns a new one 
         reason: avoid editing old state snapshot because existing date in memory will be edited without React knowing about it
         So we generate a new state object we return
        */

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1 ){
        updatedItems = state.items.filter(item => item.id !== action.id) /* Like concate filter returns a new array, important in React - true we keeps the item, false we get rid of it so we check if item is different */
    }else {
        const updatedItem = {...existingItem, amount: existingItem.amount - 1}
        updatedItems = [...state.items]
        updatedItems[existingCartItemIndex] = updatedItem; /* updating the key iwth the item with the existing amount */
    }
    return{
        items: updatedItems,
        totalAmount: updatedTotalAmount 
    }
  }

  return defaultCartState;
  /* returns a new state snapshot */
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  /* 
    Make sure to point at the function - not execute it with () as it will be managed by React 
    returns two elements (state snapchot & function to dispatch an action to the reducer) so using array destructuring to pull out these elements and store them in separate constants
    */

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD" /* convention to have a string ALL CAPS identifyer for the action name */,
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
      {/* Allows us to wrap any components that should have access to this conext, with the CartProvider Component */}
    </CartContext.Provider>
  );
};

export default CartProvider;
