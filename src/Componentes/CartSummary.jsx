import React from 'react';
import './css.css';

const CartSummary = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-summary">
      <h3>Resumen del Pedido</h3>
      <div className="summary-item">
        <span>Envío:</span>
        <span>GRATIS</span>
      </div>
      <div className="summary-item">
        <span>Subtotal:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="summary-total">
        <span>TOTAL:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button className="checkout-button">Pagar</button>
      <input type="text" placeholder="Usar código de descuento" />
      <a href="#" className="continue-shopping">Seguir navegando</a>
    </div>
  );
};

export default CartSummary;
