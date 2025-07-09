"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _contactosServices = require("./contactosServices.js");
var router = _express["default"].Router();
router.post("/", _contactosServices.crearContacto);
/* router.get("/", obtenerTodosLosContactos);
router.get("/:id", obtenerContactoPorId);
router.put("/:id", actualizarContacto);
router.delete("/:id", eliminarContacto); */
var _default = exports["default"] = router;