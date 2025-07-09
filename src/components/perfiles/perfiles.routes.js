import { Router } from 'express';
import * as PerfilesController from './perfilesController.js'; // Asegúrate de que el alias esté bien resuelto

const router = Router();

// Crear perfil
router.post('/', PerfilesController.crearPerfil);

// Obtener todos los perfiles
router.get('/', PerfilesController.obtenerPerfiles);
// Obtener tipos de perfil
router.get('/tipos', PerfilesController.obtenerTiposPerfil);

// Obtener perfil por ID
router.get('/:id', PerfilesController.obtenerPerfilPorId);

// Actualizar perfil
router.put('/:id', PerfilesController.actualizarPerfil);

// Eliminar perfil
router.delete('/:id', PerfilesController.eliminarPerfil);

export default router;
