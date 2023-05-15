// import React, { useState, useContext } from "react";
// import { Modal } from "react-bootstrap";
// import { CartContext } from "./cart";
// import "./App.css";

// const DisplayProducts = ({ products }) => {
//   const { addToCart } = useContext(CartContext);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleShow = (product) => {
//     const selectedProductWithQuantity = {
//       ...product,
//       quantity: 1,
//     };
//     setSelectedProduct(selectedProductWithQuantity);
//     console.log("Selected product:", selectedProductWithQuantity);
//   };

//   const handleQuantityChange = (product, change) => {
//     if (selectedProduct && selectedProduct.id === product.id) {
//       const newQuantity = selectedProduct.quantity + change;
//       if (newQuantity > 0 && newQuantity <= selectedProduct.stock) {
//         setSelectedProduct({ ...selectedProduct, quantity: newQuantity });
//         console.log("Quantity changed:", selectedProduct);
//       } else {
//         console.log("Invalid quantity change:", selectedProduct);
//       }
//     } else {
//       if (change > 0) {
//         setSelectedProduct({ ...product, quantity: 1 });
//         console.log("Product selected with plus button:", product);
//       } else {
//         console.log("No product selected for quantity change.");
//       }
//     }
//   };

//   const handleAddToCart = () => {
//     if (selectedProduct) {
//       if (selectedProduct.quantity > 0) {
//         addToCart(selectedProduct, selectedProduct.quantity);
//         console.log("Added to cart:", selectedProduct);
//         setSelectedProduct(null);
//       } else {
//         console.log("Invalid quantity:", selectedProduct);
//       }
//     } else {
//       console.log("No product added to cart.");
//     }
//   };

//   return (
//     <div className="products">
//       {products.map((product) => (
//         <div key={product.id} className="product">
//           <div className="product-title">{product.desc}</div>
//           <img
//             src={product.image}
//             alt={product.desc}
//             onClick={() => handleShow(product)}
//           />
//           <div className="quantity-container">
//             <button
//               className="quantity-button"
//               onClick={() => handleQuantityChange(product, -1)}
//               disabled={!selectedProduct || selectedProduct.id !== product.id}
//             >
//               -
//             </button>

//             <button
//               className="quantity-button"
//               onClick={() => handleQuantityChange(product, 1)}
              
//             >
//               +
//             </button>

//             <button onClick={handleAddToCart} disabled={!selectedProduct}>
//               Add to Cart
//             </button>
//           </div>


//           <Modal
//             show={selectedProduct && selectedProduct.id === product.id}
//             onHide={() => setSelectedProduct(null)}
//             dialogClassName="custom-modal"
//           >
//             <Modal.Header>
//               <Modal.Title>{selectedProduct?.desc}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <img
//                 src={selectedProduct?.image}
//                 alt={selectedProduct?.desc}
//                 style={{ maxWidth: "100%", height: "auto" }}
//               />
//               <p>Rating: {selectedProduct?.rating} out of 5</p>
//             </Modal.Body>
//             <Modal.Footer>
//               <button onClick={() => setSelectedProduct(null)}>Close</button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default DisplayProducts;


import ProductCard from './productCard';

const DisplayProducts = ({ products }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default DisplayProducts;