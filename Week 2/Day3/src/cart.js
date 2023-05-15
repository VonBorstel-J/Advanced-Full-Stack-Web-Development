import React, { createContext, useState, useContext } from "react";
import "./products";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex] = {
        ...updatedCartItems[existingItemIndex],
        quantity: updatedCartItems[existingItemIndex].quantity + product.quantity,
      };
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, product]);
    }
  };


  const removeFromCart = (item) => {
    const existingItem = cartItems.find((i) => i.id === item.id);
    if (existingItem) {
      const updatedCartItems = cartItems.map((i) => {
        if (i.id === item.id) {
          return { ...i, quantity: i.quantity - 1 };
        }
        return i;
      });
      const filteredCartItems = updatedCartItems.filter((i) => i.quantity > 0);
      setCartItems(filteredCartItems);
    }
  };

  const removeItemFromCart = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
  };

  const cartContextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    removeItemFromCart,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  );
  };
  


const Cart = () => {
  const { cartItems, addToCart, removeFromCart, removeItemFromCart } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return <div>Your cart is empty.</div>;
  }

  return (
    <div className="cart">
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.image} alt={item.desc} />
          <h2>{item.desc}</h2>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => addToCart(item)}>+</button>
          <button onClick={() => removeFromCart(item)}>-</button>
          <button onClick={() => removeItemFromCart(item)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export { CartProvider, Cart };
