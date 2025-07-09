import { Router } from 'express';
import { crearVenta  } from '@ventas/ventasController.js'; // Ajusta el path si es diferente

const router = Router();

// Ruta para registrar una nueva venta
router.post('/ventas', crearVenta );

// Aquí podés agregar más rutas: listar, buscar, actualizar, etc.
// Por ejemplo:
// router.get('/ventas', listarVentas);
// router.get('/ventas/:id', obtenerVentaPorId);

export default router;
