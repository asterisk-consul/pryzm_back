import * as ubicacionServices from './ubicacionServices.js';


export const obtenerCiudades = async (req, res) => {
  try {
    const ciudades = await ubicacionServices.obtenerCiudades();
    res.status(200).json(ciudades);
  } catch (error) {
    console.error('Error al obtener las ciudades:', error.message);
    res.status(500).json({ error: 'Error al obtener las ciudades' });
  }
}