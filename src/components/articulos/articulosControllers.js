import * as ArticulosServices from '@articulos/articulos.services';

export const crearArticulo = async (req, res) => {
  try {
    const {
      nombre,
      descripcion,
      categoria_id,
      precio_base,
      activo,
      articulo_tipo,
    } = req.body;

    const ArticuloId = await ArticulosServices.crearArticulo({
      nombre,
      descripcion,
      categoria_id,
      precio_base,
      activo,
      articulo_tipo,
    });

    res.status(201).json({
      message: 'Artículo creado correctamente',
      ArticuloId,
    });
  } catch (error) {
    console.error('Error al crear el artículo:', error.message);
    res.status(500).json({ error: 'Error al crear el artículo' });
  }
};
