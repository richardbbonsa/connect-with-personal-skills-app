const { EmpleadoService } = require('../services');
const jwt = require('jsonwebtoken')
require('dotenv').config()

class AuthController {

    async login(req, res) {
        try {
            const {email,password} =req.body;
            const empleado=EmpleadoService.read(email);
            if (empleado.length === 0) {
                throw "Empleado not found";
            } else {
                const compPass=EmpleadoService.decrypt(email,password);
                if (!compPass) {
                    throw "Incorrect password";
                } else {
                    const token=jwt.sign({
                        email:empleado.email
                    },process.env.PRIVATE_KEY,{
                        expiresIn:'1d'
                    });
                    res.status(206).json(token);
                }
            }
        } catch (err) {
            console.log(err)
            if (err=="Empleado not found") {
                res.status(400).json({ error: "Empleado not found" });
            } else {
                res.status(400).json({ error: "Incorrect password" });
            }
            
        }
    }

}

module.exports = new AuthController();