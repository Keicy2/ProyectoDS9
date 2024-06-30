import React from 'react';
import { Link } from 'react-router-dom';
import './css.css';

function Navegacion() {
  return (
    <nav className='barra'>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li>Acerca de</li>
        <li>Contacto</li>
      </ul>
    </nav>
  );
}

export default Navegacion;

