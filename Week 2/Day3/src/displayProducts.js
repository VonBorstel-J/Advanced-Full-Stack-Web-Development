import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "./cart";
import "./App.css";

const DisplayProducts = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);

  // Function to close the Modal and reset quantity
  const handleClose = () => {
    setShow(false);
    setQuantity(0);
  };

  // Function to show the Modal with the selected product and reset quantity
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
    setQuantity(0);
  };

  // Function to handle quantity changes (+1 or -1)
  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    // Validate the new quantity to stay within the available range
    if (newQuantity >= 0 && newQuantity <= selectedProduct?.quantity) {
      setQuantity(newQuantity);
    }
  };

  // Function to add the selected product and quantity to the cart
  const handleAddToCart = () => {
    if (selectedProduct && quantity > 0) {
      addToCart({ ...selectedProduct }, quantity);
      handleClose();
    }
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <div className="product-title">{product.desc}</div>
          <img
            src={product.image}
            alt={product.desc}
            onClick={() => handleShow(product)}
          />
          <div className="product-details">
            {/* Modal for displaying product details */}
            <Modal show={show} onHide={handleClose} dialogClassName="custom-modal">
              <Modal.Header>
                <Modal.Title>{selectedProduct?.desc}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img
                  src={selectedProduct?.image}
                  alt={selectedProduct?.desc}
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <p>Rating: {selectedProduct?.rating} out of 5</p>
                <div className="quantity-container">
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(-1)}
                  >
                    -
                  </button>
                  <div className="quantity">{quantity}</div>
                  <button
                    className="quantity-button"
                    onClick={() => handleQuantityChange(1)}
                  >
                    +
                  </button>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {/* Add to Cart and Close buttons */}
                <button onClick={handleAddToCart}>Add to Cart</button>
                <button onClick={handleClose}>Close</button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DisplayProducts;
