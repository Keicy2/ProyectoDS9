import React, { useState } from 'react';
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
  const [misProductos, setMisProductos] = useState([]);
  const [isCartOpen, setCartOpen] = useState(false);

  const agregarAlCarrito = (producto) => {
    setMisProductos([...misProductos, producto]);
    setCartOpen(true);
  };

  const updateQuantity = (id, quantity) => {
    setMisProductos(misProductos.map(item =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    ));
  };

  const removeItem = (id) => {
    setMisProductos(misProductos.filter(item => item.id !== id));
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
          </Routes>
        </main>
        <Footer />
        <Carrito 
          isOpen={isCartOpen} 
          onClose={() => setCartOpen(false)} 
          misProductos={misProductos} 
          onUpdateQuantity={updateQuantity} 
          onRemove={removeItem} 
        />
      </div>
    </Router>
  );
}

const Inicio = ({ agregarAlCarrito }) => {
  return (
    <>
      <h1>Bienvenido a nuestra tienda</h1>
      <Banner /> 
      <Carousel /> 
    </>
  );
};

export default App;
