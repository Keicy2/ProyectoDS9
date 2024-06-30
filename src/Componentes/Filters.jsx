import React from 'react';

const Filters = () => {
  return (
    <div className="filters">
      <h2>Filtros</h2>
      <div className="filter-group">
        <label htmlFor="brand">Marcas:</label>
        <select id="brand">
          <option value="all">All</option>
          <option value="brandA">Brand A</option>
          <option value="brandB">Brand B</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="category">Categorias:</label>
        <select id="category">
          <option value="all">All</option>
          <option value="category1">Category 1</option>
          <option value="category2">Category 2</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;