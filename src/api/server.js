const express = require('express');
const { conn } = require('./db/db');
const app = express();
const PORT = 3000;
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'src')));

// Configuración de CORS
app.use(
  cors({
    origin: 'https://blogzamblera-kcjafcxfj-ldzambleras-projects.vercel.app', // URL del sitio web permitido
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Origin,X-Requested-With,Content-Type,Accept,Authorization',
  })
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://blogzamblera-kcjafcxfj-ldzambleras-projects.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Rutas de tu aplicación
const Routes = require("../api/Routes/Routes");
app.use("/", Routes);

// Conexión a la base de datos y escucha del servidor
conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
});
