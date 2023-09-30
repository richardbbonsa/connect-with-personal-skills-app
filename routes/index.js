const ClienteRoutes = require('./clienteRoutes');
const ProyectoRoutes = require('./proyectoRoutes');
const FacturaRoutes = require('./facturaRoutes');
const express = require('express');
const router = express.Router();

router.use('/clientes',ClienteRoutes);
router.use('/proyectos',ProyectoRoutes);
router.use('/facturas',FacturaRoutes);

module.exports=router;