import data from "../data.js";
import Item from "./Item.js";
import productCss from "./Product.module.css";
export default function Products() {
  const items = data;
  console.log(items);
  return (
    <div className={productCss.container}>
      <h1 className={productCss.title}>Products</h1>
      <div className={productCss.product}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
