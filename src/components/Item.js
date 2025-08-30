import itemCss from "./Item.module.css";
export default function Items({ item }) {
  console.log("item", item);

  const { name, image, price } = item;
  return (
    <div className={itemCss.item}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
