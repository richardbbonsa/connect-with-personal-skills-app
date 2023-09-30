const express = require('express')
const {FacturaController}=require('../controllers')
const route = express.Router();

route.post('/',FacturaController.create);
route.get('/',FacturaController.readAll);
route.get('/:id',FacturaController.read);
route.put('/:id',FacturaController.update);
route.delete('/:id',FacturaController.delete);

module.exports=route;