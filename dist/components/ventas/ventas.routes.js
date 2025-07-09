"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _ventasController = require("./ventasController.js");
// Ajusta el path si es diferente

var router = (0, _express.Router)();

// Ruta para registrar una nueva venta
router.post('/ventas', _ventasController.crearVenta);

// Aquí podés agregar más rutas: listar, buscar, actualizar, etc.
// Por ejemplo:
// router.get('/ventas', listarVentas);
// router.get('/ventas/:id', obtenerVentaPorId);
var _default = exports["default"] = router;