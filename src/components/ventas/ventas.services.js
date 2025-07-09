import pool from '@database/keys';
import { registrarMovimientoCaja } from '@services/movimientosCaja.service.js';

export const crearVenta = async ({
  cliente_id,
  fecha,
  fecha_fin,
  modulo_id,
  estado,
  observaciones,
  total,
  caja_id,
  medio_pago // ← CORRECTO
}) => {
  const result = await pool.query(
    `INSERT INTO ventas (cliente_id, fecha, fecha_fin, modulo_id, estado, observaciones, total)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id`,
    [cliente_id, fecha, fecha_fin, modulo_id, estado, observaciones, total]
  );

  const ventaId = result.rows[0].id;

  if (estado.toLowerCase() === 'finalizado') {
    if (!caja_id) throw new Error('Falta caja_id para registrar el movimiento.');
    if (!medio_pago) throw new Error('Falta medio_pago para registrar el movimiento.');

    await registrarMovimientoCaja({
      caja_id,
      tipo_movimiento: 'ingreso',
      origen: 'venta',
      referencia_id: ventaId,
      descripcion: `Ingreso por venta N° ${ventaId}`,
      monto: total,
      medio_pago
    });
  }

  return ventaId;
};
