import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const MedicionTijeras = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 112, name: 'COMPAS', description: ' Material: Metal', price: 1.99, image: 'utiles/Compas Metálico 1.99.png' },
    { id: 212, name: 'ESCALíMETRO', description: 'Escalas 1:20:25:50:75:100:125 ', price: 2.99, image: 'utiles/Escalímetro en Escalas 1 20-25-50-75-100-125 2.99.png' },
    { id: 312, name: 'ESCUADRA', description: 'Medidas: 45 Grados x 16cm', price: 1.05, image: 'utiles/Escuadra de 45 Grados x 16cm 1.05.png' },
    { id: 412, name: 'REGLAS DE GEOMETRÍA', description: 'Set de 4 piezas', price: 1.99, image: 'utiles/Reglas de Geometría Set de 4 Piezas  1.99.png' },
    { id: 512, name: 'TIJERA ESCOLAR', description: 'Medida: 7.5', price: 0.99, image: 'utiles/Tijera Escolar 7.5 0.99.png' },
    { id: 612, name: 'TIJERA', description: 'Tijera de rebote', price: 1.20, image: 'utiles/Tijera Escolar Rebote 5R 1-20.png' },
    // Agrega otros productos según sea necesario
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navegacion/>
     <h2 className="catalogo-title">Medición y Tijeras</h2>
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

export default MedicionTijeras;