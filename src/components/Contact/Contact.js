import React, { useState } from 'react';
import './Contact.css'; // Asegúrate de tener el archivo CSS para el estilo del formulario
import SocialBar from '../SocialBar/SocialBar';

const Contact = () => {
  // Estados para controlar los valores de los campos y los errores
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {}; // Objeto para almacenar los errores

    // Validaciones básicas
    if (name.trim() === '') {
      errors.name = 'El nombre es requerido';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'El correo electrónico no es válido';
    }
    if (message.trim() === '') {
      errors.message = 'El mensaje es requerido';
    }
    if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'El número de teléfono debe tener 10 dígitos';
    }

    // Si hay errores, se actualiza el estado con los mensajes de error
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      // Aquí puedes enviar los datos a través de alguna API o realizar alguna acción con la información del formulario
      console.log('Formulario enviado:', { name, email, message, phone });
      
      // Limpia los campos después de enviar el formulario
      setName('');
      setEmail('');
      setMessage('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <div className="contact-container">
      <br></br>
      <h1>Contacto</h1>
      <br></br>
      <form onSubmit={handleSubmit}>
        {/* Campos del formulario con validaciones y manejo de errores */}
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error">{errors.name}</p>}
        
        <input
          type="email"
          placeholder="Correo Electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        
        <input
          type="tel"
          placeholder=" Número de Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <br></br>
        
        <textarea
          placeholder=" Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}
        
        <button type="submit">Enviar</button>
      </form>

      <SocialBar/>
    </div>
  );
};

export default Contact;
