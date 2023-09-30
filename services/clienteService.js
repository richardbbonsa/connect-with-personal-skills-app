const {ClienteDAO}=require('../DAO')

class ClienteService{
    create(cliente) {
        const { name, email, address, phoneNumber, nui } = cliente;
        if (name==null||email==null||address==null||phoneNumber==null||nui==null) {
            return "Falta algún campo necesario para crear el cliente por llenar";
        } else {
            const result = ClienteDAO.create(cliente);
            return result;
        }
        
    }

    read(nui) {
        const cliente = ClienteDAO.read(nui);
        return cliente;
    }

    readAll() {
        const clientes = ClienteDAO.readAll();
        return clientes;
    }

    update(cliente) {
        const { name, email, address, phoneNumber, nui } = cliente;
        const updatedRecord={};
        if(name!=null){
            updatedRecord.name=name;
        }
        if(email!=null){
            updatedRecord.email=email;
        }
        if(address!=null){
            updatedRecord.address=address;
        }
        if(phoneNumber!=null){
            updatedRecord.phoneNumber=phoneNumber;
        }
        updatedRecord.nui=nui;
        const result = ClienteDAO.update(updatedRecord);
        return result;
    }

    delete(nui) {
        const result = ClienteDAO.delete(nui);
        return result;
    }
}

module.exports=new ClienteService();