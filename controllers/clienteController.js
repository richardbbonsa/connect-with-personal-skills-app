const {ClienteService} = require('../services');

class ClienteController{
    async create(req,res){
        try {
            const cliente = req.body;
            const result = await ClienteService.create(cliente);
            res.status(201).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async read(req,res){
        try {
            const nui = req.params.nui;
            const cliente = await ClienteService.read(nui);
            res.status(201).json(cliente);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async readAll(req,res){
        try {
            const clientes = await ClienteService.readAll();
            res.status(201).json(clientes);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async update(req,res){
        try {
            const nui = req.params.nui;
            const cliente = req.body;
            cliente.nui = nui;
            const result = await ClienteService.update(cliente);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async delete(req,res){
        try {
            const nui = req.params.nui;
            const result = await ClienteService.delete(nui);
            res.json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

module.exports=new ClienteController();