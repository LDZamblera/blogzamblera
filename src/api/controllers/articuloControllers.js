
const {articuloModel} = require('../db/db');

// Importa tu modelo de Artículo desde tu base de datos

// Controlador de CrearArticulo
const CrearArticulo = async (req, res) => {
  try {
    const { autor, categoria, contenido, imagen, titulo } = req.body;
    const nuevoArticulo = await articuloModel.create({
      autor,
      categoria,
      contenido,
      imagen,
      titulo,
    });
    res.status(201).json(nuevoArticulo);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear el artículo");
  }
};

// Controlador de ObtenerArticulos
const ObtenerArticulos = async (req, res) => {
  try {
    const articulos = await articuloModel.findAll();
    res.json(articulos);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los artículos");
  }
};

// Controlador de ActualizarArticulo
const ActualizarArticulo = async (req, res) => {
  try {
    const { autor, categoria, contenido, imagen, titulo } = req.body;
    const articuloId = req.params.id;
    await articuloModel.update(
      { autor, categoria, contenido, imagen, titulo },
      { where: { id: articuloId } }
    );
    res.status(200).send("Artículo actualizado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al actualizar el artículo");
  }
};

// Controlador de EliminarArticulo
const EliminarArticulo = async (req, res) => {
  try {
    const articuloId = req.params.id;
    await articuloModel.destroy({ where: { id: articuloId } });
    res.status(200).send("Artículo eliminado correctamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el artículo");
  }
};

module.exports = {
  CrearArticulo,
  ObtenerArticulos,
  ActualizarArticulo,
  EliminarArticulo,
};
