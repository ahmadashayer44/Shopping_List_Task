import cartCss from "./Cart.module.css";
import { useItems } from "../Context";
export default function Cart() {
  const items = useItems();
  let cartItems = [...items];
  console.log(cartItems);
  cartItems = cartItems.reduce((acc, item) => {
    const exsitingItem = acc.find((i) => i.id === item.id);
    if (exsitingItem) {
      exsitingItem.quantity++;
    } else {
      acc.push({ ...item, quantity: 1 });
    }
    return acc;
  }, []);
  return (
    <div className={cartCss.cart}>
      <h1>Cart</h1>
      <div className={cartCss.itemsContainer}>
        {cartItems.map((item) => (
          <div className={cartCss.item}>
            <h2>{item.name}</h2>
            <img className={cartCss.image} src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className={cartCss.removeItem}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}
