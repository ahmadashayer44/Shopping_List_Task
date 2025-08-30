import Cart from "../components/Cart";
import Products from "../components/Products";
import mainCss from "./Main.module.css";
import { useState } from "react";
import cartImg from "../assets/shopping-cart.png";
export default function Main() {
  const [showCart, setShowCart] = useState(false);
  return (
    <div className={mainCss.main}>
      <Products />
      {showCart && <Cart />}
      <button onClick={() => setShowCart(!showCart)}>
        <img src={cartImg} className={mainCss.cartImg} alt="cart" />
      </button>
      {showCart && (
        <div
          className={mainCss.overlay}
          onClick={() => setShowCart(false)}
        ></div>
      )}
    </div>
  );
}
