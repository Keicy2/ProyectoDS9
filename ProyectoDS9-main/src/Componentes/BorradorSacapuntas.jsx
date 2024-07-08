import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Filters from './Filters';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const BorradorSacapuntas = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 113, name: 'BORRADOR BLANCO', description: 'Marca STAEDTLER ', price: 0.75, image: 'utiles/Borrador Blanco Rasoplast 0.75.png' },
    { id: 213, name: 'BORRADOR BLANCO SET', description: 'Set de 3 piezas', price: 0.95, image: 'utiles/Borrador Blanco Set 3 Piezas 0.95.png' },
    { id: 313, name: 'BORRADOR DE ESCOBILLA', description: 'Marca STAEDTLER', price: 1.95, image: 'utiles/Borrador de Escobilla 1.95.png' },
    { id: 413, name: 'BORRADOR BLANCO GRANDE', description: 'Marca Artline', price: 0.30, image: 'utiles/Borrador Grande Blanco Artline 0.30.png' },
    { id: 513, name: 'BORRADOR MECÁNICO', description: 'Transparente azul', price: 1.35, image: 'utiles/Borrador Mecánico Transparente Azul 1.35.png' },
    { id: 613, name: 'BORRADOR DE PIZARRÓN BLANCO', description: 'Marca ARTESCO', price: 2.00, image: 'utiles/Borrador para Pizarrón Blanco 2.00.png' },
    { id: 713, name: 'SACAPUNTA CLEAN', description: 'Color verde, Marca MAPED', price: 1.53, image: 'utiles/Sacapunta clean 1.53.png' },
    { id: 713, name: 'SACAPUNTA CON BORRADOR', description: 'Marca FABER-CASTELL', price: 0.99, image: 'utiles/Sacapunta con Borrador 0.99.png' },
    { id: 714, name: 'SACAPUNTA CON BORRADOR', description: 'Marca MAPED', price: 2.60, image: 'utiles/Sacapunta con Borrador maped 2.60.png' },
    { id: 715, name: 'SACAPUNTA 2 PIEZAS', description: 'Marca SHARPENER', price: 2.99, image: 'utiles/Sacapuntas 2 piezas 2.99.png' },
    { id: 716, name: 'SACAPUNTA MANUAL', description: 'Marca SHARPENER', price: 2.60, image: 'utiles/Sacapuntas Manual 2.60.png' },
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

export default BorradorSacapuntas;