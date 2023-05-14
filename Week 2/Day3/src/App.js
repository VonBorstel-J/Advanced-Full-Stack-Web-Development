import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <DisplayProducts />
      </div>
    );
  }
}

export default App;




// FROM WEEK 1 

// import React, { Component } from "react";
// import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// // import cologneImg from "./products/cologne.jpg";
// // import iwatchImg from "./products/iwatch.jpg";
// // import mugImg from "./products/mug.jpg";
// // import walletImg from "./products/wallet.jpg";

// const products = [
//   {
//     id: 1,
//     image: cologneImg,
//     desc: "Unisex Cologne",
//     value: 0,
//   },
//   {
//     id: 2,
//     image: iwatchImg,
//     desc: "Apple iWatch",
//     value: 0,
//   },
//   {
//     id: 3,
//     image: mugImg,
//     desc: "Unique Mug",
//     value: 0,
//   },
//   {
//     id: 4,
//     image: walletImg,
//     desc: "Mens Wallet",
//     value: 0,
//   },
// ];

// const Product = ({ product, onQuantityChange }) => {
//   const handleInputChange = (e) => {
//     const newQuantity = parseInt(e.target.value) || 0;
//     onQuantityChange(product.id, newQuantity);
//   };

//   return (
//     <div className="product">
//       <img src={product.image} alt={product.desc} />
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

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       quantities: products.reduce((acc, product) => {
//         acc[product.id] = product.value;
//         return acc;
//       }, {}),
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

//   render() {
//     const totalQuantity = products
//       .map((product) => this.state.quantities[product.id])
//       .reduce((accumulator, current) => accumulator + current, 0);

//     return (
//       <div>
//         <header className="header">
//           <div className="header-left">Shop to React</div>
//           <div className="header-right">
//             <FontAwesomeIcon icon={faShoppingCart} />
//             <span>{totalQuantity}</span>
//           </div>
//         </header>
//         <main className="products">
//           {products.map((item) => (
//             <Product
//               key={item.id}
//               product={item}
//               onQuantityChange={this.handleQuantityChange}
//             />
//           ))}
//         </main>
//       </div>
//     );
//   }
// }
// export default App;