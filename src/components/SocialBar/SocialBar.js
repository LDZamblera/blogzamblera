// SocialBar.js
import React from 'react';
import './SocialBar.css'; // Asegúrate de importar tus estilos CSS aquí
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Importa FontAwesomeIcon
import { faFacebook, faInstagram, faYoutube , faLinkedin, faWhatsapp, faGithub } from '@fortawesome/free-brands-svg-icons'; //

const SocialBar = () => {
  return (
    <div className="container-bar">
      <input type="checkbox" id="btn-social" />
      <label htmlFor="btn-social" className="fa fa-play"></label>
      <div className="icon-social">
        <a href="https://www.facebook.com/lucas.zamblera/">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
          <span id="title"></span>
        </a>
        <a href="https://www.youtube.com/channel/UC5rtpmoE-QQDai9F4Uzm6Ow">
          <FontAwesomeIcon icon={faYoutube} className="social-icon" />
          <span id="title"></span>
        </a>
        <a href="https://www.linkedin.com/in/lucas-daniel-zamblera-a80275217/">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
          <span id="title"></span>
        </a>
        <a href="https://github.com/LDZamblera">
          <FontAwesomeIcon icon={faGithub} className="social-icon" />
          <span id="title"></span>
        </a>
        <a href="https://www.instagram.com/lucaszamblera/">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
          <span id="title"></span>
        </a>
        <a href="https://wa.link/ffv1jh">
          <FontAwesomeIcon icon={faWhatsapp} className="social-icon" />
          <span id="title"></span>
        </a>
      </div>
    </div>
  );
};

export default SocialBar;

