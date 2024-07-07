import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css.css'; 

const Carrusel2 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div style={{ padding: '40px' }}>
            <h2 className='titulocarrusel'>Productos recien llegados</h2>
            <br />
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="\utiles\Caballete de Madera para Pintar 18.00.png" alt="caballete" />
                    <h3>Caballete de Madera</h3>
                    <h4> B/. 18.00</h4>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="\utiles\Crayones Colors Kindness 24 Piezas 2.49.png" alt="crayones" />
                    <h3>Crayones Colors Kindness</h3>
                    <h4> B/. 2.49</h4>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="\utiles\Historia de Panamá 11 21.00.png" alt="Libro" />
                    <h3>Historia de Panamá 11</h3>
                    <h4> B/. 21.00</h4>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="\utiles\Paleta con Brochas Set 6 Piezas 2.95.png" alt="brochas" />
                    <h3>Paleta con Brochas</h3>
                    <h4> B/. 2.95</h4>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                <img src="\utiles\Sacapunta Goma Maped Loopy Trans 2.30.png" alt="sacapuntas" />
                    <h3>Sacapunta Goma Maped</h3>
                    <h4> B/. 2.30</h4>
                    <button>Clic Aquí</button>
                </div>
            </Slider>
        </div>
    );
};

export default Carrusel2;