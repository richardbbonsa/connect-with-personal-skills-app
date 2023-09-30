const {ProyectoDAO}=require('../DAO')

class ProyectoService{
    create(proyecto) {
        const { name, description, startDate, estimatedFinishDate, idCliente, idFactura } = proyecto;
        if (name==null||description==null||startDate==null||idCliente==null) {
            return "Falta algún campo necesario para crear el proyecto por llenar";
        } else {
            const result = ProyectoDAO.create(proyecto);
            return result;
        }
    }

    read(idProyecto) {
        const proyecto = ProyectoDAO.read(idProyecto);
        return proyecto;
    }

    readAll() {
        const proyectos = ProyectoDAO.readAll();
        return proyectos;
    }

    update(proyecto) {
        const { name, description, startDate, estimatedFinishDate, idFactura, idProyecto } = proyecto;
        const updatedRecord={};
        if(name!=null){
            updatedRecord.name=name;
        }
        if(description!=null){
            updatedRecord.description=description;
        }
        if(startDate!=null){
            updatedRecord.startDate=startDate;
        }
        if(estimatedFinishDate!=null){
            updatedRecord.estimatedFinishDate=estimatedFinishDate;
        }
        if(idFactura!=null){
            updatedRecord.idFactura=idFactura;
        }
        updatedRecord.idProyecto=idProyecto;
        const result = ProyectoDAO.update(updatedRecord);
        return result;
    }

    delete(idProyecto) {
        const result = ProyectoDAO.delete(idProyecto);
        return result;
    }
}

module.exports=new ProyectoService();