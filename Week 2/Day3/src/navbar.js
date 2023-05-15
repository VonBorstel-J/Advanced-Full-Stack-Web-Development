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
        <div className="header-left">
          <span className="logo-text" style={{ fontFamily: 'Roboto' }}>
            Shop 2
          </span>
          <span className="logo-r">R</span>eact
        </div>
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
