import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom'; // Importar useLocation
import logo from '../assets/img/logoHorizontal.png';
import { ReactComponent as FlechaDropDownSVG } from '../assets/icons/flechaDropDown.svg';
import { ReactComponent as MenuSandwichSVG } from '../assets/icons/menuSandwich.svg';
import { ReactComponent as DepartamentoSVG } from '../assets/icons/departamentosIco.svg';
import { ReactComponent as NosotrosSVG } from '../assets/icons/nosotrosIco.svg';
import { ReactComponent as ReferidosSVG } from '../assets/icons/referidosIco.svg';
import { ReactComponent as ProyectosSVG } from '../assets/icons/proyectosIco.svg';
import '../App.css';

function Navbar() {
    const { t } = useTranslation();
    const location = useLocation(); // Usar useLocation para obtener la ruta actual
    const [selected, setSelected] = useState(null);
    const [terrenosSelected, setTerrenosSelected] = useState(false);
    const [responsiveMenuOpen, setResponsiveMenuOpen] = useState(false); // Estado para el menú responsivo
    const [isTransparent, setIsTransparent] = useState(true); // Estado para controlar si la barra de navegación es transparente

    const terrenosRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (terrenosRef.current && !terrenosRef.current.contains(event.target) && !event.target.classList.contains('dato1')) {
                setTerrenosSelected(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const [marginLeft, setMarginLeft] = useState('auto');

    // medidas especificas de pixeles en moviles
    useEffect(() => {
        const handleResize = () => {
          const screenWidth = window.innerWidth;
          setMarginLeft(
            screenWidth >= 360 && screenWidth < 500
              ? '44%'
              : screenWidth >= 500 && screenWidth <= 617
              ? '60%'
              : screenWidth >= 617 && screenWidth <= 720
              ? '70%'
              : screenWidth >= 721 && screenWidth <= 900
              ? '70%'
              : '5px'
          );
        };
    
        // Llamar a handleResize al inicio
        handleResize();
    
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
    }, []); // Ejecutar solo una vez al montar el componente

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            // Cambiar la clase del Navbar según la posición del scroll
            if (scrollPosition > 0 && isTransparent) {
                setIsTransparent(false);
            } else if (scrollPosition === 0 && !isTransparent) {
                setIsTransparent(true);
            }
        };

        // Suscribirse al evento de scroll
        window.addEventListener('scroll', handleScroll);

        // Limpiar el efecto al desmontar el componente
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isTransparent]); // Ejecutar el efecto cuando cambie isTransparent

    const handleNavLinkClick = (index) => {
        if (index === 1) {
            setTerrenosSelected(!terrenosSelected);
            // setMenuOpen(false);
        } else {
            setSelected(index);
            setTerrenosSelected(false);
            // setMenuOpen(false);
        }
    };

    const handleMenuButtonClick = () => {
        setResponsiveMenuOpen(prevMenuOpen => !prevMenuOpen);
    };

    // Condición para no aplicar la clase transparent en las rutas de form o participants
    const shouldApplyTransparent = isTransparent && !['/form', '/participants'].includes(location.pathname);

    return (
        // Cambio de color de fondo cuando el menú sandwich está abierto
        <nav className={`navbar ${shouldApplyTransparent ? 'transparent' : ''} ${responsiveMenuOpen ? 'openMenu' : ''}`}> 
            <div className="logoContainer">
                <img src={logo} alt="Logo" className="logoImage" />
            </div>
            <div className="menuButton" onClick={handleMenuButtonClick}>
                <MenuSandwichSVG />
            </div>
            <ul className={`navLinks ${responsiveMenuOpen ? 'openMenu' : ''}`} ref={menuRef}>
                <li
                    className={`nav-link ${selected === 0 ? 'selected' : ''}`}
                    onClick={() => handleNavLinkClick(0)}
                >
                    <NosotrosSVG className="responsive-icon" />
                    {t('nosotros')}
                </li>
                <li
                    ref={terrenosRef}
                    className={`nav-link ${terrenosSelected ? 'selected' : ''}`}
                    onClick={() => handleNavLinkClick(1)}
                >
                    <ProyectosSVG className="responsive-icon" />
                    {t('terrenos')}
                    <FlechaDropDownSVG
                        className={`dropdownIcon ${terrenosSelected ? 'selectedIcon' : ''} svg-clase `}
                        style={{ marginLeft }}
                    />
                    {terrenosSelected && (
                        <div className="datosContainer">
                            <div className="dato1">
                                <p className="pNavbar">Coral</p>
                            </div>
                            <div className="dato1">
                                <p className="pNavbar">Santorini</p>
                            </div>
                            <div className="dato1">
                                <p className="pNavbar">Mykonos</p>
                            </div>
                            <div className="dato1">
                                <p className="pNavbar">Zafiro</p>
                            </div>
                            <div className="dato1">
                                <p className="pNavbar">Punta Arena</p>
                            </div>
                            <div className="dato1">
                                <p className="pNavbar">Prado Piamonte</p>
                            </div>
                        </div>
                    )}
                </li>
                <li
                    className={`nav-link ${selected === 2 ? 'selected' : ''}`}
                    onClick={() => handleNavLinkClick(2)}
                >
                    <DepartamentoSVG className="responsive-icon" />
                    {t('departamentos')}
                </li>
                <li
                    className={`nav-link ${selected === 3 ? 'selected' : ''}`}
                    onClick={() => handleNavLinkClick(3)}
                    style={{ border: 'none' }}
                >
                    <ReferidosSVG className="responsive-icon" />
                    {t('referidos')}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
