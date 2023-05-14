import React, { Component } from "react";
import Product from "./products";
import products from "./products";

class DisplayProducts extends Component {
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
    return (
      <main className="products">
        {products.map((item) => (
          <Product
            key={item.id}
            product={item}
            onQuantityChange={this.handleQuantityChange}
          />
        ))}
      </main>
    );
  }
}

export default DisplayProducts;
