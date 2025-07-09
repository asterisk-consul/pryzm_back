"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _cajaController = require("./cajaController");
var router = (0, _express.Router)();
router.post('/abrir', _cajaController.abrirCaja);
router.post('/movimiento', _cajaController.registrarMovimiento);
router.post('/nuevaCaja', _cajaController.crearCaja);
router.get('/historial/:caja_id', _cajaController.historial);
var _default = exports["default"] = router;