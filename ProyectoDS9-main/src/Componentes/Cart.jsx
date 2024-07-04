import React from 'react';
import CartItem from './CartItem';
import { useContext } from 'react';
import { cartcontex } from '../Contextos/cartcontext';

const Cart = ({children}) => {
  const [cart, increaseQuantity, decreaseQuantity, removeFromCart] = useContext(cartcontex);
  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
            removeFromCart={removeFromCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cart;
