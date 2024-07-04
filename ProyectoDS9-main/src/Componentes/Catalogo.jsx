import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Filters from './Filters';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';


const Catalogo = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 1, name: 'Bolígrafo Paper Mate Stylus', description: '2 EN 1, 2 PZS, 1.0MM', price: 5.25, image: '/Boligrafo.jpeg' },
    { id: 2, name: 'MARCADOR MAGISTRAL C/2 COLORES SURTIDOS', description: '2 EN 1, 2 PZS', price: 2.78, image: '/Marcador.jpeg' },
    { id: 3, name: 'RESALTADOR SLIM COLORES SURTIDOS', description: 'CON 4 COLORES PUNTA CINCEL PARATRASOS GRUESOS Y DELGADOS NO TOXICOSECADO RAPIDO', price: 1.50, image: '/Resaltador.jpeg' },
    { id: 4, name: 'CRAYONES CERA COLOR PEPS CAJA', description: 'CRAYONES DE CERA COLOR PEPS CAJA C/12', price: 1.85, image: '/Crayones.jpeg' },
    { id: 5, name: 'MARCADOR ACUARELA LAVABLE', description: '12 PZS', price: 6.50, image: '/MAcuarela.jpeg' },
    { id: 6, name: 'CUADERNO ESPIRAL ARIMANY U CUADROS ', description: '100H (PASTA SEMI DURA)', price: 3.80, image: '/Cuaderno.png' },
    { id: 7, name: 'CUADERNO ESPIRAL FIVE STAR 5M ', description: ' 5Materias, 200H', price: 24.95, image: '/CuadernoE.jpeg' },
    { id: 8, name: 'CUADERNO ESPIRAL LINEA IOFFICE PASTEL ', description: ' 100 Hojas, CELESTE A4', price: 8.45, image: '/Libreta.jpeg' },
    { id: 9, name: 'CUADERNO ESPIRAL LINEAS AMARILLAS ', description: '80 HOJAS, TEAM A5 AMARILLO', price: 6.85, image: '/CEspiral.jpeg' },
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
     <h2 className="catalogo-title">Catálogo de Productos</h2>
      <div className="catalogo-container">
        
      <div className='catalogo-filters'>
      <Filters />
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

export default Catalogo;
