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
            <h2>Explora y elige, todo a un solo clic</h2>
            <Slider {...settings}>
                <div className="carousel-item">
                    <img src="Cuaderno.png" alt="Cuaderno" />
                    <h3>Cuaderno</h3>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="Boligrafo.jpeg" alt="Bolígrafo" />
                    <h3>Bolígrafo</h3>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="Libreta.jpeg" alt="Libreta" />
                    <h3>Libreta</h3>
                    <button>Clic Aquí</button>
                </div>
                <div className="carousel-item">
                    <img src="Resaltador.jpeg" alt="Resaltadores" />
                    <h3>Resaltadores</h3>
                    <button>Clic Aquí</button>
                </div>
            </Slider>
        </div>
    );
};

export default Carrusel;
