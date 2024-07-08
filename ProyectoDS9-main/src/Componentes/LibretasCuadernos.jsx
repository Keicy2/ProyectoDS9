import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Filters from './Filters';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const LibretasCuadernos = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 115, name: 'CUADERNO BONIQUINHAS', description: 'Raya Ancha 200 Páginas', price: 6.25, image: 'utiles/Cuaderno Boniquinhas Raya Ancha 200 Páginas 6.25.png' },
    { id: 215, name: 'CUADERNO COLOR COSIDO', description: 'Cosido Raya Ancha 100 Hojas', price: 1.21, image: 'utiles/Cuaderno Color Cosido Raya Ancha 100 Hojas 1.29.png' },
    { id: 315, name: 'BORRADOR DE ESCOBILLA', description: 'Tamaño Grande', price: 3.95, image: 'utiles/Cuaderno Cosido de Dibujo- Grande  3.95.png' },
    { id: 415, name: 'CUADERNO COSIDO DISNEY', description: '160 páginas', price: 3.40, image: 'utiles/Cuaderno Cosido Disney- 160 Páginas 3.40.png' },
    { id: 515, name: 'CUADERNO COSIDO KIUT', description: 'Tamaño grande', price: 3.95, image: 'utiles/Cuaderno Cosido KIUT-Grande 3.95.png' },
    { id: 615, name: 'CUADERNO COSIDO RAYA ANCHA', description: '160 páginas', price: 3.40, image: 'utiles/Cuaderno Cosido Raya Ancha-Grande-160 Páginas 3.40.png' },
    { id: 715, name: 'CUADERNO COSIDO', description: '50 páginas', price: 1.53, image: 'utiles/Cuaderno Cosido-50 Hojas5.75.png' },
    { id: 815, name: 'CUADERNO DE DIBUJO', description: 'Tamaño: 8.5x13', price: 3.95, image: 'utiles/Cuaderno de Dibujo 8.5x13 3.95.png' },
    { id: 915, name: 'CUADERNO DISNEY RAYA', description: 'Raya ancha- 200 páginas', price: 3.70, image: 'utiles/Cuaderno Disney Raya Ancha-200 Páginas 3.70.png' },
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

export default LibretasCuadernos;