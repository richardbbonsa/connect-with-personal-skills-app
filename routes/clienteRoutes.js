const express = require('express')
const {ClienteController}=require('../controllers')
const {AuthToken}=require('../middlewares')
const route = express.Router();

route.post('/',AuthToken.verifyToken,ClienteController.create);
route.get('/',AuthToken.verifyToken,ClienteController.readAll);
route.get('/:nui',AuthToken.verifyToken,ClienteController.read);
route.put('/:nui',AuthToken.verifyToken,ClienteController.update);
route.delete('/:nui',AuthToken.verifyToken,ClienteController.delete);

module.exports=route;