import pool from '@database/keys';


export const registrarMovimientoCaja = async ({
    tipo_movimiento,
    origen,
    referencia_id,
    descripcion,
    monto,
    medio_pago,
    caja_id
  }) => {
    const aperturaResult = await pool.query(
      `SELECT id FROM caja_apertura WHERE caja_id = $1 AND estado = 'abierta' ORDER BY id DESC LIMIT 1`,
      [caja_id]
    );
   // te devuelve cuantas filas fueron afectadas o devuelta por una consulta 
    if (aperturaResult.rowCount === 0) {
      throw new Error('No hay una apertura de caja activa.');
    }
  
    const caja_apertura_id = aperturaResult.rows[0].id;
  
    console.log("Caja apertura ID encontrada:", caja_apertura_id); // LOG para debugging
  
    if (!caja_apertura_id) {
      throw new Error("No se obtuvo un ID de apertura válido.");
    }
  
    await pool.query(
      `INSERT INTO caja_movimientos (caja_apertura_id, tipo_movimiento, origen, referencia_id, descripcion, monto, medio_pago)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [caja_apertura_id, tipo_movimiento, origen, referencia_id, descripcion, monto, medio_pago]
    );
  };
  