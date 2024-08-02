import React, { useState, useEffect } from 'react';
import About from '../assets/img/about.png';
import { ReactComponent as Iso9001 } from '../assets/icons/ISO9001.svg';
import { ReactComponent as Iso14001 } from '../assets/icons/ISO14001.svg';
import { ReactComponent as Premio2022 } from '../assets/icons/premioEmpresa2022.svg';
import { ReactComponent as Premio2023 } from '../assets/icons/premioEmpresa2023.svg';

import { ReactComponent as LineasAbout } from '../assets/icons/Líneas_fondo_web_A.svg';

import CardBlackHeader from '../components/cardBlackHome';
import TrayectoriaIcon from '../assets/icons/trayectoria.svg';
import SegundaViviendaIcon from '../assets/icons/segundaVivienda.svg';
import FamiliasFelicesIcon from '../assets/icons/familiasFelices.svg';

const AboutHome = () => {
 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [isResponsiveCards, setIsResponsiveCards] = useState(window.innerWidth < 1000);
    const [, setIsResponsiveContainer] = useState(window.innerWidth < 900);

    // Manejador para actualizar el ancho de la ventana
    const handleResize = () => {
        const width = window.innerWidth;
        // Actualizar el estado de isResponsiveCards
        setIsResponsiveCards(width < 1000);
        // Actualizar el estado de isResponsiveContainer
        setIsResponsiveContainer(width < 900);
        setWindowWidth(window.innerWidth);
    };

    // useEffect para agregar el listener del evento resize
    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    useEffect(() => {
        // Agregar el event listener para el resize
        window.addEventListener('resize', handleResize);
    
        // Llamar handleResize para establecer el estado inicial correctamente
        handleResize();
    
        // Función de limpieza para eliminar el event listener al desmontar el componente
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);
    const styles = {
        section: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: '50px',
            paddingLeft: '5%',
            background: 'linear-gradient(to left, #ADD53D, #5AA010)',
            color: '#fff',
            height: '800px',
        },

        backgroundIcon: {
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            display: windowWidth <= 900 ? 'none' : '',
        },

        content: {
            width: windowWidth <= 900 ? '90%' : windowWidth <= 1200 ? '50%' : '40%',
            marginLeft: windowWidth <= 900 ? '10%' : '15%',

        },
        contentText: {
            width: windowWidth <= 1300 ? '90%' : '80%',
            paddingRight: '20px',

        },

        hr: {
            border: 'none',
            height: '3px',
            backgroundColor: '#ADD53D',
            margin: '20px 0', // Margen superior e inferior para separar los elementos
        },

        imageContainer: {
            position: 'absolute',
            bottom: '0',
            right: windowWidth > 570 && windowWidth < 900 ? '5%' : '17%', // Mueve la imagen a la derecha cuando el ancho de la ventana es mayor a 450px y menor que 900px
            width: '30%',
            textAlign: 'center',
        },
        image: {
            width: '100%', //para pantallas de 900px baja a 90%
            height: 'auto',
            minWidth: '180px',
            minHeight: '300px',
            maxHeight: '700px',
            borderRadius: '8px',
            display: windowWidth < 570 ? 'none' : '',
        },
        about: {
            marginBottom: '10px',
            color: '#273243',
            textAlign: windowWidth < 570 ? 'center' : 'left',
            fontStyle: 'italic',
            fontWeight: '500',
        },
        subtitle: {
            fontSize: '2rem',
            marginBottom: '8px',
            color: '#fff',
            textAlign: windowWidth < 570 ? 'center' : 'left',
        },
        description: {
            fontSize: '1rem',
            lineHeight: '1.5',
            color: '#fff',
            textAlign: 'justify', // Justificar texto
        },
        subTitleHighlightDark: {
            fontSize: '2rem',
            color: '#273243',
            fontWeight: '800',
        },
        subTitleHighlight: {
            fontSize: '2rem',
            color: '#fff',
            fontWeight: '800',
        },
        highlight: {
            color: '#fff',
            fontWeight: '800',
        },
        certs: {
            marginTop: '20px',
        },
        certImages: {
            display: 'flex',
        },
        certImage: {
            width: '130px',
            marginRight: '20px',
        },

        cardBlackContainer: {
            position: 'absolute',
            top: '-1%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Centra el contenedor horizontal y verticalmente
            width: '55%', 
            zIndex: 2,
            display: 'flex',
            borderRadius: '8px',
            justifyContent: 'center',
          },

        responsiveCardContainer: {
            width: '80%',
            gap: '0',
            backgroundColor: '#26374A',
            alignItems: 'center',
            justifyContent: 'center',
          },

    };

    return (
        <section id="about-home" style={styles.section}>
            <div style={{ ...styles.cardBlackContainer, ...(isResponsiveCards ? styles.responsiveCardContainer : {}) }}>
                <CardBlackHeader
                    icon={TrayectoriaIcon}
                    number="7"
                    description="AÑOS DE"
                    highlightedText="TRAYECTORIA"
                />
                <CardBlackHeader
                    icon={SegundaViviendaIcon}
                    number="6"
                    description="PROYECTOS"
                    highlightedText="2DA&nbsp;&nbsp;VIVIENDA"
                />
                <CardBlackHeader
                    icon={FamiliasFelicesIcon}
                    number="800"
                    description="FAMILIAS"
                    highlightedText="FELICES"
                />

            </div>
            <LineasAbout style={styles.backgroundIcon} />
            <div style={styles.content}>
                <div style={styles.contentText}>
                    <p style={styles.about}>Acerca de nosotros</p>
                    <p style={styles.subtitle}>
                        ¡TU <span style={styles.subTitleHighlight}>SEGUNDO HOGAR</span> EN <span style={styles.subTitleHighlightDark}>ONTARIO!</span>
                    </p>
                    <p style={styles.description}>
                        Somos una empresa inmobiliaria comprometida con la <span style={styles.highlight}>calidad</span> y la <span style={styles.highlight}>rentabilidad</span> en nuestros proyectos a nivel nacional. Te ofrecemos la oportunidad de disfrutar de un hogar vacacional en entornos naturales excepcionales, donde tu familia podrá <span style={styles.highlight}>vivir momentos inolvidables</span>.
                    </p>
                    <hr style={styles.hr} />
                    <div style={styles.certs}>
                        <p style={styles.description}>
                            Reconocimiento por 2DO año consecutivo como una de las mejores empresas a nivel nacional.
                        </p>
                        <div style={styles.certImages}>
                            <Premio2022 style={styles.certImage} />
                            <Premio2023 style={styles.certImage} />
                        </div>
                    </div>

                    <div style={styles.certs}>
                        <p style={styles.description}>Doble certificación Internacional:</p>
                        <div style={styles.certImages}>
                            <Iso9001 style={styles.certImage} />
                            <Iso14001 style={styles.certImage} />
                        </div>
                    </div>
                </div>
            </div>
            <div style={styles.imageContainer}>
                <img src={About} alt="Sobre nosotros" style={styles.image} />
            </div>
        </section>
    );
};

export default AboutHome;
