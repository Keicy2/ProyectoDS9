import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './css.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>STUDY SUPPLY</h4>
          <p>¡SIN FILAS, NI DEMORAS! .</p>
        </div>
        <div className="footer-section">
          <h4>Enlaces útiles</h4>
          <ul>
            <li><a href="/about">Acerca de</a></li>
            <li><a href="/contact">Contacto</a></li>
            <li><a href="/faq">Preguntas Frecuentes</a></li>
            <li><a href="/terms">Términos y Condiciones</a></li>
            <li><a href="/privacy">Política de Privacidad</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Categorías Populares</h4>
          <ul>
            <li><a href="/category/libros">Libros</a></li>
            <li><a href="/category/utiles">Útiles Escolares</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Síguenos</h4>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} STUDY SUPPLY - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
