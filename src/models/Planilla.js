const mongoose = require('mongoose');

const planillaSchema = new mongoose.Schema({
  mes: String,
  colaboradorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Colaborador' },
  faltas: Number,
  diasVacaciones: Number,
  montoDepositar: Number,
  retencion: Number,
  essalud: Number,
  afpPorPagar: Number,
  ctsPorPagar: Number,
  gratificacionPorPagar: Number
});

module.exports = mongoose.model('Planilla', planillaSchema);
