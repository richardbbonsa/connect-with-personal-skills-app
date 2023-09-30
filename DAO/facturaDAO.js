const db=require('../db/db');

class FacturaDAO {
    async create(factura) {
        const { createDate, pricePerHour, requiredHours, subTotal, taxes, total, state, idCliente } = factura;
        const result = await db('Facturas').insert({
            createDate,
            pricePerHour,
            requiredHours,
            subTotal,
            taxes,
            total,
            state,
            idCliente
        }).returning('idFactura');
        return result;
    }

    async read(idFactura) {
        const cliente = await db('Facturas').where({ idFactura }).first();
        return cliente;
    }

    async readAll() {
        const factura = await db.select('*').from('Facturas');
        return factura;
    }

    async update(factura) {
        const { ... idFactura } = factura;
        const result = await db('Facturas').where({ idFactura }).update(factura).returning('idFactura');
        return result;
    }

    async delete(idFactura) {
        const result = await db('Facturas').where({ idFactura }).del();
        return result;
    }
}

module.exports=new FacturaDAO();