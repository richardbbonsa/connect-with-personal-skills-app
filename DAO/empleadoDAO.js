const db = require('../db/db');
const bcrypt = require('bcryptjs')

class EmpleadoDAO {
    async create(empleado) {
        const { user, password, email } = empleado;
        const result = await db('Login').insert({
            user,
            password: await encrypt(password),
            email
        }).returning('email');
        return result;
    }

    async read(email) {
        const empleado = await db('Login').where({ email }).first();
        return empleado;
    }

    async readAll() {
        const empleados = await db.select('*').from('Login');
        return empleados;
    }

    async update(empleado) {
        const { ...email } = empleado;
        const result = await db('Login').where({ email }).update(empleado).returning('idLogin');
        return result;
    }

    async delete(email) {
        const result = await db('Login').where({ email }).del();
        return result;
    }

    decrypt = async (password, recivedPassword) => {
        let compere=await bcrypt.compare(password, recivedPassword);
        return compere
    }
}

const encrypt = async (password) => {
    const salt = await bcrypt.genSalt(5);
    return await bcrypt.hash(password, salt);
}

module.exports = new EmpleadoDAO();