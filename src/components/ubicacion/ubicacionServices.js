import pool from '@database/keys';

export const obtenerCiudades = async () => {
  const result = await pool.query('SELECT * FROM ciudades');
  return result.rows;
}