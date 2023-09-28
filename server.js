const express = require('express');
const Routes = require('./routes');
const server = express();
const port=3000;

server.use(express.json());
server.use('/api/v0', Routes);

server.listen(port,()=>console.log(`El servidor se encuentra escuchando en el puerto ${port}`));