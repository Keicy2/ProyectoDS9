import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './css.css';

const Carrito = ({ isOpen, onClose, misProductos, onUpdateQuantity, onRemove }) => {
  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>Tu Carrito</h2>
      {misProductos.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        misProductos.map((producto, index) => (
          <div key={index} className="cart-item">
            <img src={producto.image} alt={producto.name} />
            <div className="cart-item-details">
              <p>{producto.name}</p>
              <p className="cart-item-price">${producto.price}</p>
              <div className="cart-item-actions">
                <button onClick={() => onUpdateQuantity(producto.id, producto.quantity - 1)}>-</button>
                <span>{producto.quantity}</span>
                <button onClick={() => onUpdateQuantity(producto.id, producto.quantity + 1)}>+</button>
                <button onClick={() => onRemove(producto.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        ))
      )}
      {misProductos.length > 0 && (
        <div className="cart-summary">
          <p>Total: ${misProductos.reduce((total, producto) => total + producto.price * producto.quantity, 0).toFixed(2)}</p>
          <button>Terminar pedido</button>
        </div>
      )}
    </div>
  );
};

export default Carrito;
