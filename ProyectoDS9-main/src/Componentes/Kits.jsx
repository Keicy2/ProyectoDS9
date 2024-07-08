import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const Kits = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 1110, name: 'KIT ESCOLAR PRIMARIA 3ER Grado', description: 'Escuela El Buen Pastor', price: 26.99, image: 'utiles/kit1.jpeg' },
    { id: 3110, name: 'KIT ESCOLAR KINDER', description: 'Centro Bilingue Nuevo Arraiján', price: 35.99, image: 'utiles/kit3.jpeg' },
    { id: 4110, name: 'KIT ESCOLAR PRIMARIA 1ER GRADO', description: 'Centro Bilingue Nuevo Arraiján', price: 22.60, image: 'utiles/kit4.jpeg' },
    { id: 5110, name: 'KIT ESCOLAR NOVENO GRADO', description: 'Colegio SAINT MARY', price: 49.00, image: 'utiles/kit5.jpeg' },
    { id: 6110, name: 'KIT ESCOLAR 4TO GRADO', description: 'Colegio SAINT MARY', price: 25.65, image: 'utiles/kit6.jpeg' },
    { id: 7110, name: 'KIT ESCOLAR 2DO GRADO', description: 'Centro Bilingue Vista Alegre', price: 70.00, image: 'utiles/kit7.jpeg' },
    { id: 8110, name: 'KIT ESCOLAR 5TO GRADO', description: 'Centro Bilingue Vista Alegre', price: 40.96, image: 'utiles/kit8.jpeg' },
    // Agrega otros productos según sea necesario
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navegacion/>
     <h2 className="catalogo-title">KITS escolares</h2>
      <div className="catalogo-container">
        
      <div className='catalogo-filters'>
      </div>
      <div className='products-pagination-container'>
      <ProductList products={currentProducts} addToCart={addToCart}/>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>  
      </div>
    </div>
  );
};

export default Kits;