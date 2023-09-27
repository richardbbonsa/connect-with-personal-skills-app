const express = require('express')
const Routes = require('./routes')

const app = express();

app.use(express.json());

app.listen(3000,()=>console.log("Server escuchando en el puerto 3000"))