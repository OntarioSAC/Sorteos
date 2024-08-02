import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import '../App.css'; // Asegúrate de que la ruta es correcta
import comillasTestimonio from '../assets/img/comillasTestimonio.png'; // Ajusta la ruta según tu estructura de carpetas
import testimonialPeople from '../assets/img/testimonialPeople.png'; // Añade la ruta correcta de la imagen
import playButton from '../assets/icons/playButton.svg'; // Añade la ruta correcta de la imagen

import patronBG from '../assets/img/patronBG.png';

const testimonialsData = [
    {
        quote: "¡Gracias a Ontario, finalmente tenemos nuestro propio pedacito de paraíso en la playa! No podríamos estar más emocionados por comenzar esta nueva aventura juntos. ¡Ontario hizo que todo fuera tan fácil y emocionante!",
        author: [{ firstName: "HILDA", lastName: "MEDINA" }, { firstName: "JESÚS", lastName: "TEJADA" }],
        project: "PROYECTO:",
        projectBold: "SANTORINI",
        image: testimonialPeople,
    },
    {
        quote: "¡Gracias a Ontario, finalmente tenemos nuestro propio pedacito de paraíso en la playa! No podríamos estar más emocionados por comenzar esta nueva aventura juntos. ¡Ontario hizo que todo fuera tan fácil y emocionante!",
        author: [{ firstName: "HILDA", lastName: "MEDINA" }, { firstName: "JESÚS", lastName: "TEJADA" }],
        project: "PROYECTO:",
        projectBold: "SANTORINI",
        image: testimonialPeople,
    },
    {
        quote: "¡Gracias a Ontario, finalmente tenemos nuestro propio pedacito de paraíso en la playa! No podríamos estar más emocionados por comenzar esta nueva aventura juntos. ¡Ontario hizo que todo fuera tan fácil y emocionante!",
        author: [{ firstName: "HILDA", lastName: "MEDINA" }, { firstName: "JESÚS", lastName: "TEJADA" }],
        project: "PROYECTO:",
        projectBold: "SANTORINI",
        image: testimonialPeople,
    },
];

