import React from "react";
import cologneImg from "./products/cologne.jpg";
import iwatchImg from "./products/iwatch.jpg";
import mugImg from "./products/mug.jpg";
import walletImg from "./products/wallet.jpg";

const Product = ({ product, onQuantityChange }) => {
  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    onQuantityChange(product.id, newQuantity);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.desc} />
      <div className="product-info">
        <h4>{product.desc}</h4>
        <p>Quantity: {product.value}</p>
      </div>
      <input
        className="quantity-input"
        type="number"
        min="0"
        value={product.value}
        onChange={handleInputChange}
      />
    </div>
  );
};

const products = [
  {
    id: 1,
    image: cologneImg,
    desc: "Unisex Cologne",
    value: 0,
  },
  {
    id: 2,
    image: iwatchImg,
    desc: "Apple iWatch",
    value: 0,
  },
  {
    id: 3,
    image: mugImg,
    desc: "Unique Mug",
    value: 0,
  },
  {
    id: 4,
    image: walletImg,
    desc: "Mens Wallet",
    value: 0,
  },
];

export default products;
