const express = require('express')
const {FacturaController}=require('../controllers')
const {AuthToken}=require('../middlewares')
const route = express.Router();

route.post('/',AuthToken.verifyToken,FacturaController.create);
route.get('/',AuthToken.verifyToken,FacturaController.readAll);
route.get('/:id',AuthToken.verifyToken,FacturaController.read);
route.put('/:id',AuthToken.verifyToken,FacturaController.update);
route.delete('/:id',AuthToken.verifyToken,FacturaController.delete);

module.exports=route;