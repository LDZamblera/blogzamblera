const express = require('express');
const router = express.Router();
const articuloControllers = require('../controllers/articuloControllers');

// Rutas
router.post("/new-article", articuloControllers.CrearArticulo);
router.get("/articles", articuloControllers.ObtenerArticulos);
router.put("/update-article/:id", articuloControllers.ActualizarArticulo);
router.delete("/delete-article/:id", articuloControllers.EliminarArticulo);

module.exports = router;
