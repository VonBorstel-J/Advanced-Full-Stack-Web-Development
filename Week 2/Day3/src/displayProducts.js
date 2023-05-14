
import products from "./products";
import { Modal } from 'react-bootstrap';
import React, { useState, Component } from 'react'; 


const [showModal, setShowModal] = useState(false);
const handleShowModal = () => {
  setShowModal(true);
};

const handleCloseModal = () => {
  setShowModal(false);
};

const Product = ({ product, onQuantityChange }) => {
  const handleInputChange = (e) => {
    const newQuantity = parseInt(e.target.value) || 0;
    onQuantityChange(product.id, newQuantity);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.desc} />
      <div className="product-info">
        <h4>{product.desc}</h4>
        <p>Quantity: {product.value}</p>
      </div>
      <input
        className="quantity-input"
        type="number"
        min="0"
        value={product.value}
        onChange={handleInputChange}
      />
    </div>
  );
};

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
