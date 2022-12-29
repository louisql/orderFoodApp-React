/* 
    Manage the cart context date and provide context to all components that want access to it - provide the context to components (with useState/Reducer) that want access to it 
    Cart-context.js used to create the general context
*/

import CartContext from "./cart-context";

const CartProvider = props =>{
    const addItemToCartHandler = item => {

    };

    const removeItemFromCartHandler = id =>{

    };

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
            {/* Allows us to wrap any components that should have access to this conext, with the CartProvider Component */}
        </CartContext.Provider>
    )
};

export default CartProvider