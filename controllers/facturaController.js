const {FacturaService} = require('../services');

class FacturaController{
    async create(req,res){
        try {
            const factura = req.body;
            const result = await FacturaService.create(factura);
            res.status(201).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async read(req,res){
        try {
            const idFactura = req.params.id;
            const factura = await FacturaService.read(idFactura);
            res.status(206).json(factura);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async readAll(req,res){
        try {
            const facturas = await FacturaService.readAll();
            res.status(200).json(facturas);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async update(req,res){
        try {
            const idFactura = req.params.id;
            const factura = req.body;
            factura.idFactura = idFactura;
            const result = await FacturaService.update(factura);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async delete(req,res){
        try {
            const idFactura = req.params.id;
            const result = await FacturaService.delete(idFactura);
            res.json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

module.exports=new FacturaController();