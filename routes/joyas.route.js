import { joyasController } from "../controllers/joyas.controllers.js";
import { reportarConsulta } from "../middleware/reportarConsulta.js";
import { Router } from "express";


const router =  Router();

router.get("/",reportarConsulta, (req,res) =>{
    res.json ({ok: true, result: "todo esta correcto"})
});

router.get("/joyasHateoas",reportarConsulta,joyasController.getInventarioHateoas);
router.get("/joyas",reportarConsulta,joyasController.getAllInventario);
router.get("/joyas/filtros",reportarConsulta, joyasController.getFiltros);
router.get("/joyas/:id",reportarConsulta, joyasController.getInventarioById);



export default router;