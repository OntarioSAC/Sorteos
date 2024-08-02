import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ title, titleFontSize, cuotas, usdImage, lotes, intereses, buttonText, buttonLink }) => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 500);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 600);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const cardHeaderStyle = {
        padding: isSmallScreen ? '10px' : '20px',
        borderRadius: '10px',
        textAlign: 'center',
        width: isSmallScreen ? '250px' : '350px', // Ajusta el ancho según sea necesario
        margin: '0 auto', // Centra horizontalmente
    };

    const titleStyle = {
        fontSize: isSmallScreen ? '3rem' : titleFontSize || '5.5rem', // Usa la prop titleFontSize o el valor por defecto
        margin: '0',
        color: '#fff',
        fontWeight: '900',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Añadir sombra al texto
    };

    const cuotasStyle = {
        fontSize: isSmallScreen ? '1rem' : '1.3rem',
        margin: '0',
        fontWeight: '700',
        color: '#fff',
        fontStyle: 'italic', // Agregar cursiva al texto
    };

    const lotesStyle = {
        fontSize: isSmallScreen ? '0.8rem' : '1.2rem',
        padding: isSmallScreen ? '8px' : '4px',
        color: '#fff',
        fontStyle: 'italic', // Agregar cursiva al texto
        fontWeight: '700',
        margin: '0', // Quitar márgenes
    };

    const interesesStyle = {
        fontSize: isSmallScreen ? '0.7rem' : '1rem',
        margin: '0', // Quitar márgenes
        padding: isSmallScreen ? '7px 0' : '2px 0',
        color: '#333',
        fontWeight: 'bold',
    };

    const buttonStyle = {
        backgroundImage: 'linear-gradient(to bottom, #ADD53D, #5AA010)',
        color: '#fff',
        padding: isSmallScreen ? '8px 16px' : '10px 20px',
        borderRadius: '10px',
        textDecoration: 'none',
        fontWeight: 'bold',
        display: 'inline-block',
        marginTop: isSmallScreen ? '15px' : '25px',
        border: 'none',
        cursor: 'pointer',
    };

    const usdImageStyle = {
        width: isSmallScreen ? '240px' : 'auto', // Ajusta el tamaño de la imagen según sea necesario
    };

    const lotesDivStyle = {
        position: 'relative', // Establece la posición relativa para que el div de intereses pueda superponerse
        zIndex: '1', // Establece un índice z menor para que el div de intereses esté por encima del div de lotes
        width: isSmallScreen ? '70%' : '80%',
        margin: '0 auto',
        backgroundColor: '#273243',
        padding: '0', // Agregar padding si es necesario
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Añadir sombra
    };

    const interesDivStyle = {
        position: 'relative', // Establece la posición relativa para que pueda superponerse
        zIndex: '0', // Establece un índice z menor para que esté detrás del div de lotes
        width: isSmallScreen ? '40%' : '50%',
        margin: '0 auto',
        backgroundColor: '#fff',
        padding: '0', // Agregar padding si es necesario
        borderBottomLeftRadius: '8px', // Ajusta el valor según sea necesario
        borderBottomRightRadius: '8px', // Ajusta el valor según sea necesario
    };

    const combinedDivStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        alignItems: 'center',
        gap: '0', // Asegúrate de que no haya espacio entre los elementos
    };

    return (
        <div style={cardHeaderStyle}>
            <h1 style={titleStyle}>{title}</h1>
            <p style={cuotasStyle}>{cuotas}</p>
            <img src={usdImage} alt="Precio en dólares" style={usdImageStyle} /> {/* Usando la imagen para representar el precio */}
            <div style={combinedDivStyle}>
                <div style={lotesDivStyle}>
                    <p style={lotesStyle}>{lotes}</p>
                </div>
                <div style={interesDivStyle}>
                    <p style={interesesStyle}>{intereses}</p>
                </div>
            </div>
            <button onClick={() => window.location.href = buttonLink} style={buttonStyle}>{buttonText}</button>
        </div>
    );
};

CardHeader.propTypes = {
    title: PropTypes.string.isRequired,
    titleFontSize: PropTypes.string, // Nueva prop para el tamaño de la fuente del título
    cuotas: PropTypes.string.isRequired,
    usdImage: PropTypes.string.isRequired, // Cambiando a prop para recibir la ruta de la imagen
    lotes: PropTypes.string.isRequired,
    intereses: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
};

export default CardHeader;

