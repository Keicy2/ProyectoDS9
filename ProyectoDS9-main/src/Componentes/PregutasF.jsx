import React, { useState } from 'react';
import './style.css';

const faqData = [
  {
        question: "¿Qué horario de atención tiene StudySupply?",
        answer: "Nuestra tienda física está abierta de Lunes - Domingo de 8AM-5PM. Nuestro sitio web está disponible las 24 horas del día, los 7 días de la semana.",
      },
      {
        question: "¿Puedo comprar productos en línea y retirarlos en la tienda?",
        answer: "Sí, ofrecemos la opción de compra en línea con retiro en tienda. Seleccione la opción 'Retiro en tienda' al finalizar su compra y luego podrá recoger su pedido en nuestra tienda física.",
      },
  {
    question: "¿Qué tipo de útiles escolares venden?",
    answer: `Ofrecemos una amplia variedad de útiles escolares de alta calidad, incluyendo:
    1. Materiales de escritura: Lápices, bolígrafos, marcadores, borradores, sacapuntas, etc.
    2. Materiales de organización: Cuadernos, carpetas, divisores, mochilas, estuches, etc.
    3. Materiales de arte: Pinturas, pinceles, crayones, colores, plastilina, etc.
    4. Materiales de ciencias: Equipos de laboratorio, calculadoras, instrumentos de geometría, etc.
    5. Y mucho más: Agendas, calculadoras, compases, reglas, etc.`,
  },
  {
    question: "¿Cuáles son sus precios?",
    answer: "Nos esforzamos por ofrecer precios asequibles para todos los estudiantes. Ofrecemos una variedad de descuentos y promociones durante todo el año, además de programas especiales para escuelas y grupos.",
  },
  {
    question: "¿Ofrecen envío gratuito?",
    answer: "Sí, ofrecemos envío gratuito en pedidos superiores a un monto determinado. Consulte nuestra página de envío y devoluciones para obtener más información.",
  },
  {
    question: " ¿Qué métodos de pago aceptan?",
    answer: "Aceptamos tarjetas de crédito y débito, y PayPal",
  },
  {
    question: "¿Cómo puedo contactarlos?",
    answer: "Puede contactarnos por teléfono o correo electrónico. Consulte nuestra página de contacto para obtener más información.",
  },
  {
    question: "¿Ofrecen descuentos para estudiantes o profesores?",
    answer: "Sí, ofrecemos descuentos para estudiantes y profesores.",
  },
  {
    question: "¿Cuánto tiempo tarda en llegar mi pedido?",
    answer: "Los pedidos se procesan y envían en un plazo de 24horas. El tiempo de entrega varía según el destino del pedido. Puede verificar el estado de su pedido en cualquier momento en nuestro sitio web.",
  },

];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = index => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>Preguntas Frecuentes</h1>
      {faqData.map((item, index) => (
        <div 
          key={index} 
          className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          onClick={() => toggleFAQ(index)}
        >
          <div className="faq-question">
            {item.question}
          </div>
          <div className="faq-answer">
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
