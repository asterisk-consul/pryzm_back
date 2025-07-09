

import * as ventasService from '@ventas/ventas.services';

export const crearVenta = async (req, res) => {
  try {
    const {
      cliente_id,
      fecha,
      fecha_fin,
      modulo_id,
      estado,
      observaciones,
      total,
      caja_id,
      medio_pago,
    } = req.body;

    // Lógica delegada al service
    const ventaId = await ventasService.crearVenta({
      cliente_id,
      fecha,
      fecha_fin,
      modulo_id,
      estado,
      observaciones,
      total,
      caja_id,
      medio_pago
    });

    res.status(201).json({ message: 'Venta creada correctamente', ventaId });
  } catch (error) {
    console.error('Error al crear venta:', error.message);
    res.status(500).json({ error: 'Error al crear la venta' });
  }
};
