const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Planilla = require('../models/Planilla');

// Ruta para obtener todas las planillas o planillas por colaboradorId
router.get('/', async (req, res) => {
  try {
    const { colaboradorId } = req.query;
    if (colaboradorId) {
      console.log('Fetching planillas for colaboradorId:', colaboradorId);
      const planillas = await Planilla.find({ colaboradorId: new mongoose.Types.ObjectId(colaboradorId) });
      console.log('Planillas found:', planillas);
      res.json(planillas);
    } else {
      const planillas = await Planilla.find();
      console.log('All planillas:', planillas);
      res.json(planillas);
    }
  } catch (error) {
    console.error('Error fetching planillas:', error);
    res.status(500).json({ message: 'Hubo un error al obtener las planillas.' });
  }
});

module.exports = router;
