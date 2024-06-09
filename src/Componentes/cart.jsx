import React, { useState } from 'react';
import CartItem from './CartItem';
import './css.css';

const Cart = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: ' ',
      description: '  ',
      price: 339.97,
      quantity: 1,
      image: '    '
    },
    //agregar más elementos aquí
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>
      <h2>Tu Carrito</h2>
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          onUpdateQuantity={updateQuantity}
          onRemove={removeItem}
        />
      ))}
      <div className="cart-summary">
        <p>Subtotal ({cartItems.length} productos): ${subtotal.toFixed(2)}</p>
        <button>Terminar pedido</button>
      </div>
    </div>
  );
};

export default Cart;
