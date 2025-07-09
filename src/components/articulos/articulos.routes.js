import { Router } from 'express';
import { crearArticulo } from './articulos.sercices.js'; // Asegurate que el alias esté bien resuelto

const router = Router();

// Ruta POST para crear un artículo
router.post('/api', crearArticulo);

export default router;
