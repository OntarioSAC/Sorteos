import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import CardPrado from '../assets/img/tarjetaPrado.png';
import CardZafiro from '../assets/img/tarjetaZafiro.png';
import CardSantorini from '../assets/img/tarjetaSantorini.png';
import CardPuntaArena from '../assets/img/TarjetaPuntaArena.png';
import CardMykonos from '../assets/img/tarjetaMykonos.png';
import CardCoral from '../assets/img/tarjetaCoral.png';

import LogoPrado from '../assets/img/pradoPiamonte.png';
import LogoZafiro from '../assets/img/zafiro.png';
import LogoSantorini from '../assets/img/santorini.png';
import LogoPuntaArena from '../assets/img/puntaArena.png';
import LogoMykonos from '../assets/img/mykonos.png';
import LogoCoral from '../assets/img/coral.png';
import { ReactComponent as MetrajeSVG } from '../assets/icons/metraje.svg';
import { ReactComponent as UbicacionSVG } from '../assets/icons/ubicacion.svg';

import patronBG from '../assets/img/patronBG.png';

// Array de proyectos posible cambio para bda
const projects = [
  {
    name: 'PRADO PIAMONTE',
    image: CardPrado,
    logo: LogoPrado,
    location: 'La Joya, Arequipa',
    size: '300 m2',
    priceUSD: '229',
    priceSoles: '899',
    category: 'PREVENTA'
  },
  {
    name: 'ZAFIRO',
    image: CardZafiro,
    logo: LogoZafiro,
    location: 'La Punta, Arequipa',
    size: '110 m2',
    priceUSD: '169',
    priceSoles: '649',
    category: 'PREVENTA'
  },
  {
    name: 'SANTORINI',
    image: CardSantorini,
    logo: LogoSantorini,
    location: 'Mejía, Arequipa',
    size: '100 m2',
    priceUSD: '239',
    priceSoles: '919',
    category: 'PREVENTA'
  },
  {
    name: 'Punta Arena',
    image: CardPuntaArena,
    logo: LogoPuntaArena,
    location: 'La Punta, Arequipa',
    size: '150 m2',
    priceUSD: '199',
    priceSoles: '749',
    category: 'En obras'
  },
  {
    name: 'Mykonos',
    image: CardMykonos,
    logo: LogoMykonos,
    location: 'Mejía, Arequipa',
    size: '200 m2',
    priceUSD: '219',
    priceSoles: '849',
    category: 'En obras'
  },
  {
    name: 'Coral',
    image: CardCoral,
    logo: LogoCoral,
    location: 'La Punta, Arequipa',
    size: '120 m2',
    priceUSD: '179',
    priceSoles: '679',
    category: 'En obras'
  },
];

