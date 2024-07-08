import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import Filters from './Filters';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const Arte = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 112, name: 'ACUARELA', description: '12 Colores ', price: 4.25, image: 'utiles/Acuarela 12 Colores 4.25.png' },
    { id: 212, name: 'ACUARELA', description: '48 Colores', price: 4.99, image: 'utiles/Acuarela 48 colores 4.99.png' },
    { id: 312, name: 'ACUARELA CRAYOLA', description: 'Lavable 16 colores Surtidos con Pincel', price: 3.99, image: 'utiles/Acuarela Crayola Lavable 16 colores Surtidos con Pincel 3.99.png' },
    { id: 412, name: 'BARNIZ DURAC MATE', description: '50g mate', price: 3.00, image: 'utiles/Barniz Durac Mate 3.00.png' },
    { id: 512, name: 'BARNIZ DURAC SATINADO', description: '50g Satinado', price: 3.00, image: 'utiles/Barniz Durac Satinado 3.00.png' },
    { id: 612, name: 'BROCHAS', description: 'Set de 3 piezas', price: 1.95, image: 'utiles/Brochas Set 3 Piezas 1.95.png' },
    { id: 612, name: 'LIBRETA MUSICAL PENTGRAMA', description: '30 Hojas 8.5x11', price: 1.75, image: 'utiles/Libreta Musical Pentagrama 30 Hojas 8.5x11 1.75.png' },
    { id: 612, name: 'LIENZO', description: 'Set de 3 piezas', price: 7.99, image: 'utiles/Lienzo 3 Piezas 7.99.png' },
    { id: 612, name: 'LIENZO CON DIBUJO', description: 'Medida: 24x30cm', price: 6.00, image: 'utiles/Lienzo con Dibujo 24x30cm.png' },
    { id: 612, name: 'PALETA CON PINCELES', description: 'Set de 6 piezas', price: 2.95, image: 'utiles/Paleta con Pinceles Set 6 Piezas 2.95.png' },
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
     <h2 className="catalogo-title">Arte</h2>
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

export default Arte;