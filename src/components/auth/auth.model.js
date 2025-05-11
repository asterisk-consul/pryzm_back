import pool from "../database/keys.js";

export const createUser = async (userData) => {
  const { nombre, email, telefono, direccion, ciudad, pais, password, rol_id } =
    userData;

  await pool.query(
    `INSERT INTO usuarios(nombre, email, telefono, direccion, ciudad, pais, password, rol_id)
     VALUES ($1, $2, $3, $4, $5, $6, $7, $8)`,
    [nombre, email, telefono, direccion, ciudad, pais, password, rol_id]
  );
};

export const findUserByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM usuarios WHERE email = $1", [
    email,
  ]);
  return result.rows[0];
};

// Función para guardar un refresh token en la base de datos
export const saveRefreshToken = async (userId, tokenHash) => {
  try {
    // Fecha de expiración (7 días desde ahora)
    const expiresAt = new Date();
    expiresAt.setDate(expiresAt.getDate() + 7);

    // Se asume que hay una tabla refresh_tokens en la base de datos
    const result = await db.query(
      `INSERT INTO refresh_tokens (user_id, token_hash, expires_at) 
       VALUES (?, ?, ?)`,
      [userId, tokenHash, expiresAt]
    );

    return result;
  } catch (error) {
    console.error("Error al guardar refresh token:", error);
    throw error;
  }
};

// Función para encontrar un refresh token específico
export const findRefreshToken = async (userId, tokenHash) => {
  try {
    const [rows] = await db.query(
      `SELECT * FROM refresh_tokens 
       WHERE user_id = ? AND token_hash = ? AND expires_at > NOW()`,
      [userId, tokenHash]
    );

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error al buscar refresh token:", error);
    throw error;
  }
};

// Función para eliminar un refresh token específico (al hacer logout o refresh)
export const deleteRefreshToken = async (userId, tokenHash) => {
  try {
    await db.query(
      `DELETE FROM refresh_tokens WHERE user_id = ? AND token_hash = ?`,
      [userId, tokenHash]
    );
  } catch (error) {
    console.error("Error al eliminar refresh token:", error);
    throw error;
  }
};

// Función para eliminar todos los refresh tokens de un usuario (logout de todos los dispositivos)
export const deleteAllRefreshTokens = async (userId) => {
  try {
    await db.query(`DELETE FROM refresh_tokens WHERE user_id = ?`, [userId]);
  } catch (error) {
    console.error("Error al eliminar todos los refresh tokens:", error);
    throw error;
  }
};

// Función para eliminar refresh tokens expirados (se puede ejecutar como tarea programada)
export const cleanupExpiredTokens = async () => {
  try {
    await db.query(`DELETE FROM refresh_tokens WHERE expires_at < NOW()`);
  } catch (error) {
    console.error("Error al limpiar tokens expirados:", error);
    throw error;
  }
};

// Función para encontrar usuario por ID (necesaria para el refresh de token)
export const findUserById = async (userId) => {
  try {
    const [rows] = await db.query(`SELECT * FROM usuarios WHERE id = ?`, [
      userId,
    ]);

    return rows.length > 0 ? rows[0] : null;
  } catch (error) {
    console.error("Error al buscar usuario por ID:", error);
    throw error;
  }
};
