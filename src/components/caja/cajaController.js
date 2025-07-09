import pool from '@database/keys';

export const crearCaja = async (req, res) => {
  const { nombre, descripcion, sucursal_id, activa } = req.body;
  
  try {
    // Verificar si los campos obligatorios están presentes
    if (!nombre || !sucursal_id) {
      return res.status(400).json({ error: 'Nombre y sucursal_id son campos obligatorios' });
    }

    const result = await pool.query(
      `INSERT INTO public.caja (nombre, descripcion, sucursal_id, activa)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [nombre, descripcion || null, sucursal_id, activa || true]
    );
    
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const abrirCaja = async (req, res) => {
  const { usuario_id, caja_id, monto_inicial } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO caja_apertura (usuario_id,caja_id, monto_inicial)
       VALUES ($1, $2, $3) RETURNING *`,
      [usuario_id, caja_id, monto_inicial]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const registrarMovimiento = async (req, res) => {
  const { caja_apertura_id , tipo_movimiento, monto, descripcion } = req.body;
  try {
    const result = await pool.query(
      `INSERT INTO caja_movimientos (caja_apertura_id   , tipo_movimiento  , monto, descripcion)
       VALUES ($1, $2, $3, $4) RETURNING *`,
      [caja_apertura_id  , tipo_movimiento , monto, descripcion]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const historial = async (req, res) => {
  const { caja_id } = req.params;
  try {
    const result = await pool.query(
      `SELECT * FROM caja_movimientos WHERE caja_id = $1 ORDER BY creado_en DESC`,
      [caja_id]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};