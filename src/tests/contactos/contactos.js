import { Pool } from "pg";
import dotenv from "dotenv";
dotenv.config();

const pool = new Pool({
  host: process.env.HOST,
  port: process.env.PORTDB,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

export default pool;



 export const obtenerContactoPorId = async (id) => {
    const result = await Pool.query(
        `SELECT * FROM crm_contactos WHERE id = $1`,
        [id]
    );

    return result.rows[0]; 
};


/* import { crearContacto } from '@components/contactos/contactosServices.js';
import Pool from '@database/keys.js';

afterAll(async () => {
  await Pool.query(`DELETE FROM crm_contactos WHERE email = 'tony@starkindustries.com'`);
  await Pool.end();
});

test('crearContacto inserta correctamente un contacto', async () => {
  const contacto = {
    nombre: 'Tony',
    apellido: 'Stark',
    email: 'tony@starkindustries.com',
    telefono: '123456789',
    direccion: 'Av. Stark 123',
    ciudad_id: 1, // que exista en tu base
    estado: 'activo',
    observaciones: 'Cliente VIP'
  };

  const id = await crearContacto(contacto);

  expect(typeof id).toBe('number');

  const result = await Pool.query('SELECT * FROM crm_contactos WHERE id = $1', [id]);
  expect(result.rows[0].email).toBe(contacto.email);
});
 */