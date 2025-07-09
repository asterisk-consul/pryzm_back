"use strict";

var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var PerfilesController = _interopRequireWildcard(require("./perfilesController.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// Asegúrate de que el alias esté bien resuelto

var router = (0, _express.Router)();

// Crear perfil
router.post('/', PerfilesController.crearPerfil);

// Obtener todos los perfiles
router.get('/', PerfilesController.obtenerPerfiles);
// Obtener tipos de perfil
router.get('/tipos', PerfilesController.obtenerTiposPerfil);

// Obtener perfil por ID
router.get('/:id', PerfilesController.obtenerPerfilPorId);

// Actualizar perfil
router.put('/:id', PerfilesController.actualizarPerfil);

// Eliminar perfil
router["delete"]('/:id', PerfilesController.eliminarPerfil);
var _default = exports["default"] = router;