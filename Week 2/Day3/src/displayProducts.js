// import products from "./products";
// import React, { useState, Component } from "react";
// import { Modal } from "react-bootstrap";
// import quantities from "./navbar"; 

// const Product = ({ product, onQuantityChange, handleShowModal }) => {
//   const handleInputChange = (e) => {
//     const newQuantity = parseInt(e.target.value) || 0;
//     onQuantityChange(product.id, newQuantity);
//   };

//   const handleImageClick = () => {
//     handleShowModal(product);
//   };

//   return (
//     <div className="product">
//       <img src={product.image} alt={product.desc} onClick={handleImageClick} />
//       <div className="product-info">
//         <h4>{product.desc}</h4>
//         <p>Quantity: {product.value}</p>
//       </div>
//       <input
//         className="quantity-input"
//         type="number"
//         min="0"
//         value={product.value}
//         onChange={handleInputChange}
//       />
//     </div>
//   );
// };

// class DisplayProducts extends Component {
//   constructor() {
//     super();
//     this.state = {
//       quantities: products.reduce((acc, product) => {
//         acc[product.id] = product.value;
//         return acc;
//       }, {}),
//       showModal: false,
//       modalProduct: null,
//     };
//   }

//   handleQuantityChange = (productId, newQuantity) => {
//     this.setState((prevState) => ({
//       quantities: {
//         ...prevState.quantities,
//         [productId]: newQuantity,
//       },
//     }));
//   };

//   handleShowModal = (product) => {
//     this.setState({ showModal: true, modalProduct: product });
//   };

//   handleCloseModal = () => {
//     this.setState({ showModal: false });
//   };

//   render() {
//     const { quantities, showModal, modalProduct } = this.state;

//     return (
//       <main className="products">
//         {products.map((item) => (
//           <Product
//             key={item.id}
//             product={item}
//             onQuantityChange={this.handleQuantityChange}
//             handleShowModal={this.handleShowModal}
//           />
//         ))}
//         {showModal && modalProduct && (
//           <Modal show={showModal} onHide={this.handleCloseModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>{modalProduct.desc}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img
//                 src={modalProduct.image}
//                 alt={modalProduct.desc}
//                 style={{ maxWidth: "100%", height: "auto" }} 
//               />
//               <p>Rating: {modalProduct.rating} out of 5</p>
              
//             </Modal.Body>
//             <Modal.Footer>
//               <button onClick={this.handleCloseModal}>Close</button>
//             </Modal.Footer>
//           </Modal>
//         )}
//       </main>
//     );
//   }
// }

// export default DisplayProducts;

import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';
import { CartContext } from './cart';
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
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedProduct?.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={selectedProduct?.image}
            alt={selectedProduct?.desc}
            style={{ maxWidth: '100%', height: 'auto' }}
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
