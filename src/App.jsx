import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Componentes/Header';
import Navegacion from './Componentes/Navegacion';
import Catalogo from './Componentes/Catalogo';
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import Carrito from './Componentes/Carrito';
import Registro from './Componentes/Registro';
import Carousel from './Componentes/Carousel';  
import Banner from './Componentes/Banner';

function App() {
  const [misProductos, setMisProductos] = React.useState([]);

  const agregarAlCarrito = (producto) => {
    setMisProductos([...misProductos, producto]);
    return <Navigate to="/carrito" />;
  };

  return (
    <Router>
      <div>
        <Header />
        <Navegacion />
        <main>
          <Routes>
            <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/catalogo" element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<Carrito misProductos={misProductos} />} />
            {/* Agregar más rutas según sea necesario */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

const Inicio = ({ agregarAlCarrito }) => {
  return (
    <>
      <h1>Bienvenido</h1>
      <Banner /> 
      <Carousel /> 
      {/* Contenido de la página de inicio */}
    </>
  );
};

export default App;
