import React, {useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import ProductList from './ProductList';
import './css.css';
import { cartcontex } from '../Contextos/cartcontext';
import Navegacion from './Navegacion';


const Productos = ({children}) => {
  const [cart, addToCart] = useContext(cartcontex);

  const products = [
    { id: 1, name: 'Bolígrafo Paper Mate Stylus', description: '2 EN 1, 2 PZS, 1.0MM', price: 5.25, image: '/Boligrafo.jpeg'},
    { id: 341, name: 'MARCADOR MAGISTRAL C/2 COLORES SURTIDOS', description: '2 EN 1, 2 PZS', price: 2.78, image: '/Marcador.jpeg' },
    { id: 3, name: 'RESALTADOR SLIM COLORES SURTIDOS', description:'4 Unidades', price: 1.50, image: '/Resaltador.jpeg' },
    { id: 4, name: 'CRAYONES CERA COLOR PEPS CAJA', description: '12 Unidades', price: 1.85, image: '/Crayones.jpeg' },
    { id: 5, name: 'MARCADOR ACUARELA LAVABLE', description: '12 PZS', price: 6.50, image: '/MAcuarela.jpeg' },
    { id: 6, name: 'CUADERNO ESPIRAL ARIMANY U CUADROS ', description: '100H (PASTA SEMI DURA)', price: 3.80, image: '/Cuaderno.png' },
    { id: 7, name: 'CUADERNO ESPIRAL FIVE STAR 5M ', description: ' 5Materias, 200H', price: 24.95, image: '/CuadernoE.jpeg'},
    { id: 8, name: 'CUADERNO ESPIRAL LINEA IOFFICE PASTEL ', description: ' 100 Hojas, CELESTE A4', price: 8.45, image: '/Libreta.jpeg'},
    { id: 9, name: 'CUADERNO ESPIRAL LINEAS AMARILLAS ', description: '80 HOJAS, TEAM A5 AMARILLO', price: 6.85, image: '/CEspiral.jpeg'},
    { id: 512, name: 'CERÁMICA EN FRÍO AMARILLO', description: 'Color amarillo 250g', price: 2.99, image: 'utiles/Cerámica en Frío Color Amarillo 250 g 2.99.png'},
    { id: 612, name: 'TIJERA', description: 'Tijera de rebote', price: 1.20, image: 'utiles/Tijera Escolar Rebote 5R 1-20.png' },
    { id: 811, name: 'GOMA GLITTER ', description: 'Color: azul ', price: 1.49, image: 'utiles/Cola Glitter Azul 1.49.png' },
    { id: 911, name: 'GOMA BLANCA', description: 'Contenido 225ml', price: 2.25, image: 'utiles/Goma Blanca 225ml 2.25.png' },
    { id: 486, name: 'KIT DE ESCRITURA COLORES', description: 'Kit', price: 5.40, image: '/KitdeLapices.jpeg'},
    { id: 215, name: 'LAPICES DE CERA MAPED GIRATORIO', description: '12 Unidades', price: 4.50, image: '/Lcera.jpeg'},
    { id: 216, name: 'LAPICES PELIKAN TRIANGULARES', description: '24 Unidades', price: 4.50, image: '/Pelikan.jpeg'},
    { id: 217, name: 'LAPICERO PAPER MATE ROJO', description: '24 Unidades', price: 2.50, image: '/LpeperM.jpeg'},
    { id: 751, name: 'ROTULADORES COLORP EPS JUNGLE', description: 'caja 12 Unidades', price: 5.50, image: '/RotuladorePJ.jpeg'},
    { id: 342, name: 'MARCADOR AQUARELO JUNIOR CARTERA', description: '6 Unidades', price: 1.30, image: '/MAquarelo.jpeg'},
    { id: 787, name: 'PINTURA ACRILICA ROJO OXIDO POLITEC', description: 'contenido: 20ml', price: 0.55, image: '/PARojo.jpeg'},
    { id: 780, name: 'ESTUCHE PASTEL KEEP N CARRY', description: '', price: 15.99, image: '/EstucheCarry.jpeg'},
    { id: 713, name: 'SACAPUNTA CON BORRADOR', description: 'Marca FABER-CASTELL', price: 0.99, image: 'utiles/Sacapunta con Borrador 0.99.png' },
    { id: 714, name: 'SACAPUNTA CON BORRADOR', description: 'Marca MAPED', price: 2.60, image: 'utiles/Sacapunta con Borrador maped 2.60.png' },
    { id: 715, name: 'SACAPUNTA 2 PIEZAS', description: 'Marca SHARPENER', price: 2.99, image: 'utiles/Sacapuntas 2 piezas 2.99.png' },
    { id: 716, name: 'SACAPUNTA MANUAL', description: 'Marca SHARPENER', price: 2.60, image: 'utiles/Sacapuntas Manual 2.60.png' },
    { id: 112, name: 'COMPAS', description: ' Material: Metal', price: 1.99, image: 'utiles/Compas Metálico 1.99.png' },
    { id: 212, name: 'ESCALíMETRO', description: 'Escalas 1:20:25:50:75:100:125 ', price: 2.99, image: 'utiles/Escalímetro en Escalas 1 20-25-50-75-100-125 2.99.png' },
    { id: 312, name: 'ESCUADRA', description: 'Medidas: 45 Grados x 16cm', price: 1.05, image: 'utiles/Escuadra de 45 Grados x 16cm 1.05.png' },
    { id: 412, name: 'REGLAS DE GEOMETRÍA', description: 'Set de 4 piezas', price: 1.99, image: 'utiles/Reglas de Geometría Set de 4 Piezas  1.99.png' },
    { id: 512, name: 'TIJERA ESCOLAR', description: 'Medida: 7.5', price: 0.99, image: 'utiles/Tijera Escolar 7.5 0.99.png' },
    { id: 612, name: 'TIJERA', description: 'Tijera de rebote', price: 1.20, image: 'utiles/Tijera Escolar Rebote 5R 1-20.png' },
    { id: 111, name: 'BARRA DE SILICONA', description: 'Delgada con 5 unidades', price: 0.99, image: 'utiles/Barra Silicona Delgada Bolsa 5 Unidades  0.99.png' },
    { id: 211, name: 'BARRA DE PLASTILINA', description: 'Set de 4 unidades', price: 2.99, image: 'utiles/Barras de Plastilina Set 4 Unidades  2.99.png' },
    { id: 311, name: 'BOLA DE FOAM', description: 'Color blanco de 4cm', price: 1.50, image: 'utiles/Bola de Foam 4cm 1.29.png' },
    { id: 411, name: 'BOLITAS DE POMPOM', description: '100 piezas, tamaño 1.5cm', price: 0.99, image: 'utiles/Bolitas Pompom 1.5cm 100 Piezas 0.99.png' },
    { id: 511, name: 'CERÁMICA EN FRÍO AMARILLO', description: 'Color amarillo 250g', price: 2.99, image: 'utiles/Cerámica en Frío Color Amarillo 250 g 2.99.png' },
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
  const productsPerPage = 10;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navegacion/>
     <h2 className="catalogo-title">Productos</h2>
      <div className="catalogo-container">
      </div>
      <div className='producto-info'>
      <ProductList products={currentProducts} addToCart={addToCart}/>
        <Pagination
          productsPerPage={productsPerPage}
          totalProducts={products.length}
          paginate={paginate}
        />
      </div>  
      </div>
  );
};

export default Productos;
