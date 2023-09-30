const {ProyectoService} = require('../services');

class ProyectoController{
    async create(req,res){
        try {
            const proyecto = req.body;
            const result = await ProyectoService.create(proyecto);
            res.status(201).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async read(req,res){
        try {
            const idProyecto = req.params.id;
            const proyecto = await ProyectoService.read(idProyecto);
            res.status(206).json(proyecto);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async readAll(req,res){
        try {
            const proyectos = await ProyectoService.readAll();
            res.status(200).json(proyectos);
        } catch (err) {
            console.log(err)
            res.status(400).json({ error: "Something went wrong" });
        }
    }

    async update(req,res){
        try {
            const idProyecto = req.params.id;
            const proyecto = req.body;
            proyecto.idProyecto = idProyecto;
            const result = await ProyectoService.update(proyecto);
            res.status(200).json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }

    async delete(req,res){
        try {
            const idProyecto = req.params.id;
            const result = await ProyectoService.delete(idProyecto);
            res.json(result);
        } catch (err) {
            console.log(err)
            res.status(500).json({ error: "Something went wrong" });
        }
    }
}

module.exports=new ProyectoController();