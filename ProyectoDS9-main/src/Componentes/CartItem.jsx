import React from 'react';
import './css.css';

const CartItem = ({ item, increaseQuantity, decreaseQuantity, removeFromCart }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-description">{item.description}</span>
        <div className="item-quantity">
          <button>-</button>
          <span>{item.quantity}</span>
          <button>+</button>
        </div>
        <span className="item-price">${item.price}</span>
      </div>
      <button className="remove-item">×</button>
    </div>
  );
};

export default CartItem;
