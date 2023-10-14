const { EmpleadoService } = require('../services');
const jwt = require('jsonwebtoken')
require('dotenv').config({ path: "../.env" })

class AuthController {

    async login(req, res) {
        try {
            let {email,password} =req.body;
            let empleado=await EmpleadoService.read(email);
            if (empleado == undefined) {
                throw "Email not found";
            } else {
                let compPass=await EmpleadoService.decrypt(email,password);
                if (!compPass) {
                    throw "Incorrect password";
                } else {
                    let token=jwt.sign({
                        email:empleado.email
                    },process.env.PRIVATE_KEY,{
                        expiresIn:'1d'
                    });
                    res.status(206).json(token);
                }
            }
        } catch (err) {
            console.log(err)
            if (err=="Email not found") {
                res.status(400).json({ error: "Email not found" });
            } else {
                res.status(400).json({ error: "Incorrect password" });
            }
            
        }
    }

}

module.exports = new AuthController();