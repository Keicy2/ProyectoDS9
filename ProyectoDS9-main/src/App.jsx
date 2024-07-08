import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Componentes/Header';
import Productos from './Componentes/Productos';
import Manualidades from './Componentes/Manualidades';
import MedicionTijeras from './Componentes/MedicionTijeras';  
import Arte from './Componentes/Arte'; 
import Footer from './Componentes/Footer';
import Login from './Componentes/Login';
import Carrito from './Componentes/Carrito';
import Registro from './Componentes/Registro';
import Carousel from './Componentes/Carousel';   
import Banner from './Componentes/Banner';
import Carousel2 from './Componentes/Carousel2'; 
import BannerOferta from './Componentes/BannerOferta';
import Colegios from './Componentes/Colegios';
import ProvedorCartContext from './Contextos/ProvedorCartContext';
import ProfileDetails from './Componentes/ProfileDetails';
import About from './Componentes/About';
import PreguntaF from './Componentes/PregutasF';
import ReturnPolicy from './Componentes/ReturnPolicy';
import Terms from './Componentes/Terms';
import PoliticaPrivacidad from './Componentes/PoliticaPriv';
import AdminDashboard from './Componentes/AdminDashboard';
import Ofertas from './Componentes/Ofertas';
import Navegacion2 from './Componentes/Navegacion2';
import Navegacion from './Componentes/Navegacion';

function App() {
  const [misProductos, setMisProductos] = React.useState([]);

  const agregarAlCarrito = (producto) => {
    setMisProductos([...misProductos, producto]);
    return <Navigate to="/carrito" />;
  };

  return (
    <ProvedorCartContext>
    <Router>
      <div>
        <Header />

        <main>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/" element={<Inicio agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/productos" element={<Productos agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/Manualidades" element={<Manualidades agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/MedicionTijeras" element={<MedicionTijeras agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/Arte" element={<Arte agregarAlCarrito={agregarAlCarrito} />} />
            <Route path="/carrito" element={<Carrito misProductos={misProductos} />} />
            <Route path="/About" element={<About />} /> 
            <Route path='/PreguntaF' element={<PreguntaF/>} />
            <Route path='/ReturnPolicy' element={<ReturnPolicy/>} />
            <Route path='/Terms' element={<Terms/>} />
            <Route path='/PoliticaPriv' element={<PoliticaPrivacidad/>} />
            <Route path="/perfil" element={<ProfileDetails />} />
            <Route path="/admin" element={<AdminDashboard />} />
            {/* Agregar más rutas según sea necesario */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </ProvedorCartContext>
  );
}

const Inicio = () => {
  return (
    <>
      <Navegacion2 />
      <br/>
      <Banner /> 
      <br />
      <Carousel /> 
      <br/>
      <BannerOferta /> 
      <br/>
      <Carousel2 /> 
      <br/>
      <hr />
      <Colegios/> 
      <br />
    </>
  );
};

export default App;
