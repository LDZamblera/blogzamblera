const { Sequelize } = require('sequelize');
const path = require('path');
const fs = require('fs');

const sequelize = new Sequelize(``, {
  logging: false,
  native: false,
});

const modelDefiners = [];

// Obtén la ruta completa de los modelos
const modelsPath = path.join(__dirname, '../models');

// Lee los archivos en el directorio de modelos
fs.readdirSync(modelsPath)
  .filter((file) => file.endsWith('.js'))
  .forEach((file) => {
    const model = require(path.join(modelsPath, file));
    modelDefiners.push(model);
  });

// Inicializa los modelos
modelDefiners.forEach((modelDefiner) => modelDefiner(sequelize));

// Obtiene las instancias de los modelos
const {articuloModel, userModel} = sequelize.models;

//articuloModel.belongsToMany(userModel,{through: "articuloUser"})
//userModel.belongsToMany(articuloModel, {through: "articuloUser"})
// Sincroniza los modelos con la base de datos
sequelize.sync()
  .then(() => {
    console.log('Tablas sincronizadas');
  })
  .catch((error) => {
    console.error('Error al sincronizar las tablas:', error);
  });

module.exports = {
  articuloModel,
  userModel,
  conn: sequelize,
};
