const jwt = require('jsonwebtoken');
const { EmpleadoService } = require('../services');
require('dotenv').config()

class Authenticator {

    verifyToken = async (req, res, next) => {
        try {
            const bearerHeader = req.headers['Authorization'];
            if (typeof bearerHeader !== 'undefined') {
                const bearerToken = bearerHeader.split(' ')[1];
                const decode = jwt.decode(bearerToken, process.env.PRIVATE_KEY);
                const empleado = EmpleadoService.read(decode.email);
                if (empleado.length === 0) {
                    res.status(404).json({ message: "Empleado not found" });
                } else {
                    next();
                }
            } else {
                res.status(403).json({ message: "No token provided" });
            }
        } catch (error) {
            console.log(error)
            res.status(401).json({ message: "Unauthorized" });
        }
    }

}

module.exports = new Authenticator();