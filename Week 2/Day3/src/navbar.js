import React, { useState } from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "./products";
import Product from "./products";

const Navbar = () => {
  const [quantities, setQuantities] = useState(
    products.reduce((acc, product) => {
      acc[product.id] = product.value;
      return acc;
    }, {})
  );

  const totalQuantity = Object.values(quantities).reduce(
    (accumulator, current) => accumulator + current,
    0
  );

  return (
    <nav className="navbar">
      <div className="header-left">Shop to React</div>
      <div className="header-right">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{totalQuantity}</span>
      </div>
    </nav>
  );
};

export default Navbar;
