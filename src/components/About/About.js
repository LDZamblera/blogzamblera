import React from 'react';
import miFoto from '../../assets/img/fotocv.jpg';
import './About.css'; // Asegúrate de que la ruta sea correcta y apunte al archivo CSS

const About = () => {
  return (
    <div className="about-container">
      <h2>¡Hola! Soy Lucas Zamblera</h2>
      <br></br>
      <p>Soy un técnico en programación Web y egresado de la carrera de Full Stack developer de Henry, ubicado en Córdoba Capital, Argentina. Me apasiona la tecnología y el desarrollo web.</p>
      <br></br>
      <div className="image-container">
        <img className="profile-image" src={miFoto} alt="Mi Foto" />
        <div className="image-overlay">
          <p>¡Hola!</p>
          <br></br>
        </div>
      </div>
      <div className="skills-section">
        <h2>Habilidades y Fortalezas</h2>
        <br></br>
        <ul>
          <p>JavaScript ,HTML5, CSS3, React.js , Redux ,Node.js, Express.js, Postgresql, Sequelize,MongoDB, Typescript, PytHon  </p>
          <br></br>
        </ul>
        <h2>Soft Skills</h2>
        <br></br>
        <ul>
          <p>Trabajo en equipo,Comunicación efectiva,Resolución de problemas</p>
          <br></br>
          
        </ul>
      </div>
    </div>
  );
};

export default About;
