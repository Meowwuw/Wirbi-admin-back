require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const colaboradorRoutes = require('./routes/colaboradores');
const planillaRoutes = require('./routes/planillas');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch(err => {
  console.error('Error al conectar a MongoDB', err);
});

app.use(cors());
app.use(express.json());

// Ruta para la raíz del servidor
app.get('/', (req, res) => {
  res.send('Bienvenido a la API de Wirbi');
});

app.use('/api/colaboradores', colaboradorRoutes);
app.use('/api/planillas', planillaRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
