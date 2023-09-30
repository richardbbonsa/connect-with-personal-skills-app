const db=require('../db/db');

class ClienteDAO {
    async create(cliente) {
        const { name, email, address, phoneNumber, nui } = cliente;
        const result = await db('Clientes').insert({
            name,
            email,
            address,
            NUI:nui,
            phoneNumber,
        }).returning('NUI');
        return result;
    }

    async read(nui) {
        const cliente = await db('Clientes').where({ NUI: nui }).first();
        return cliente;
    }

    async readAll() {
        const clientes = await db.select('*').from('Clientes');
        return clientes;
    }

    async update(cliente) {
        const { ... nui } = cliente;
        const result = await db('Clientes').where({ NUI: nui }).update(cliente).returning('NUI');
        return result;
    }

    async delete(nui) {
        const result = await db('Clientes').where({ NUI: nui }).del();
        return result;
    }
}

module.exports=new ClienteDAO();