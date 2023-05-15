import React, { useState, useContext } from "react";
import { Modal } from "react-bootstrap";
import { CartContext } from "./cart";
import "./App.css";

const DisplayProducts = ({ products }) => {
  const { addToCart } = useContext(CartContext);
  const [show, setShow] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (product) => {
    setSelectedProduct(product);
    setShow(true);
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img
            src={product.image}
            alt={product.desc}
            onClick={() => handleShow(product)}
          />
          <div>{product.desc}</div>
          <button onClick={() => addToCart(product)}>Add to cart</button>
        </div>
      ))}
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
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleClose}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DisplayProducts;
