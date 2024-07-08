import React from 'react';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
import './css.css';

const Carrito = () => {
  const cartItems = [
    { id: 1, name: 'Bolígrafo Paper Mate Stylus', description: '2 EN 1, 2 PZS, 1.0MM', price: 5.25, image: '/Boligrafo.jpeg', quantity: 1 },
    { id: 2, name: 'MARCADOR MAGISTRAL C/2 COLORES SURTIDOS', description: '2 EN 1, 2 PZS', price: 2.78, image: '/Marcador.jpeg', quantity: 3 },
    { id: 715, name: 'SACAPUNTA 2 PIEZAS', description: 'Marca SHARPENER', price: 2.99, image: 'utiles/Sacapuntas 2 piezas 2.99.png',quantity: 1 },
  ];

  return (
    <div className="cart-container">
      <div className="cart-items">
        <h2>Mi Carrito</h2>
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CartSummary items={cartItems} />
    </div>
  );
};

export default Carrito;