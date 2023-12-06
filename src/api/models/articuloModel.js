const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const articuloModel = sequelize.define('articuloModel', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    autor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    categoria: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW, // Usa DataTypes.NOW para la fecha actual
    },
    imagen: {
      type: DataTypes.BLOB,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return articuloModel;
};
