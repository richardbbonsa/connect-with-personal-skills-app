const { EmpleadoDAO } = require('../DAO')

class EmpleadoService {
    create(empleado) {
        const { user, password, email } = empleado;
        if (user == null || password == null || email == null) {
            return "Falta algún campo necesario para crear el cliente por llenar";
        } else {
            const result = EmpleadoDAO.create(empleado);
            return result;
        }

    }

    read(email) {
        const empleado = EmpleadoDAO.read(email);
        return empleado;
    }

    readAll() {
        const empleados = EmpleadoDAO.readAll();
        return empleados;
    }

    update(empleado) {
        const { user, password, email } = empleado;
        const updatedRecord = {};
        if (user != null) {
            updatedRecord.user = user;
        }
        if (password != null) {
            updatedRecord.password = password;
        }
        updatedRecord.email = email;
        const result = EmpleadoDAO.update(updatedRecord);
        return result;
    }

    delete(email) {
        const result = EmpleadoDAO.delete(email);
        return result;
    }

    decrypt(email,password){
        return EmpleadoDAO.decrypt(password,this.read(email).password);
    }
}

module.exports = new EmpleadoService();