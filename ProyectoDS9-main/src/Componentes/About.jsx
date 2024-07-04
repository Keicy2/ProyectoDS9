import React from 'react';
import './style.css';
import logo from '/Logo.jpeg'; // Asegúrate de que la ruta sea correcta

const About = () => {
  return (
    <div className="about-container">
      <div className="image-container">
        <img src={logo} alt="Multimax" className="logo" />
      </div>
      <div className="text-container">
        <h1>Sobre Nosotros</h1>
        <p>
        En StudySupply, nos apasiona proporcionar a los estudiantes las herramientas que necesitan para triunfar en la escuela. Ofrecemos una amplia variedad de 
        útiles escolares de alta calidad a precios asequibles, para que puedas encontrar todo lo que necesitas para que tu hijo esté preparado para el nuevo año escolar..
        </p>
        <p>
        Estamos comprometidos a brindar a nuestros clientes un excelente servicio al cliente y una experiencia de compra positiva.
        Creemos que todos los estudiantes merecen acceso a los útiles que necesitan para alcanzar su máximo potencial. 
        Es por eso que ofrecemos una variedad de descuentos y programas para ayudar a que nuestros productos sean más asequibles para todos los estudiantes.
        </p>
        <p>
        Somos tu tienda única para todas tus necesidades de útiles escolares.
        ¡Visítanos hoy y descubre por qué StudySupply es la opción confiable para estudiantes y padres por igual!
        </p>
      </div>
    </div>
  );
};

export default About;
