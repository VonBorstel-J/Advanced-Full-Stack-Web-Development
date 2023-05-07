import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cologneImg from "./products/cologne.jpg";
import iwatchImg from "./products/iwatch.jpg";
import mugImg from "./products/mug.jpg";
import walletImg from "./products/wallet.jpg";

const products = [
  {
    id: 1,
    name: "Unisex Cologne",
    img: cologneImg,
    desc: "Unisex Cologne",
    value: 0,
  },
  {
    id: 2,
    name: "Apple iWatch",
    img: iwatchImg,
    desc: "Apple iWatch",
    value: 0,
  },
  {
    id: 3,
    name: "Unique Mug",
    img: mugImg,
    desc: "Unique Mug",
    value: 0,
  },
  {
    id: 4,
    name: "Mens Wallet",
    img: walletImg,
    desc: "Mens Wallet",
    value: 0,
  },
];

const Product = ({ product }) => {
  return (
    <div>
      <img src={product.img} alt={product.name} />
      <h4>{product.name}</h4>
      <p>{product.desc}</p>
      <p>Quantity: {product.value}</p>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      quantities: products.reduce((acc, product) => {
        acc[product.id] = product.value;
        return acc;
      }, {}),
    };
  }

  handleQuantityChange = (productId, newQuantity) => {
    this.setState((prevState) => ({
      quantities: {
        ...prevState.quantities,
        [productId]: newQuantity,
      },
    }));
  };

  render() {
    const totalQuantity = Object.values(this.state.quantities).reduce(
      (accumulator, current) => accumulator + current,
      0
    );

    return (
      <div>
        <header className="header">
          <div className="header-left">Shop to React</div>
          <div className="header-right">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span>{totalQuantity}</span>
          </div>
        </header>
        {/* ...rest of your app */}
      </div>
    );

export default App;
