const express = require('express')
const {ProyectoController}=require('../controllers')
const route = express.Router();

route.post('/',ProyectoController.create);
route.get('/',ProyectoController.readAll);
route.get('/:id',ProyectoController.read);
route.put('/:id',ProyectoController.update);
route.delete('/:id',ProyectoController.delete);

module.exports=route;