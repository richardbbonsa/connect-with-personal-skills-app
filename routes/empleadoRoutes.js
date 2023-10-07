const express = require('express')
const {EmpleadoController}=require('../controllers')
const route = express.Router();

route.post('/',EmpleadoController.create);
route.get('/',EmpleadoController.readAll);
route.get('/empleado',EmpleadoController.read);
route.put('/',EmpleadoController.update);
route.delete('/',EmpleadoController.delete);

module.exports=route;