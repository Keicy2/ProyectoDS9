import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Filters from './Filters';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const Manualidades = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 111, name: 'BARRA DE SILICONA', description: 'Delgada con 5 unidades', price: 0.99, image: 'utiles/Barra Silicona Delgada Bolsa 5 Unidades  0.99.png' },
    { id: 211, name: 'BARRA DE PLASTILINA', description: 'Set de 4 unidades', price: 2.99, image: 'utiles/Barras de Plastilina Set 4 Unidades  2.99.png' },
    { id: 311, name: 'BOLA DE FOAM', description: 'Color blanco de 4cm', price: 1.50, image: 'utiles/Bola de Foam 4cm 1.29.png' },
    { id: 411, name: 'BOLITAS DE POMPOM', description: '100 piezas, tamaño 1.5cm', price: 0.99, image: 'utiles/Bolitas Pompom 1.5cm 100 Piezas 0.99.png' },
    { id: 511, name: 'CERÁMICA EN FRÍO AMARILLO', description: 'Color amarillo 250g', price: 2.99, image: 'utiles/Cerámica en Frío Color Amarillo 250 g 2.99.png' },
    { id: 611, name: 'CERÁMICA EN FRÍO AZUL', description: 'Color azul 250g', price: 2.99, image: 'utiles/Cerámica en Frío Color Azul 250 g 2.99.png' },
    { id: 711, name: 'CINTA ADHESIVA ', description: ' Tamaño 19mm x 3mm', price: 4.80, image: 'utiles/Cinta Adhesiva 19mm x 33m 4.80.png' },
    { id: 811, name: 'GOMA GLITTER ', description: 'Color: azul ', price: 1.49, image: 'utiles/Cola Glitter Azul 1.49.png' },
    { id: 911, name: 'GOMA BLANCA', description: 'Contenido 225ml', price: 2.25, image: 'utiles/Goma Blanca 225ml 2.25.png' },
    { id: 101, name: 'DISCO DE FOAM', description: '30x2.5cm Blanco', price: 2.99, image: 'utiles/Disco de Foam 30x2.5cm Blanco 2.99.png' },
    { id: 111, name: 'NOTAS ADHESIVAS', description: 'Forma de Flechas 5 Colores', price: 0.99, image: 'utiles/Notas Adhesivas Flechas 5 Colores 0.99.png' },
    { id: 121, name: 'DPAPEL DE CONSTRUCCIÓN CARYOLA', description: '48 piezas', price: 5.99, image: 'utiles/Papel de Construcción Crayola 48 Piezas 5.99.png' },
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
     <h2 className="catalogo-title">Manualidades</h2>
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

export default Manualidades;
