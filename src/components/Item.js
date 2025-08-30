import itemCss from "./Item.module.css";
import { useItemsDispatch } from "../Context";
export default function Items({ item }) {
  const dispatch = useItemsDispatch();
  const { name, image, price } = item;
  return (
    <div className={itemCss.item}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{price}</p>
      <button onClick={() => dispatch({ type: "ADD", item: item })}>
        Add to Cart
      </button>
    </div>
  );
}
