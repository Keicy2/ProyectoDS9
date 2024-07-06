import React from 'react';
import { Link } from 'react-router-dom';
import './css.css';

function Navegacion() {
  return (
    <nav className='barra'>
      <ul className='menu'>
        <li><Link to="/">Inicio</Link></li>
        <li>
          <Link to="/catalogo">Productos</Link>
          <ul>
            <li><Link to="">Libretas y Cuadernos</Link></li>
            <li><Link to="">Lápiz y bolígrafos</Link></li>
            <li><Link to="">Borradores y Sacapuntas</Link></li>
            <li className="submenu-container">
              <Link to="/productos/libros">Libros</Link>
              <ul className="submenu">
                <li><Link to="">Libros de Ciencia</Link></li>
                <li><Link to="">Libros de Caligrafía</Link></li>
                <li><Link to="">Libros de Matemáticas</Link></li>
                <li><Link to="">Libros de Historia</Link></li>
              </ul>
            </li>
            <li><Link to="">Medición y tijeras</Link></li>
            <li><Link to="">Manualidades</Link></li>
          </ul>
        </li>
        <li><a href='public/CATALOGO.pdf'>Catálogo</a></li>
        <li><Link to="/kit">Kit Escolares</Link></li>
      </ul>
    </nav>
  );
}

export default Navegacion;

