// import Pool from '@database/keys';

//  export const obtenerContactoPorId = async (id) => {
//     const result = await Pool.query(
//         `SELECT * FROM crm_contactos WHERE id = $1`,
//         [id]
//     );

//     return result.rows[0];
// };

/* export const crearContacto = async ({
    nombre,
    apellido,
    email,
    telefono,
    direccion,
    ciudad_id,
    estado,
    observaciones
    }) => {
    const result = await Pool.query(
        `INSERT INTO crm_contactos (nombre, apellido, email, telefono, direccion, ciudad_id, estado, observaciones)
         VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
         RETURNING id`,
        [nombre, apellido, email, telefono, direccion, ciudad_id, estado, observaciones]
    );
    
    return result.rows[0].id;
    } */

/* export const obtenerContactoPorId = async (id) => {
    const result = await Pool.query(
        `SELECT * FROM crm_contactos WHERE id = $1`,
        [id]
    );

    return result.rows[0]; 
};

export const obtenerTodosLosContactos = async () => {
    const result = await Pool.query(
        `SELECT * FROM crm_contactos`
    );

    return result.rows; 
};


export const actualizarContacto = async (id, {
    nombre,
    apellido,
    email,
    telefono,
    direccion,
    ciudad_id,
    estado,
    observaciones
}) => {
    const result = await Pool.query(
        `UPDATE crm_contactos SET
            nombre = $1,
            apellido = $2,
            email = $3,
            telefono = $4,
            direccion = $5,
            ciudad_id = $6,
            estado = $7,
            observaciones = $8
         WHERE id = $9
         RETURNING *`,
        [nombre, apellido, email, telefono, direccion, ciudad_id, estado, observaciones, id]
    );

    return result.rows[0]; // Devuelve el contacto actualizado
};

export const eliminarContacto = async (id) => {
    await Pool.query(
        `DELETE FROM crm_contactos WHERE id = $1`,
        [id]
    );

    return { mensaje: "Contacto eliminado correctamente." };
};
 */
"use strict";