import React from 'react';
import { Link } from 'react-router-dom';
import './css.css';

function Navegacion() {
  return (
    <nav className='barra'>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Productos</Link></li>
        <li><a href='public/CATALOGO.pdf'>Catálogo</a></li>
      </ul>
    </nav>
  );
}

export default Navegacion;