//Estilos de proyectos
const styles = {
  //contenedor padre del componente
  projectHome: {
    textAlign: 'center',
    padding: '100px 20px',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.4)), url(${patronBG})`,
    backgroundSize: 'cover', // Ajusta la imagen al tamaño del contenedor
    backgroundRepeat: 'no-repeat', // Evita que la imagen se repita
    backgroundPosition: 'center center', // Centra la imagen
  },

  //cabecera del componente contiene titulo como botones
  headerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    marginBottom: '20px',
  },

  //contenedor del titulo
  titleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  title: {
    fontWeight: '500',
    color: '#273243'
  },
  subtitle: {
    marginLeft: '0',
    textAlign: 'left',
    fontWeight: '400',
    fontSize: '1.2rem',
    color: '#273243'
  },
  //contenedor de botones
  categoryButtons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryButton: {
    margin: '0 10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: '#273243',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 5px',
    fontWeight: '900',
    fontSize: '16px'
  },
  activeCategoryButton: {
    backgroundColor: '#273243',
    color: '#ADD53D',
  },
  //contenedor de cartas donde se muestran los proyectos
  projectCard: {
    position: 'relative',
    margin: '20px',
    overflow: 'hidden',
    borderRadius: '20px',
    display: 'inline-block',
    minWidth: '200px',
    minHeight: '250px',
    boxShadow: '0 9px 8px rgba(0, 0, 0, 0.5)', // Sombra añadida
  },
  //Cartas de proyectos
  projectCardMobile: {
    position: 'relative',
    margin: '20px',
    overflow: 'hidden',
    borderRadius: '20px',
    display: 'inline-block',
    height: '100%',
    minWidth: '160px',
    minHeight: 'auto',
  },
  projectImage: (windowWidth) => ({
    display: 'block',
    width: '100%',
    height: windowWidth < 800 ? '300px' : (windowWidth >= 800 && windowWidth <= 1150 ? 'auto' : '100%'),
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out', //
    transformOrigin: 'top left', //
    zIndex: '1',
  }),
  projectImageHover: {
    transform: 'scale(1.09)',
  },
  projectInfo: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    color: 'white',
    padding: '10px',
    boxSizing: 'border-box',
    paddingBottom: '0',
    zIndex: '2',
  },
  //contenedor blanco de proyectos donde se cuentra el logo del proyecto
  projectLogoContainer: {
    position: 'absolute',
    top: '0',
    left: '30px',
    width: '35%',
    height: '14%',
    padding: '10px',
    boxSizing: 'border-box',
    borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
    borderBottomLeftRadius: '20px',
    borderBottomRightRadius: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    zIndex: '3',
  },
  projectLogo: {
    maxWidth: '100%',
    maxHeight: '50px',
    height: 'auto',
    marginBottom: '10px',
  },

  //contenedor donde estan los detalles del proyecto
  projectDetails: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 20px',

  },
  projectLocationSize: {
    flex: '1',
    textAlign: 'left',
    background: 'linear-gradient(to bottom, #ADD53D, #5AA010)',
    width: '50%',
    height: '120px',
    boxSizing: 'border-box',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '30px',
    padding: '15px 20px',
    display: 'block'
  },
  projectPrices: {
    flex: '1',
    textAlign: 'right',
    background: '#273243',
    width: '50%',
    height: '120px',
    boxSizing: 'border-box',
    padding: '20px',
    borderTopLeftRadius: '30px',
    borderTopRightRadius: '20px',
  },
  projectText: {
    margin: 0,
    fontSize: '0.8rem',
    top: '-20px'

  },
  projectTextPrice: {
    margin: 0,
    fontSize: '0.7rem'
  },
  projectStrong: {
    fontWeight: 'bold',
  },
  iconStyle: {
    width: '20px',
    height: '25px',
    verticalAlign: 'middle',
    marginRight: '13px'
  },
  textWithIcon: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px'
  },
  textWithPrice: {
    display: 'flex',
    alignItems: 'center',
    width: '1px',
    textAlign: 'left',
  },
  //Swiper para el responsive
  mySwiper: {
    width: '100%',
    height: '100%',
    minWidth: '180px', // Tamaño mínimo para evitar que se encojan demasiado
  },

  //spans de tarjetas informativas

  spanUSD: {
    float: 'left',
    marginRight: '2px'
  },

  spanNumberUSD: {
    fontSize: '2.3rem',
    position: 'relative',
    top: '-20px',
    fontWeight: '900'
  },

  textNumberSoles:{
    position: 'relative',
    top: '-20px',
    fontSize: '0.9rem'
  }
};

const ProjectCard = ({ project, isMobile }) => {
  const [isResponsive, setIsResponsive] = useState(window.innerWidth >= 1425);
  const [isMiniMobile, setIsMiniMobile] = useState(window.innerWidth >= 850);
  const [isHovered, setIsHovered] = useState(false);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [location, city] = project.location.split(', ');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsResponsive(window.innerWidth >= 1425);
      setIsMiniMobile(window.innerWidth >= 850);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  //responsividad de los detalles del proyecto
  const projectDetailsResponsive = {
    ...styles.projectDetails,
    padding: isMiniMobile ? (isResponsive ? '0 20px' : '0 55px') : '0 10px'
  }

  const projectLocationSizeResponsive = {
    ...styles.projectLocationSize,
    display: isResponsive ? 'block' : 'none',
    // height: isResponsive ? '120px': '100px'
  };

  const projectPricesResponsive = {
    ...styles.projectPrices,
    background: isResponsive ? '#273243' : 'linear-gradient(to bottom, #ADD53D, #5AA010)',
    height: isResponsive ? '120px' : '100px',
    padding: isMiniMobile ? (isResponsive ? '20px' : '10px') : '5px',
    borderTopLeftRadius: isResponsive ? '30px' : '20px',
    borderTopRightRadius: isResponsive ? '20px' : '20px',
  }

  const textWithPriceResponsive = {
    ...styles.textWithPrice,
    width: isResponsive ? '1px' : '',
    display: isResponsive ? 'flex' : 'block',
    textAlign: isResponsive ? 'left' : 'center',
    color: isResponsive ? '#fff' : '#273243',
  }

  const projectTextPriceResponsive = {
    ...styles.projectTextPrice,
    fontSize: isResponsive ? '0.7rem' : '1rem',
    fontWeight: isResponsive ? 'none' : '400'
  }

  const spanUSDResponsive = {
    ...styles.spanUSD,
    float: isResponsive ? 'left' : '',
    fontSize: isResponsive ? '' : '1.5rem'
  }

  const spanNumberUSDResponsive = {
    ...styles.spanNumberUSD,
    top: isResponsive ? '-20px' : '',
    fontWeight: isResponsive ? '900' : '800',
    fontSize: isResponsive ? '2.3rem' : '1.5rem'
  }

  const textNumberSolesResponsive = {
    ...styles.textNumberSoles,
    top: isResponsive ? '-20px' : '-7spx',
    fontSize: isResponsive ? '0.9rem' : '1rem',
    fontWeight: isResponsive ? '' : '100'
  }

  const newStyleResponsive = {
    containerText: {
      textAlign: isResponsive ? '' : 'center'
    }
  }
  return (
    <section style={isMobile ? styles.projectCardMobile : styles.projectCard}>
      <div style={styles.projectLogoContainer}>
        <img src={project.logo} alt={project.name} style={styles.projectLogo} />
      </div>
      <img
        src={project.image}
        alt={project.name}
        style={{
          ...styles.projectImage(windowWidth),
          ...(isHovered && styles.projectImageHover),
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <div style={styles.projectInfo}>
        <div style={projectDetailsResponsive}>
          <div style={projectLocationSizeResponsive}>
            <div style={styles.textWithIcon}>
              <MetrajeSVG style={styles.iconStyle} />
              <p style={styles.projectText}>Desde <br /> <strong style={styles.projectStrong}>{project.size}</strong></p>
            </div>
            <div style={styles.textWithIcon}>
              <UbicacionSVG style={styles.iconStyle} />
              <p style={styles.projectText}>{location}<br />{city}</p>
            </div>
          </div>
          <div style={projectPricesResponsive}>
            <div style={textWithPriceResponsive}>
              <p style={projectTextPriceResponsive}>Cuotas desde</p>
            </div>
            <div style={newStyleResponsive.containerText}>
              <strong style={styles.projectStrong}>
                <span style={spanUSDResponsive}>US$</span>
                <span style={spanNumberUSDResponsive}>{project.priceUSD}</span>
              </strong>
            </div>
            <div style={newStyleResponsive.containerText}>
              <p style={{ ...styles.projectText, ...textNumberSolesResponsive}}>ó <strong style={styles.projectStrong}>S/ {project.priceSoles}</strong></p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const ProjectHome = () => {
  const [selectedCategory, setSelectedCategory] = useState('PREVENTA');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFlex, setIsFlex] = useState(window.innerWidth >= 1190);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1150);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setIsFlex(window.innerWidth >= 1190);
      setIsMobile(window.innerWidth < 1150);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChangeCategory = (category) => {
    setSelectedCategory(category);
    setSelectedLocation(''); // Limpiar la selección de ubicación al cambiar de categoría
  };

  const handleChangeLocation = (location) => {
    setSelectedLocation(location);
    setSelectedCategory(''); // Limpiar la selección de categoría al cambiar de ubicación
  };

  const filteredProjects = projects.filter(project => {
    if (selectedLocation) {
      return project.location === selectedLocation;
    } else if (selectedCategory) {
      return project.category === selectedCategory;
    } else {
      return true;
    }
  });

  const headerContainerResponsive = {
    ...styles.headerContainer,
    display: isFlex ? 'flex' : 'block',
  };

  const titleContainerResponsive = {
    ...styles.titleContainer,
    display: isFlex ? 'flex' : 'block'
  };

  const subtitleResponsive = {
    ...styles.subtitle,
    textAlign: isFlex ? 'left' : '',
    marginBottom: isFlex ? '' : '30px'
  };

  const getSlidesPerView = () => {
    if (isMobile) {
      if (selectedLocation === 'La Joya, Arequipa') {
        return 1;
      } else if (selectedLocation === 'Mejía, Arequipa') {
        return 2;
      } else {
        return 2;
      }
    } else {

      if (selectedLocation === 'La Joya, Arequipa') {
        return 1;
      } else if (selectedLocation === 'Mejía, Arequipa') {
        return 2;
      }

      else {
        return 3;

      }

    }
  };

  const getSwiperWidth = () => {
    if (isMobile) {
      
      if (windowWidth < 1150 && windowWidth > 800 && selectedLocation === 'Mejía, Arequipa') {
        return '75%';
      } else if (windowWidth < 1150 && windowWidth > 800 && selectedLocation === 'La Joya, Arequipa') {
        return '37%';
      } else if (selectedLocation === 'La Joya, Arequipa') {
          return '57%';
      } else if (selectedLocation === 'Mejía, Arequipa') {
        return '100%';
      } else if (windowWidth < 1150 && windowWidth > 800) {
        return '75%';
      } else {
        return '100%';
      }
    } 
    
    else {
      if (selectedLocation === 'La Joya, Arequipa') {
        return '28.5%';
      } else if (selectedLocation === 'Mejía, Arequipa') {
        return '57%';
      }

      else {
        return '85%';
      }
    }
  };

  const swiperContainerStyle = {
    width: getSwiperWidth(),
    height: '100%',
    // display: 'flex'
  };

  const getCategoryButtonStyle = () => {
    if (windowWidth < 800) {
      return { ...styles.categoryButton, fontSize: '10px' };
    } else if (windowWidth >= 800 && windowWidth <= 1150) {
      return { ...styles.categoryButton, fontSize: '14px' };
    } else {
      return styles.categoryButton;
    }
  };

  return (
    <div style={styles.projectHome}>
      <div style={headerContainerResponsive}>
        <div style={titleContainerResponsive}>
          <h2 style={styles.title}>
            NUESTROS <span style={{ fontWeight: '800' }}>PROYECTOS</span>
          </h2>
          <h3 style={subtitleResponsive}>Segunda Vivienda</h3>
        </div>
        <div style={styles.categoryButtons}>
          <button
            style={{
              ...getCategoryButtonStyle(),
              ...(selectedCategory === 'PREVENTA' && styles.activeCategoryButton)
            }}
            onClick={() => handleChangeCategory('PREVENTA')}
          >
            PREVENTA
          </button>
          <button
            style={{
              ...getCategoryButtonStyle(),
              ...(selectedLocation === 'Mejía, Arequipa' && styles.activeCategoryButton)
            }}
            onClick={() => handleChangeLocation('Mejía, Arequipa')}
          >
            MEJÍA
          </button>
          <button
            style={{

              ...getCategoryButtonStyle(),
              ...(selectedLocation === 'La Punta, Arequipa' && styles.activeCategoryButton)
            }}
            onClick={() => handleChangeLocation('La Punta, Arequipa')}
          >
            LA PUNTA  DE BOMBON
          </button>
          <button
            style={{
              ...getCategoryButtonStyle(),
              ...(selectedLocation === 'La Joya, Arequipa' && styles.activeCategoryButton)
            }}
            onClick={() => handleChangeLocation('La Joya, Arequipa')}
          >
            LA JOYA
          </button>
        </div>
      </div>
      <div style={swiperContainerStyle}>
        <Swiper
          key={`${selectedCategory}-${selectedLocation}-${windowWidth}`} // Key dinámico para forzar el reinicio
          slidesPerView={getSlidesPerView()}
          spaceBetween={0} // Espacio entre las slides
          loop={true}
          // loopedSlides={3}
          autoplay={{
            delay: 2000, // 2000ms = 2s
            disableOnInteraction: false,
          }}
          speed={800} // Adjust the transition speed if necessary
          // loopFillGroupWithBlank={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {filteredProjects.map((project, index) => (
            <SwiperSlide key={index} style={{ justifyContent: 'center', minWidth: '150px', width: '100%' }}>
              <ProjectCard project={project} isMobile={isMobile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectHome;
