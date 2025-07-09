// import {
//   crearContacto
// /*   obtenerContactoPorId,
//   obtenerTodosLosContactos,
//   actualizarContacto,
//   eliminarContacto */
// } from "./contactosServices.js";
// import { crearContacto as crearContactoService } from "./contactosServices.js";
// export const crearContacto = async (req, res) => {
//   try {
//     const {
//       nombre,
//       apellido,
//       email,
//       telefono,
//       direccion,
//       ciudad_id,
//       estado,
//       observaciones
//     } = req.body;
//     const id = await crearContactoService({
//       nombre,
//       apellido,
//       email,
//       telefono,
//       direccion,
//       ciudad_id,
//       estado,
//       observaciones
//     });
//     res.status(201).json({ id });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };
/* export const obtenerContactoPorId = async (req, res) => {
  try {
    const contacto = await obtenerContactoPorId(req.params.id);
    if (!contacto) return res.status(404).json({ mensaje: "No encontrado" });
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const obtenerTodosLosContactos = async (req, res) => {
  try {
    const contactos = await obtenerTodosLosContactos();
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const actualizarContacto = async (req, res) => {
  try {
    const contacto = await actualizarContacto(req.params.id, req.body);
    res.json(contacto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const eliminarContacto = async (req, res) => {
  try {
    const result = await eliminarContacto(req.params.id);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
} */
"use strict";