import { Router } from 'express';
import * as ubicacionController from './ubicacionController'; // Asegúrate de  l alias esté bien resuelto
// Asegúrate de que el alias esté bien resuelto
const router = Router();    

// Obtener ciudades
router.get('/', ubicacionController.obtenerCiudades);       

export default router;