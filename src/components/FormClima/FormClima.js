import React, { useState } from 'react';
import './FormClima.css'; // Importa el archivo CSS creado

const FormClima = ({ newLocation }) => {
  const [city, setCity] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ city });
    if (city === "" || !city) return;

    newLocation(city);
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <div className="input-group mb-3 mx-auto">
          <h3>Clima en tu ciudad</h3>
          <br></br>
          {/* Tu imagen */}
          <img src={require('./clima.jpg')} className="img-fluid rounded-start card-img" alt="Clima" />
          <br></br>
          <br></br>
          {/* Campo de entrada para la ciudad */}
          <input type="text" className="form-control" placeholder="Ciudad" onChange={(e) => setCity(e.target.value)} />
          <br></br>
          <br></br>
          {/* Botón de búsqueda */}
          <button className="btn btn-primary input-group-text" type="submit">Buscar</button>
          <br></br>
          <br></br>
        </div>
      </form>
    </div>
  );
}

export default FormClima;
