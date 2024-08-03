import React, {useState} from "react";

function Item({ name, category }) {
  const [onCart, setToCart] = useState(false)

  function displayItem() {
    setToCart((onCart) => !onCart)
  }

  const cartItems = onCart ? "in-cart" : ""  
  return (
    <li className={cartItems}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={displayItem}>{onCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
