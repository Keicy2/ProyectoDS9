import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Estilos de la biblioteca
import './css.css';

const Banner = () => {
  return (
    <div className="advertisement-banner">
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        interval={3000}
      >
        <div className="advertisement-content">
          <img src="banner1.png" alt="Promoción 1" />
          
        </div>
        <div className="advertisement-content">
          <img src="banner2.png" alt="Promoción 2" />
        </div>
        <div className="advertisement-content">
          <img src="banner.png" alt="Promoción 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;

