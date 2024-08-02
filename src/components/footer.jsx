import React from 'react';
import '../App.css'; // Importa el archivo de estilos
import logo from '../assets/img/logoHorizontal.png'; // Importa el logo
import { ReactComponent as RomboIcon } from '../assets/icons/romboFooter.svg'; // Importa el ícono de rombo como componente
import { ReactComponent as FacebookIcon } from '../assets/icons/facebook.svg';
import { ReactComponent as InstagramIcon } from '../assets/icons/instagram.svg';
import { ReactComponent as TikTokIcon } from '../assets/icons/tikTok.svg';
import { ReactComponent as YouTubeIcon } from '../assets/icons/youtube.svg';
import { ReactComponent as LibroReclamacionesIcon } from '../assets/icons/libroReclamaciones.svg'; // Importa el ícono de libro de reclamaciones como componente

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-main-content">
        <div className="logo-container">
          <img className="logo" src={logo} alt="Ontario Logo" />
          <h3 className="contact-label">Contacta a un asesor:</h3>
          <div className="contact-form">
            <input type="email" placeholder="Correo electrónico" />
            <button> &gt; </button>
          </div>
        </div>
        <div className="footer-section about">
          <h2 className="section-title sobre-ontario-title">SOBRE ONTARIO</h2>
          <ul className="list">
            <li className="list-item"><RomboIcon className="rombo-icon" /><h3>Nosotros</h3></li>
            <li className="list-item"><RomboIcon className="rombo-icon" /><h3>Política de Privacidad</h3></li>
            <li className="list-item"><RomboIcon className="rombo-icon" /><h3>Términos y Condiciones</h3></li>
          </ul>
        </div>
        <div className="footer-section proyectos">
          <h2 className="section-title">PROYECTOS</h2>
          <ul className="list">
            <li className="list-item"><RomboIcon className="rombo-icon" /><h3>MEJÍA</h3></li>
            <li className="list-item small-item no-icon"><RomboIcon className="rombo-icon invisible-icon" /><h3>Santorini</h3></li>
            <li className="list-item small-item no-icon"><RomboIcon className="rombo-icon invisible-icon" /><h3>Mykonos</h3></li>
            <li className="list-item"><RomboIcon className="rombo-icon" /><h3>PUNTA DE BOMBÓN</h3></li>
            <li className="list-item small-item no-icon"><RomboIcon className="rombo-icon invisible-icon" /><h3>Zafiro</h3></li>
            <li className="list-item small-item no-icon"><RomboIcon className="rombo-icon invisible-icon" /><h3>Punta Arena</h3></li>
            <li className="list-item small-item no-icon"><RomboIcon className="rombo-icon invisible-icon" /><h3>Coral</h3></li>
            <li className="list-item"><RomboIcon className="rombo-icon" /><h3>LA JOYA</h3></li>
            <li className="list-item small-item no-icon"><RomboIcon className="rombo-icon invisible-icon" /><h3>Prado Piamonte</h3></li>
          </ul>
        </div>
        <div className="footer-section ubicanos">
          <h2 className="section-title">UBÍCANOS</h2>
          <ul className="list">
            <li className="list-item">
              <RomboIcon className="rombo-icon" />
              <h3>Víctor Andrés Belaúnde N°405 <br /> Umacollo-Arequipa</h3>
            </li>
            <li className="list-item">
              <RomboIcon className="rombo-icon" />
              <h3>(054) 522 935 <br /> 972 582 490</h3>
            </li>
            <li className="list-item">
              <RomboIcon className="rombo-icon" />
              <h3>contacto@inmobiliariaontario.com</h3>
            </li>
          </ul>      
        </div>
        <div className="social-media-icons">
            <div className="no-icon">
                <RomboIcon className="rombo-icon" />
            </div>
            <div className="social-media-icon">
              <FacebookIcon className="social-icon" />
            </div>
            <div className="social-media-icon">
              <InstagramIcon className="social-icon" />
            </div>
            <div className="social-media-icon">
              <TikTokIcon className="social-icon" />
            </div>
            <div className="social-media-icon">
              <YouTubeIcon className="social-icon" />
            </div>
          </div>
      </div>
      <div className="footer-bottom-content">
      
        <div className="copyright">
          <h3>2024 @ All rights reserved by ONTARIO</h3>
        </div>
        <div className="libro-reclamaciones">
          <LibroReclamacionesIcon className="libro-icon" />
          <h3>Libro de Reclamaciones</h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
