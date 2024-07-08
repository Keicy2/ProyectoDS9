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
    { id: 1110, name: 'KIT ESCOLAR PRIMARIA', description: 'Escuela El Buen Pastor', price: 26.99, image: 'utiles/kit1.jpeg' },
    { id: 2110, name: 'CUADERNO COLOR COSIDO', description: 'Cosido Raya Ancha 100 Hojas', price: 1.21, image: 'utiles/kit2.jpeg' },
    { id: 3110, name: 'BORRADOR DE ESCOBILLA', description: 'Tamaño Grande', price: 3.95, image: 'utiles/kit3.jpeg' },
    { id: 4110, name: 'CUADERNO COSIDO DISNEY', description: '160 páginas', price: 3.40, image: 'utiles/kit4.jpeg' },
    { id: 5110, name: 'CUADERNO COSIDO KIUT', description: 'Tamaño grande', price: 3.95, image: 'utiles/kit5.jpeg' },
    { id: 6110, name: 'CUADERNO COSIDO RAYA ANCHA', description: '160 páginas', price: 3.40, image: 'utiles/kit6.jpeg.png' },
    { id: 7110, name: 'CUADERNO COSIDO', description: '50 páginas', price: 1.53, image: 'utiles/kit7.jpeg' },
    { id: 8110, name: 'CUADERNO DE DIBUJO', description: 'Tamaño: 8.5x13', price: 3.95, image: 'utiles/kit8.jpeg' },
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
     <h2 className="catalogo-title">Borradores y Sacapuntas</h2>
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