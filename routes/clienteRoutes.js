const express = require('express')
const {ClienteController}=require('../controllers')
const route = express.Router();

route.post('/',ClienteController.create);
route.get('/',ClienteController.readAll);
route.get('/:nui',ClienteController.read);
route.put('/:nui',ClienteController.update);
route.delete('/:nui',ClienteController.delete);

module.exports=route;