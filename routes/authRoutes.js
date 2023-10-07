const express = require('express')
const {AuthController}=require('../controllers')
const route = express.Router();

route.post('/',AuthController.login);

module.exports=route;