import React from "react";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "./products";

const Navbar = () => {
  const totalQuantity = products
    .map((product) => this.state.quantities[product.id])
    .reduce((accumulator, current) => accumulator + current, 0);

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