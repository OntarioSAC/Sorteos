import React, { useState, useEffect } from 'react';

const styles = {
  card: {
    backgroundColor: '#26374A',
    color: 'white',
    padding: '20px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    margin: '10px',
    paddingTop: '0',
    paddingBottom: '6px',
    boxShadow: '0 8px 10px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2)', // Aplica dos sombras, una más pronunciada en la parte superior
    flex: '1 1 300px', // Añadir flex-grow, flex-shrink y flex-basis para hacer la tarjeta flexible
  },
  icon: {
    width: '55px',
    height: '55px', // Ajusta el tamaño del ícono
    marginRight: '40px',
    fill: 'white', // Cambia el color del icono a blanco
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  number: {
    fontSize: '3.4rem',
    fontWeight: '900',
    color: '#A8D443',
    margin: '0',
    animation: 'numberIncrement 0.5s ease-in-out', // Aplica la animación CSS al número
  },
  description: {
    fontSize: '1.2rem',
  },
  highlighted: {
    fontSize: '1.2rem',
    fontWeight: '800',
    color: '#A8D443',
  },
  responsiveCard: {
    margin: '0', // Reduce el margen entre las cartas en vista responsive
    boxShadow: '', // Aplica dos sombras, una más pronunciada en la parte superior
    display: 'flex',
    width: '100%',
    maxWidth: '100%', // Limita el ancho máximo en vista responsive
    flexDirection: 'column',
    alignItems: 'center',
  },
  responsiveIcon: {
    display: 'none', // Oculta la imagen en vista responsive
  },
  responsiveContent: {
    alignItems: 'center',
    textAlign: 'center',
  },
  responsiveNumber: {
    fontSize: '1.8rem', // Ajusta el tamaño del número en vista responsive
  },
  responsiveDescription: {
    fontSize: '0.8rem', // Ajusta el tamaño de la descripción en vista responsive
  },
  responsiveHighlighted: {
    fontSize: '0.6rem', // Ajusta el tamaño del texto resaltado en vista responsive
  },
  responsivePlus: {
    fontSize: '1.3rem', // Ajusta el tamaño del símbolo "+" en vista responsive
    marginLeft: '5px', // Reduce el margen izquierdo en vista responsive
  },
};

const CardBlackHeader = ({ icon, number, description, highlightedText }) => {
  const [displayedNumber, setDisplayedNumber] = useState(0);

  useEffect(() => {
    const targetNumber = parseInt(number, 10);
    let currentNumber = 0;
    const animationSpeed = 100; // Velocidad de la animación en milisegundos
    const increaseAmount = Math.ceil(targetNumber / (animationSpeed / 1000)); // Cantidad para aumentar en cada paso de la animación

    const intervalId = setInterval(() => {
      currentNumber += increaseAmount;
      if (currentNumber >= targetNumber) {
        currentNumber = targetNumber;
        clearInterval(intervalId);
      }
      setDisplayedNumber(currentNumber);
    }, 100);

    return () => clearInterval(intervalId);
  }, [number]);

  return (
    <div style={{ ...styles.card, ...(window.innerWidth < 1000 ? styles.responsiveCard : {}) }}>
      <img src={icon} alt="icon" style={{ ...styles.icon, ...(window.innerWidth < 1000 ? styles.responsiveIcon : {}) }} />
      <div style={{ ...styles.content, ...(window.innerWidth < 1000 ? styles.responsiveContent : {}) }}>
        <p style={{ ...styles.number, ...(window.innerWidth < 1000 ? styles.responsiveNumber : {}) }}>
          {displayedNumber}
          <span style={{ ...(window.innerWidth < 1000 ? styles.responsivePlus : {}) }}>+</span>
        </p>
        <div style={{ ...styles.description, ...(window.innerWidth < 1000 ? styles.responsiveDescription : {}) }}>
          {description} <br /> <span style={{ ...styles.highlighted, ...(window.innerWidth < 1000 ? styles.responsiveHighlighted : {}) }}>
            {highlightedText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBlackHeader;
