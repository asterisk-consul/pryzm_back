import pool from '@database/keys';

export const crearArticulo = async ({
    
nombre,
descripcion,
categoria_id,
precio_base,
activo,
articulo_tipo
}) => {
    const result = await pool.query(
        'INSERT INTO articulos(nombre, descripcion, categoria_id, precio_base, activo, articulo_tipo) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id',
        [nombre, descripcion, categoria_id, precio_base, activo, articulo_tipo]
        
    );

    const ArticuloId = result.rows[0].id
    return ArticuloId;
}