import React from 'react';
import './css.css';

const Filter = () => {
  return (
    <div className="filter-container">
      <button className="filter-button">Categoría</button>
      <button className="filter-button">Marca</button>
      <button className="filter-button">Precio</button>
    </div>
  );
};

export default Filter;
