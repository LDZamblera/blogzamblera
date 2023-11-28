const express = require('express');
const app = express();
const port = 3000;

// Iniciar el servidor en el puerto 3000
app.listen(port, () => {
  console.log(`Servidor Express escuchando en el puerto ${port}`);
});
