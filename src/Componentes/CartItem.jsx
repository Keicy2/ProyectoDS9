import React from 'react';
import './css.css';

const CartItem = ({ item, onUpdateQuantity, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>{item.description}</p>
        <div className="cart-item-actions">
          <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
        </div>
      </div>
      <div className="cart-item-price">${item.price.toFixed(2)}</div>
      <button onClick={() => onRemove(item.id)} className="cart-item-remove">Eliminar</button>
    </div>
  );
};

export default CartItem;
