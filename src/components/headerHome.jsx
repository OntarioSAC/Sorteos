import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Santorini from '../assets/img/slideSantorini.png';
import Zafiro from '../assets/img/slideZafiro.jpg';
import Piamonte from '../assets/img/slidePiamonte.jpg';
import SantoriniResponsive from '../assets/img/portadaMobileSantorini.png';
import ZafiroResponsive from '../assets/img/portadaMobileZafiro.png';
import PiamonteResponsive from '../assets/img/portadaMobilePrado.png';
import CardHeader from './cardHeader';



function Header() {
    const calculateMargin = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1700) {
            return '90rem';
        } else if (screenWidth >= 900) {
            return `${15 + (screenWidth - 900) * 0.073}rem`;
        } else if (screenWidth <= 600) {
            return `${8 - (500 - screenWidth) * 0.035}rem`;
        } else {
            return `${17 + (screenWidth - 900) * 0.03}rem`;
        }
    };

    const calculateBottomOffset = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth >= 1600) {
            return 150;
        } else if (screenWidth >= 1200) {
            return 110;
        } else if (screenWidth >= 901) {
            return 110;
        } else if (screenWidth <= 900) {
            return 90;
        }
    };

    const [marginLeft, setMarginLeft] = useState(calculateMargin());
    const [bottomOffset, setBottomOffset] = useState(calculateBottomOffset());
    const [currentSlide, setCurrentSlide] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setMarginLeft(calculateMargin());
            setBottomOffset(calculateBottomOffset());
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        setMarginLeft(calculateMargin());
        setBottomOffset(calculateBottomOffset());
        setWindowWidth(window.innerWidth);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const getImageSrc = (defaultSrc, responsiveSrc) => {
        return windowWidth <= 900 ? responsiveSrc : defaultSrc;
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (newIndex) => setCurrentSlide(newIndex),
        appendDots: dots => (
            <div style={{ position: 'absolute', bottom: `${bottomOffset}px`, width: '100%' }}>
                <ul style={{ margin: '0', padding: '0', textAlign: 'center' }}>{dots}</ul>
            </div>
        ),
        customPaging: index => (
            <span
                className="dot"
                style={{
                    width: '17px',
                    height: '17px',
                    borderRadius: '50%',
                    backgroundColor: index === currentSlide ? '#9AC31C' : 'transparent',
                    margin: '0 5px',
                    cursor: 'pointer',
                    display: 'inline-block',
                    border: index === currentSlide ? '5px solid #9AC31C' : '5px solid #fff',
                }}
            ></span>
        ),
        afterChange: current => setCurrentSlide(current),
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    const headerStyle = {
        position: 'relative',
        width: '100%',
        height: '110vh',
        overflow: 'hidden',
        margin: 0,
        padding: 0,
    };

    const imageStyle = {
        width: '100%',
        height: '110vh',
        objectFit: 'cover', // Asegura que la imagen cubra todo el contenedor
    };

    const cardStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-67%)',
        padding: '10px',
        borderRadius: '5px',
        marginLeft: marginLeft,
    };

    return (
        <header className="header" style={headerStyle}>
            <Slider {...settings}>
                <div style={{ position: 'relative' }}>
                    <img src={getImageSrc(Santorini, SantoriniResponsive)} alt="Santorini" style={imageStyle} />
                    <div style={cardStyle}>
                        <CardHeader
                            title="MEJÍA"
                            cuotas="CUOTAS DESDE"
                            usdImage={require('../assets/img/USD239.png')}
                            lotes="LOTES DESDE 100 m2"
                            intereses="0% INTERESES"
                            buttonText="CONOCER PROYECTO"
                            buttonLink="https://example.com/project1"
                        />
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={getImageSrc(Zafiro, ZafiroResponsive)} alt="Zafiro" style={imageStyle} />
                    <div style={cardStyle}>
                        <CardHeader
                            title="PUNTA DE BOMBÓN"
                            titleFontSize="3.5rem"
                            cuotas="CUOTAS DESDE"
                            usdImage={require('../assets/img/USD229.png')}
                            lotes="LOTES DESDE 100 m2"
                            intereses="0% INTERESES"
                            buttonText="CONOCER PROYECTO"
                            buttonLink="https://example.com/project2"
                        />
                    </div>
                </div>
                <div style={{ position: 'relative' }}>
                    <img src={getImageSrc(Piamonte, PiamonteResponsive)} alt="Piamonte" style={imageStyle} />
                    <div style={cardStyle}>
                        <CardHeader
                            title="LA JOYA"
                            titleFontSize="4.5rem"
                            cuotas="CUOTAS DESDE"
                            usdImage={require('../assets/img/USD169.png')}
                            lotes="LOTES DESDE 100 m2"
                            intereses="0% INTERESES"
                            buttonText="CONOCER PROYECTO"
                            buttonLink="https://example.com/project3"
                        />
                    </div>
                </div>
            </Slider>
        </header>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, left: '10px', zIndex: 1 }}
            onClick={onClick}
        />
    );
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, right: '10px', zIndex: 1 }}
            onClick={onClick}
        />
    );
}

export default Header;
