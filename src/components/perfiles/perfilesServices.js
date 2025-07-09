import pool from '@database/keys';



// Crear Perfil
export const crearPerfil = async ({
    nombre,
    telefono,
    direccion, // corregido: antes era "diereccion"
    tipo_perfil_id,
    ciudad_id,
    creado_por_usuario_id,
    datos,
    activo = true // Asignar valor por defecto a activo
}) => {
    const result = await pool.query(
        'INSERT INTO perfiles(nombre, telefono, direccion, tipo_perfil_id, ciudad_id, creado_por_usuario_id,  datos, activo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING id',
        [nombre, telefono, direccion, tipo_perfil_id, ciudad_id, creado_por_usuario_id, datos, activo]
    );
    return result.rows[0].id;
};

// Obtener todos los perfiles
export const obtenerPerfiles = async () => {
    const result = await pool.query('SELECT * FROM perfiles');
    return result.rows;
};

// Obtener un perfil por ID
export const obtenerPerfilPorId = async (id) => {
    const result = await pool.query('SELECT * FROM perfiles WHERE id = $1', [id]);
    return result.rows[0]; // Retorna el perfil encontrado o undefined si no existe
};

// Actualizar un perfil
export const actualizarPerfil = async (id, {
    nombre,
    telefono,
    direccion,
    tipo_perfil_id,
    ciudad_id,
    updated_at
}) => {
    const result = await pool.query(
        'UPDATE perfiles SET nombre = $1, telefono = $2, direccion = $3, tipo_perfil_id = $4, ciudad_id = $5, updated_at = $6 WHERE id = $7 RETURNING *',
        [nombre, telefono, direccion, tipo_perfil_id, ciudad_id, updated_at, id]
    );
    return result.rows[0]; // Devuelve el perfil actualizado
};

// Eliminar un perfil
export const eliminarPerfil = async (id) => {
    const result = await pool.query('DELETE FROM perfiles WHERE id = $1 RETURNING *', [id]);
    return result.rows[0]; // Devuelve el perfil eliminado
};

// tipo de perfil 

export const obtenerTiposPerfil = async () => {
    const result = await pool.query('SELECT * FROM perfil_tipo');
    return result.rows; // Retorna todos los tipos de perfil
}
 