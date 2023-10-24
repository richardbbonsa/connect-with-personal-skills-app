const jwt = require('jsonwebtoken');
const { EmpleadoService } = require('../services');
require('dotenv').config({ path: "../.env" })

class Authenticator {

    verifyToken = async (req, res, next) => {
        try {
            const bearerHeader = req.headers['authorization'];
            if (typeof bearerHeader !== 'undefined') {
                const bearerToken = bearerHeader.split(' ')[1];
                const decode = jwt.decode(bearerToken, process.env.PRIVATE_KEY);
                if (decode == null) {
                    res.status(403).json({ message: "Token error" });
                } else {
                    let nowDate = new Date();
                    if (nowDate <= decode.exp) {
                        res.status(403).json({ message: "Token expired" });
                    } else {
                        const empleado = EmpleadoService.read(decode.email);
                        if (empleado.length === 0) {
                            res.status(404).json({ message: "Empleado not found" });
                        } else {
                            next();
                        }
                    }
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