import * as PerfilesServices from '@perfiles/perfilesServices.js';

// Crear Perfil
export const crearPerfil = async (req, res) => {
  try {
    const {
      nombre,
      telefono,
      direccion,
      tipo_perfil_id,
      ciudad_id,
      creado_por_usuario_id,
      datos
    } = req.body;

    const perfilId = await PerfilesServices.crearPerfil({
      nombre,
      telefono,
      direccion,
      tipo_perfil_id,
      ciudad_id,
      creado_por_usuario_id,
      datos
    });

    res.status(201).json({
      message: 'Perfil creado correctamente',
      perfilId,
    });
  } catch (error) {
    console.error('Error al crear el perfil:', error.message);
    res.status(500).json({ error: 'Error al crear el perfil' });
  }
};

// Obtener todos los perfiles activos
export const obtenerPerfiles = async (req, res) => {
  try {
    const perfiles = await PerfilesServices.obtenerPerfiles();
    res.status(200).json(perfiles);
  } catch (error) {
    console.error('Error al obtener los perfiles:', error.message);
    res.status(500).json({ error: 'Error al obtener los perfiles' });
  }
};

// obtener tipos de perfil

export const obtenerTiposPerfil = async (req, res) => {
  try {
    const perfiles = await PerfilesServices.obtenerTiposPerfil();
    res.status(200).json(perfiles);
  } catch (error) {
    console.error('Error al obtener los perfiles:', error.message);
    res.status(500).json({ error: 'Error al obtener los perfiles' });
  }
};

// Obtener un perfil activo por ID
export const obtenerPerfilPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const perfil = await PerfilesServices.obtenerPerfilPorId(id);

    if (!perfil) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }

    res.status(200).json(perfil);
  } catch (error) {
    console.error('Error al obtener el perfil:', error.message);
    res.status(500).json({ error: 'Error al obtener el perfil' });
  }
};

// Actualizar Perfil
export const actualizarPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      nombre,
      telefono,
      direccion,
      tipo_perfil_id,
      ciudad_id,
      usuario_id,
      datos
    } = req.body;

    const perfilActualizado = await PerfilesServices.actualizarPerfil(id, {
      nombre,
      telefono,
      direccion,
      tipo_perfil_id,
      ciudad_id,
      usuario_id,
      datos
    });

    if (!perfilActualizado) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }

    res.status(200).json({
      message: 'Perfil actualizado correctamente',
      perfil: perfilActualizado,
    });
  } catch (error) {
    console.error('Error al actualizar el perfil:', error.message);
    res.status(500).json({ error: 'Error al actualizar el perfil' });
  }
};

// Baja lógica (soft delete)
export const eliminarPerfil = async (req, res) => {
  try {
    const { id } = req.params;
    const perfilEliminado = await PerfilesServices.eliminarPerfil(id);

    if (!perfilEliminado) {
      return res.status(404).json({ message: 'Perfil no encontrado' });
    }

    res.status(200).json({
      message: 'Perfil desactivado correctamente (baja lógica)',
      perfil: perfilEliminado,
    });
  } catch (error) {
    console.error('Error al eliminar (desactivar) el perfil:', error.message);
    res.status(500).json({ error: 'Error al eliminar (desactivar) el perfil' });
  }
};
