import { Router } from 'express';
import {
  crearCaja,
  abrirCaja,
  registrarMovimiento,
  historial,
} from '@caja/cajaController'
const router = Router();

router.post('/abrir', abrirCaja);
router.post('/movimiento', registrarMovimiento);
router.post('/nuevaCaja', crearCaja)
router.get('/historial/:caja_id', historial);

export default router;
