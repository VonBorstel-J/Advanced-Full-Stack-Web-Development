import React, { useState, useContext } from "react";
import { CartContext } from "./cart";
import { Modal } from "react-bootstrap";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleShow = () => {
    setSelectedProduct({
      ...product,
      quantity,
    });
  };

  const handleQuantityChange = (change) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantity(1);
    }
  };

  return (
    <div className="product-card">
      <div key={product.id} className="product">
        <div className="product-title">{product.desc}</div>
        <img
          src={product.image}
          alt={product.desc}
          onClick={() => handleShow(product)}
        />
        <div className="quantity-container">
          <div className="quantity-control">
            <button
              className="quantity-button"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </button>
            <span className="quantity-count">{quantity}</span>
            <button
              className="quantity-button"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </button>
            <button className="add-to-cart-button" onClick={handleAddToCart}>
              Add to Cart
            </button>
          </div>
        </div>
        <Modal
          show={selectedProduct && selectedProduct.id === product.id}
          onHide={() => setSelectedProduct(null)}
          dialogClassName="custom-modal"
        >
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
          </Modal.Body>
          <Modal.Footer>
            <button onClick={() => setSelectedProduct(null)}>Close</button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default ProductCard;
