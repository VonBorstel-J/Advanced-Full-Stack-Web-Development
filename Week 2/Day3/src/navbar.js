// import React, { useState } from "react";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import products from "./products";
// import "./App.css";

// const Navbar = () => {
//   const [quantities] = useState(
//     products.reduce((acc, product) => {
//       acc[product.id] = product.value;
//       return acc;
//     }, {})
//   );

//   const totalQuantity = Object.values(quantities).reduce(
//     (accumulator, current) => accumulator + current,
//     0
//   );

//   return (
//     <nav className="navbar">
//       <div className="header-left">Shop to React</div>
//       <div className="header-right">
//         <FontAwesomeIcon icon={faShoppingCart} />
//         <span>{totalQuantity}</span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Navbar({ cart }) {
  return (
    <div className="header">
      <Link to="/">
        <div className="header-left">Logo</div>
      </Link>
      <Link to="/cart">
        <div className="header-right">
          <span className="cart-icon">Cart ({cart.length})</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
