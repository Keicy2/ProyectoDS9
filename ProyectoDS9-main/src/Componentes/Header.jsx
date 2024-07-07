import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart, faUser, faUserLock } from '@fortawesome/free-solid-svg-icons';
import './css.css';
import logo from '/logonew.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="header-start">
        <Link to="/">
          <img src={logo} alt="Logo" className="header-logo" />
          <span className="company-name">STUDY SUPPLY</span>
        </Link>
      </div>
      <div className="header-center">
        <input type="text" placeholder="Buscar por categoría, producto o marca" className="search-bar" />
        <button className="search-button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      <div className="header-right">
        <div className="header-icons">
          <Link to="/carrito" className="header-icon">
            <FontAwesomeIcon icon={faShoppingCart} />
            Mis productos
          </Link>
          <Link to="/login" className="header-icon">
            <FontAwesomeIcon icon={faUser} />
             Mi Cuenta
          </Link>
          <Link to="/admin" className="header-icon">
            <FontAwesomeIcon icon={faUserLock} />
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;



