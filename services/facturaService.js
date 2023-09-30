const {FacturaDAO}=require('../DAO')

class FacturaService{
    create(factura) {
        const { createDate, pricePerHour, requiredHours, subTotal, taxes, total, state, idCliente } = factura;
        if (createDate==null||pricePerHour==null||requiredHours==null||subTotal==null||taxes==null||total==null||state==null||idCliente==null) {
            return "Falta algún campo necesario para crear la factura por llenar";
        } else {
            const result = FacturaDAO.create(factura);
            return result;
        }
        
    }

    read(idFactura) {
        const factura = FacturaDAO.read(idFactura);
        return factura;
    }

    readAll() {
        const facturas = FacturaDAO.readAll();
        return facturas;
    }

    update(factura) {
        const { pricePerHour, requiredHours, subTotal, taxes, total, state, idCliente, idFactura } = factura;
        const updatedRecord={};
        if(pricePerHour!=null){
            updatedRecord.pricePerHour=pricePerHour;
        }
        if(requiredHours!=null){
            updatedRecord.requiredHours=requiredHours;
        }
        if(subTotal!=null){
            updatedRecord.subTotal=subTotal;
        }
        if(taxes!=null){
            updatedRecord.taxes=taxes;
        }
        if(total!=null){
            updatedRecord.total=total;
        }
        if(state!=null){
            updatedRecord.state=state;
        }
        if(idCliente!=null){
            updatedRecord.idCliente=idCliente;
        }
        updatedRecord.idFactura=idFactura;
        const result = FacturaDAO.update(updatedRecord);
        return result;
    }

    delete(idFactura) {
        const result = FacturaDAO.delete(idFactura);
        return result;
    }
}

module.exports=new FacturaService();