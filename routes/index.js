const ClienteRoutes = require('./clienteRoutes');
const express = require('express');
const router = express.Router();

router.use('/clientes',ClienteRoutes);

module.exports=router;