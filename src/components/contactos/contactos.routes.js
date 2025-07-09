import express from "express";
import {
  crearContacto
/*   obtenerContactoPorId,
  obtenerTodosLosContactos,
  actualizarContacto,
  eliminarContacto */
} from "./contactosServices.js";      
const router = express.Router();



router.post("/", crearContacto);
/* router.get("/", obtenerTodosLosContactos);
router.get("/:id", obtenerContactoPorId);
router.put("/:id", actualizarContacto);
router.delete("/:id", eliminarContacto); */

export default router;
