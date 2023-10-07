const ClienteRoutes = require('./clienteRoutes');
const ProyectoRoutes = require('./proyectoRoutes');
const FacturaRoutes = require('./facturaRoutes');
const EmpleadoRoutes = require('./empleadoRoutes');
const AuthRoutes = require('./authRoutes');
const express = require('express');
const router = express.Router();

router.use('/clientes',ClienteRoutes);
router.use('/proyectos',ProyectoRoutes);
router.use('/facturas',FacturaRoutes);
router.use('/empleados',EmpleadoRoutes);
router.use('/auth',AuthRoutes);

module.exports=router;