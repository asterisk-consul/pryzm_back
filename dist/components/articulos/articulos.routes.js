"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _articulosSercices = require("./articulos.sercices.js");
// Asegurate que el alias esté bien resuelto

var router = (0, _express.Router)();

// Ruta POST para crear un artículo
router.post('/api', _articulosSercices.crearArticulo);
var _default = exports["default"] = router;