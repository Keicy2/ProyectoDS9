import React, {useRef, useEffect} from 'react';
import './css.css';


const CartSummary = ({ items }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Boligrafo, Marcador y Sacapuntas",
                amount: {
                  currency_code: "USD",
                  value: 16.58,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

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
      <div className="pay">
        <div ref={paypal}></div>
      </div>
      <input type="text" placeholder="Usar código de descuento" />
      <a href="/productos" className="continue-shopping">Seguir navegando</a>
      
    </div>
  );
};

export default CartSummary;