const Testimonials = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 900);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const styles = {
        testimonialsSection: {
            textAlign: 'center',
            padding: isMobile ? '50px 0px' : '100px 160px',
            backgroundColor: '#f8f8f8',
            position: 'relative',
            overflow: 'hidden',
            backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1.2), rgba(255, 255, 255, 0.6)), url(${patronBG})`,
            backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
            backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
            backgroundPosition: 'center', // Centra la imagen
        },
        title: {
            fontSize: isMobile ? '1.5em' : '2em',
            fontWeight: '800',
            color: '#2a2a2a',
            marginBottom: '20px',
        },
        highlight: {
            color: '#a3cd39',
        },
        subtitle: {
            fontSize: isMobile ? '1em' : '1.2em',
            color: '#2a2a2a',
            marginTop: '10px',
            marginBottom: isMobile ? '40px' : '60px',
        },
        question: {
            fontWeight: '800',
            color: '#2a2a2a',
            marginTop: '5px',
        },
        testimonialsGrid: {
            display: 'flex',
            gap: '100px',
            justifyContent: 'center',
            marginTop: '20px',
            flexWrap: 'nowrap',
        },
        testimonialCard: {
            background: '#ffffff',
            borderRadius: '10px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            flex: isMobile ? '0 0 220px' : '0 0 360px',
            width: isMobile ? '220px' : '360px',
            padding: isMobile ? '10px' : '30px',
            textAlign: 'left',
            position: 'relative',
            boxSizing: 'border-box',
            justifyContent: 'center',
            alignItems:'center',
        },
        quoteIconContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '20px',
            position: 'absolute',
        },
        quoteBackground: {
            backgroundColor: '#273243',
            borderTopLeftRadius: isMobile ? '10px' : '20px',
            borderBottomRightRadius: isMobile ? '10px' : '20px',
            padding: isMobile ? '10px' : '20px',
            display: 'inline-flex',
            marginTop: isMobile ? '-10px' : '-30px',
        },
        quoteIcon: {
            width: isMobile ? '20px' : '40px',
            height: isMobile ? '20px' : '40px',
        },
        quote: {
            fontSize: isMobile ? '0.6em' : '0.9em',
            color: '#2a2a2a',
            margin: isMobile ? '40px 0 10px' : '60px 0 20px',
        },
        authorInfo: {
            display: 'flex',
            alignItems: 'center',
            marginTop: '20px',
        },
        authorImage: {
            width: isMobile ? '51px' : '82.1px',
            height: isMobile ? '50px' : '79.44px',
            borderRadius: '50%',
            marginRight: '10px',
        },
        author: {
            fontSize: isMobile ? '0.6em' : '0.9em',
            color: '#2a2a2a',
            marginBottom: '0px',
        },
        authorBold: {
            fontWeight: 'bold',
            color: '#2a2a2a',
        },
        project: {
            fontSize: isMobile ? '0.5em' : '0.8em',
            color: '#a3cd39',
            marginBottom: '0px',
            marginTop: '5px',
        },
        projectBold: {
            fontSize: '0.8em',
            fontWeight: 'bold',
            color: '#a3cd39',
        },
        playButton: {
            position: 'absolute',
            bottom: isMobile ? '10px' : '20px',
            right: isMobile ? '20px' : '30px',
            width: isMobile ? '20px' : '30px',
            height: isMobile ? '20px' : '30px',
        },
    };

    const mobileSwiperContainerStyles = {
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        left: '0',
        right: '0',
        bottom: '60px',
        overflow: 'hidden',
    };

    const swiperStyles = {
        justifyContent: 'center',
        alignItems: 'center',
    };

    return (
        <section style={styles.testimonialsSection}>
            <div style={{ width: '100%', height: '100%' }}>
            <h2 style={styles.title}>
                TESTIMONIOS <span style={styles.highlight}>QUE INSPIRAN</span>
            </h2>
            <p style={styles.subtitle}>
                Nuestros clientes comparten sus sueños hechos realidad en Ontario. <br />
                <span style={styles.question}>¿ESTÁS LISTO PARA EL TUYO?</span>
            </p>
            </div>
            <div className={`testimonials-grid ${isMobile ? 'mobile-swiper-container' : ''}`} style={isMobile ? mobileSwiperContainerStyles : {}}>
                {isMobile ? (
                    <div style={{ width: '100%', height: '100%' }}>
                        <Swiper
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={2}
                            initialSlide={2}
                            loopedSlides={2}
                            loop={true}
                            spaceBetween={40}
                            style={swiperStyles}
                        >
                            {testimonialsData.map((testimonial, index) => (
                                <SwiperSlide key={index} style={{ display:'flex', justifyContent: 'center' }}>
                                    <div style={styles.testimonialCard}>
                                        <div style={styles.quoteIconContainer}>
                                            <div style={styles.quoteBackground}>
                                                <img src={comillasTestimonio} alt="Quote Icon" style={styles.quoteIcon} />
                                            </div>
                                        </div>
                                        <p style={styles.quote}>{testimonial.quote}</p>
                                        <div style={styles.authorInfo}>
                                            <img src={testimonial.image} alt={testimonial.author.map(a => a.firstName + ' ' + a.lastName).join(' y ')} style={styles.authorImage} />
                                            <div>
                                                {testimonial.author.map((a, i) => (
                                                    <p key={i} style={styles.author}>
                                                        {a.firstName}
                                                        <span style={styles.authorBold}>{' '}{a.lastName}</span>
                                                    </p>
                                                ))}
                                                <p style={styles.project}>{testimonial.project}</p>
                                                <p style={styles.projectBold}>{testimonial.projectBold}</p>
                                            </div>
                                        </div>
                                        <img src={playButton} alt="Play Button" style={styles.playButton} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                ) : (
                    <div style={styles.testimonialsGrid}>
                        {testimonialsData.map((testimonial, index) => (
                            <div key={index} className="testimonial-card" style={styles.testimonialCard}>
                                <div style={styles.quoteIconContainer}>
                                    <div style={styles.quoteBackground}>
                                        <img src={comillasTestimonio} alt="Quote Icon" style={styles.quoteIcon} />
                                    </div>
                                </div>
                                <p style={styles.quote}>{testimonial.quote}</p>
                                <div style={styles.authorInfo}>
                                    <img src={testimonial.image} alt={testimonial.author.map(a => a.firstName + ' ' + a.lastName).join(' y ')} style={styles.authorImage} />
                                    <div>
                                        {testimonial.author.map((a, i) => (
                                            <p key={i} style={styles.author}>
                                                {a.firstName}
                                                <span style={styles.authorBold}>{' '}{a.lastName}</span>
                                            </p>
                                        ))}
                                        <p style={styles.project}>{testimonial.project}</p>
                                        <p style={styles.projectBold}>{testimonial.projectBold}</p>
                                    </div>
                                </div>
                                <img src={playButton} alt="Play Button" style={styles.playButton} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
};

export default Testimonials;
