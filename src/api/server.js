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

app.use(cors({
  origin: 'https://blogzamblera-ldzambleras-projects.vercel.app:3001',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
}));

const Routes = require("../api/Routes/Routes");
app.use("/", Routes);

conn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`);
  });
});

