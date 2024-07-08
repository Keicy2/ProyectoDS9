import React from 'react';
import './style.css';

const ReturnPolicy = () => {
  return (
    <div className="return-policy-container">
      <h1>Política de Devoluciones de StudySupply</h1>
      <p>
        En StudySupply, nos comprometemos a ofrecer a nuestros clientes una experiencia de compra satisfactoria. Si no está completamente satisfecho con su compra, puede devolverla para obtener un reembolso completo o un cambio.
      </p>
      <h2>Aspectos Destacados de Nuestra Política de Devoluciones:</h2>
      <h3>Plazo de Devolución</h3>
      <p>Aceptamos devoluciones dentro de los 3 días posteriores a la compra.</p>
      <h3>Productos Elegibles para Devolución</h3>
      <p>
        Todos los productos sin usar y en su embalaje original pueden ser devueltos. 
        Algunos productos, como artículos electrónicos, pueden estar sujetos a restricciones de devolución. Consulte nuestra página de productos para obtener más información.
      </p>
      <h3>Cómo Devolver un Producto:</h3>
      <ol>
      <li>Inicie el proceso de devolución en línea: Visite nuestra página de devoluciones e ingrese su número de pedido y dirección de correo electrónico.<br /></li>
      <li>Seleccione el producto que desea devolver: Elija el producto que desea devolver del listado de su pedido.<br /></li>
        <li>Seleccione el motivo de la devolución: Elija un motivo de la lista desplegable.<br /></li>
        <li>Envíe su solicitud de devolución: Una vez que haya seleccionado el producto y el motivo de la devolución, haga clic en el botón "Enviar solicitud".<br /></li>
        <li>Recibirá un correo electrónico de confirmación: Recibirá un correo electrónico de confirmación con instrucciones sobre cómo devolver el producto.<br /></li>
        <li>Devuelva el producto: Empaquete el producto de forma segura y envíelo a la dirección indicada en el correo electrónico de confirmación.<br /></li>
        <li>Recibirá un correo electrónico de confirmación de reembolso: Una vez que hayamos recibido y procesado su devolución, le enviaremos un correo electrónico de confirmación de reembolso.<br /></li>
      </ol>
      <h3>Reembolsos</h3>
      <p>
        Los reembolsos se procesarán dentro de los 5 días hábiles posteriores a la recepción del producto devuelto. El reembolso se realizará en el mismo método de pago que se utilizó para la compra original.
      </p>
      <h3>Cambios</h3>
      <p>
        Si desea cambiar un producto por otro de igual valor, puede hacerlo siguiendo el mismo proceso de devolución en línea. Si desea cambiar un producto por otro de mayor valor, deberá pagar la diferencia de precio.
      </p>
      <h3>Excepciones a la Política de Devoluciones</h3>
      <ul>
        <li>No se aceptan devoluciones de productos usados o dañados.</li>
        <li>No se aceptan devoluciones de productos personalizados o especiales.</li>
        <li>No se aceptan devoluciones de productos después del plazo de devolución de 3 días.</li>
      </ul>
      <h3>Contacta con Nosotros</h3>
      <p>
        Si tiene alguna pregunta sobre nuestra política de devoluciones, no dude en contactarnos.
      </p>
    </div>
  );
};

export default ReturnPolicy;
