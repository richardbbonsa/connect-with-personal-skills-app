const db=require('../db/db');

class ClienteDAO {
    async create(cliente) {
        const { name, email, address, phoneNumber, nui } = cliente;
        const result = await db.insert({
            name,
            email,
            address,
            NUI:nui,
            phoneNumber,
        }).returning('NUI');
        return result;
    }

    async read(nui) {
        const cliente = await db('clientes').where({ NUI: nui }).first();
        return cliente;
    }

    async readAll() {
        const clientes = await db.select('*').from('clientes');
        return clientes;
    }

    async update(cliente) {
        const { ... nui } = cliente;
        const result = await db('clientes').where({ NUI: nui }).update(cliente).returning('NUI');
        return result;
    }

    async delete(id) {
        const result = await db('clientes').where({ idCliente: id }).del();
        return result;
    }
}

module.exports=new ClienteDAO();