import React, { Fragment, useContext, useState } from "react";
import Header from "./components/LAYOUT/Header";
import Meals from "./components/MEALS/Meals";
import Cart from "./components/CART/Cart";
import CartContext from "./components/STORE/cart-context";
import CartContextProvider from "./components/STORE/CartContextProvider";
function App() {
  const cartCtx = useContext(CartContext)
  const [showCart, setShowCart] = useState(false)
  const showCartHandler = () =>{
    setShowCart(true);
  }
  const hideCartHandler = () =>{
    setShowCart(false);
  }
  return (
    <CartContextProvider>
      {showCart && <Cart showCartHandler={showCartHandler} hideCartHandler={hideCartHandler} />}
      <Header showCartHandler={showCartHandler} hideCartHandler={hideCartHandler} />
      <main>
        <Meals />
      </main>
    </CartContextProvider>
  );
}

export default App;
