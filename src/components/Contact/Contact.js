import React, { useState } from 'react';
import './Contact.css';
import SocialBar from '../SocialBar/SocialBar';
import swal from 'sweetalert'; // Importa SweetAlert

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = {};

    if (name.trim() === '') {
      errors.name = 'El nombre es requerido';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = 'El correo electrónico no es válido';
    }
    if (!/^\d{10}$/.test(phone)) {
      errors.phone = 'El número de teléfono debe tener 10 dígitos';
    }
    if (message.trim() === '') {
      errors.message = 'El mensaje es requerido';
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors);
    } else {
      try {
        const response = await fetch('/new-contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, phone, message }),
        });

        if (response.ok) {
          setName('');
          setEmail('');
          setPhone('');
          setMessage('');
          setErrors({});
          swal('Éxito', '¡El formulario se envió correctamente!', 'success');
        } else {
          throw new Error('Error al enviar el formulario');
        }
      } catch (error) {
       
      }
    }
  };

  return (
    <div className="contact-container">
      <h1>Contacto</h1>
      <form onSubmit={handleSubmit}>
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
          placeholder="Número de Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {errors.phone && <p className="error">{errors.phone}</p>}

        <textarea
          placeholder="Mensaje"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">ENVIAR</button>
      </form>

      <SocialBar />
    </div>
  );
};

export default Contact;
