import React from 'react';
import { Link } from 'react-router-dom'; 
import '@fortawesome/fontawesome-free/css/all.css';
import './css.css';
import logo from '/Logo.jpeg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="Logo" className="header-logo" />
        <span className="company-name">STUDY SUPPLY</span>
      </div>
      <div className="header-center">
        <input type="text" placeholder="Buscar por categoría, producto o marca" className="search-bar" />
        <button className="search-button">
          <i className="fa fa-search"></i> 
        </button>
      </div>
      <div className="header-right">
        <a href="#" className="header-link">Ubicar tienda</a>
        <div className="header-icons">
        <Link to="/carrito" className="header-icon"><i className="fa fa-shopping-cart"></i> Mis productos</Link>
          <a href="#" className="header-icon"><i className="fa fa-heart"></i></a>
          <Link to="/login" className="header-icon"><i className="fa fa-user"></i></Link> 
        </div>
      </div>
    </header>
  );
}

export default Header;

