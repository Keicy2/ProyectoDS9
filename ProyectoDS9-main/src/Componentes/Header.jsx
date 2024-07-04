import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import './css.css';
import logo from '/Logo.jpeg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/">
          <img src={logo} alt="Logo" className="header-logo" />
        </Link>
        <span className="company-name">STUDY SUPPLY</span>
      </div>
      <div className="header-center">
        <input type="text" placeholder="Buscar por categoría, producto o marca" className="search-bar" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Ubicar tienda</a>
        <div className="header-icons">
          <Link to="/carrito" className="header-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            Mis productos
          </Link>
          <Link to="/login" className="header-icon">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;



