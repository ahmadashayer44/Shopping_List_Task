import cartCss from "./Cart.module.css";
import { useItems } from "../Context";
import { useItemsDispatch } from "../Context";
export default function Cart() {
  const dispatch = useItemsDispatch();
  const items = useItems();
  let cartItems = [...items];
  let price = 0;
  cartItems.map((item) => {
    price += Number(item.price.split("$")[1]);
  });
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
      {cartItems.length === 0 && <h2>Cart is empty</h2>}
      <div className={cartCss.itemsContainer}>
        {cartItems.map((item) => (
          <div className={cartCss.item}>
            <h2>{item.name}</h2>
            <img className={cartCss.image} src={item.image} alt={item.name} />
            <p>{item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              className={cartCss.removeItem}
              onClick={() => dispatch({ type: "REMOVE", item: item })}
            >
              -
            </button>
          </div>
        ))}
      </div>
      <div className={cartCss.total}>
        <h2>Total: ${price}</h2>
      </div>
      <div className={cartCss.checkout}>
        {cartItems.length > 0 && (
          <form className={cartCss.form}>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <button className={cartCss.checkoutButton}>Checkout</button>
          </form>
        )}
      </div>
    </div>
  );
}
