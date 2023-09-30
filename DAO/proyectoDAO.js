const db=require('../db/db');

class ProyectoDAO {
    async create(proyecto) {
        const { name, description, startDate, estimatedFinishDate, idCliente, idFactura } = proyecto;
        const result = await db('Proyectos').insert({
            name,
            description,
            startDate,
            estimatedFinishDate,
            idCliente,
            idFactura,
        }).returning('idProyecto');
        return result;
    }

    async read(idProyecto) {
        const proyecto = await db('Proyectos').where({ idProyecto }).first();
        return proyecto;
    }

    async readAll() {
        const proyectos = await db.select('*').from('Proyectos');
        return proyectos;
    }

    async update(proyecto) {
        const { ... idProyecto } = proyecto;
        const result = await db('Proyectos').where({ idProyecto }).update(proyecto).returning('idProyecto');
        return result;
    }

    async delete(idProyecto) {
        const result = await db('Proyectos').where({ idProyecto }).del();
        return result;
    }
}

module.exports=new ProyectoDAO();