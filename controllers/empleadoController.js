const { EmpleadoService } = require('../services');
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: "../.env" })

class EmpleadoController {
    async create(req, res) {
        try {
            const empleado = req.body;
            const result = await EmpleadoService.create(empleado);
            if (result == "Falta algún campo necesario para crear el cliente por llenar") {
                throw "Falta algún campo necesario para crear el cliente por llenar";
            } else {
                const token = jwt.sign({
                    result
                }, process.env.PRIVATE_KEY, {
                    expiresIn: '1d'
                });
                res.status(201).json({ result, token });
            }
        } catch (err) {
            console.log(err)
            if (err=="Falta algún campo necesario para crear el cliente por llenar") {
                res.status(500).json({ error: "Falta algún campo necesario para crear el cliente por llenar" })
            } else {
                res.status(500).json({ error: err.detail.split(' ').slice(0, 4).join(' ') });
            }
            
            
        }
    }

    async read(req, res) {
        try {
            const email = req.body.email;
            const empleado = await EmpleadoService.read(email);
            res.status(206).json(empleado);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async readAll(req, res) {
        try {
            const empleados = await EmpleadoService.readAll();
            res.status(200).json(empleados);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async update(req, res) {
        try {
            const empleado = req.body;
            const result = await EmpleadoService.update(empleado);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async delete(req, res) {
        try {
            const email = req.body.email;
            const result = await EmpleadoService.delete(email);
            res.json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

module.exports = new EmpleadoController();