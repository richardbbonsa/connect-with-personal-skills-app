const express = require('express')
const {ProyectoController}=require('../controllers')
const {AuthToken}=require('../middlewares')
const route = express.Router();

route.post('/',AuthToken.verifyToken,ProyectoController.create);
route.get('/',AuthToken.verifyToken,ProyectoController.readAll);
route.get('/:id',AuthToken.verifyToken,ProyectoController.read);
route.put('/:id',AuthToken.verifyToken,ProyectoController.update);
route.delete('/:id',AuthToken.verifyToken,ProyectoController.delete);

module.exports=route;