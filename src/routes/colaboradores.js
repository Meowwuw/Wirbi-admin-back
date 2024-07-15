const express = require('express');
const router = express.Router();
const Colaborador = require('../models/Colaborador');

// Obtener todos los colaboradores
router.get('/', async (req, res) => {
  try {
    const colaboradores = await Colaborador.find();
    res.json(colaboradores);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
