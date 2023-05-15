import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './cart';
import './App.css';

function Navbar({ cart }) {
  const { cartItems } = useContext(CartContext);
  const cartLength = (cartItems || []).length;

  return (
    <div className="header">
      <Link to="/">
        <div className="header-left">Logo</div>
      </Link>
      <Link to="/cart">
        <div className="header-right">
          <span className="cart-icon">Cart ({cartLength})</span>
        </div>
      </Link>
    </div>
  );
}

export default Navbar;
