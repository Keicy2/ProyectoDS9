import React, { useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './css.css'; 

const Carrusel = () => {
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

    /*useEffect(() =>{
        let intervar;

        const StartAutoplay = () =>{
            clearInterval(Interval)
        }
    }*/
    return (
        <div style={{ padding: '40px' }}>
            <h2 className='titulocarrusel'>Explora y elige, todo a un solo clic</h2>
            <br />
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="\utiles\Goma en Barra Rosado Pastel 10g 0.60.png" alt="Goma rosa" />
                    <h3>Goma en barra</h3>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="\utiles\Lápices de Colores Caja 24 Piezas  4.95.png" alt="lapiz de color" />
                    <h3>Lápices de colores</h3>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="\utiles\Libreta Acrylic Pad 10 Hojas 9 x12 5.95.png" alt="Libreta" />
                    <h3>Libreta Acrylic</h3>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="\utiles\Piensa Ciencias Naturales 6 23.00.png" alt="libro" />
                    <h3>Piensa Ciensas Naturales 6</h3>
                    <button>Clic Aquí</button>
                </div>
            </Slider>
        </div>
    );
};

export default Carrusel;
