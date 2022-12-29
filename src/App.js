import { Fragment, useState } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () =>{
    setCartIsShown(true);
  }

  const hideCartHandler = () => {
    setCartIsShown(false);
  }

  return (
    /* <> </> replacing Fragment */
    <>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      {/* {cartIsShown && <Cart />} expression to display if both are true (Cart will always be true - it is a shortcut notation) */}

      <Header onShowCart={showCartHandler} />
      {/* props with functions conventionnaly have their name starts with on */}
      
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
