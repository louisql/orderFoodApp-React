import { Fragment } from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    /* <> </> replacing Fragment */
    <>
      <Header/>
      <main>
        <Meals />
      </main>
    </>
  );
}

export default App;
