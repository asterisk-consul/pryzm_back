"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerTiposPerfil = exports.obtenerPerfiles = exports.obtenerPerfilPorId = exports.eliminarPerfil = exports.crearPerfil = exports.actualizarPerfil = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var PerfilesServices = _interopRequireWildcard(require("./perfilesServices.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t7 in e) "default" !== _t7 && {}.hasOwnProperty.call(e, _t7) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t7)) && (i.get || i.set) ? o(f, _t7, i) : f[_t7] = e[_t7]); return f; })(e, t); }
// Crear Perfil
var crearPerfil = exports.crearPerfil = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, telefono, direccion, tipo_perfil_id, ciudad_id, creado_por_usuario_id, datos, perfilId, _t;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nombre = _req$body.nombre, telefono = _req$body.telefono, direccion = _req$body.direccion, tipo_perfil_id = _req$body.tipo_perfil_id, ciudad_id = _req$body.ciudad_id, creado_por_usuario_id = _req$body.creado_por_usuario_id, datos = _req$body.datos;
          _context.next = 1;
          return PerfilesServices.crearPerfil({
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            tipo_perfil_id: tipo_perfil_id,
            ciudad_id: ciudad_id,
            creado_por_usuario_id: creado_por_usuario_id,
            datos: datos
          });
        case 1:
          perfilId = _context.sent;
          res.status(201).json({
            message: 'Perfil creado correctamente',
            perfilId: perfilId
          });
          _context.next = 3;
          break;
        case 2:
          _context.prev = 2;
          _t = _context["catch"](0);
          console.error('Error al crear el perfil:', _t.message);
          res.status(500).json({
            error: 'Error al crear el perfil'
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function crearPerfil(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Obtener todos los perfiles activos
var obtenerPerfiles = exports.obtenerPerfiles = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var perfiles, _t2;
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 1;
          return PerfilesServices.obtenerPerfiles();
        case 1:
          perfiles = _context2.sent;
          res.status(200).json(perfiles);
          _context2.next = 3;
          break;
        case 2:
          _context2.prev = 2;
          _t2 = _context2["catch"](0);
          console.error('Error al obtener los perfiles:', _t2.message);
          res.status(500).json({
            error: 'Error al obtener los perfiles'
          });
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function obtenerPerfiles(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// obtener tipos de perfil

var obtenerTiposPerfil = exports.obtenerTiposPerfil = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var perfiles, _t3;
    return _regenerator["default"].wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 1;
          return PerfilesServices.obtenerTiposPerfil();
        case 1:
          perfiles = _context3.sent;
          res.status(200).json(perfiles);
          _context3.next = 3;
          break;
        case 2:
          _context3.prev = 2;
          _t3 = _context3["catch"](0);
          console.error('Error al obtener los perfiles:', _t3.message);
          res.status(500).json({
            error: 'Error al obtener los perfiles'
          });
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 2]]);
  }));
  return function obtenerTiposPerfil(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Obtener un perfil activo por ID
var obtenerPerfilPorId = exports.obtenerPerfilPorId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, perfil, _t4;
    return _regenerator["default"].wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 1;
          return PerfilesServices.obtenerPerfilPorId(id);
        case 1:
          perfil = _context4.sent;
          if (perfil) {
            _context4.next = 2;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: 'Perfil no encontrado'
          }));
        case 2:
          res.status(200).json(perfil);
          _context4.next = 4;
          break;
        case 3:
          _context4.prev = 3;
          _t4 = _context4["catch"](0);
          console.error('Error al obtener el perfil:', _t4.message);
          res.status(500).json({
            error: 'Error al obtener el perfil'
          });
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 3]]);
  }));
  return function obtenerPerfilPorId(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Actualizar Perfil
var actualizarPerfil = exports.actualizarPerfil = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, _req$body2, nombre, telefono, direccion, tipo_perfil_id, ciudad_id, usuario_id, datos, perfilActualizado, _t5;
    return _regenerator["default"].wrap(function (_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, telefono = _req$body2.telefono, direccion = _req$body2.direccion, tipo_perfil_id = _req$body2.tipo_perfil_id, ciudad_id = _req$body2.ciudad_id, usuario_id = _req$body2.usuario_id, datos = _req$body2.datos;
          _context5.next = 1;
          return PerfilesServices.actualizarPerfil(id, {
            nombre: nombre,
            telefono: telefono,
            direccion: direccion,
            tipo_perfil_id: tipo_perfil_id,
            ciudad_id: ciudad_id,
            usuario_id: usuario_id,
            datos: datos
          });
        case 1:
          perfilActualizado = _context5.sent;
          if (perfilActualizado) {
            _context5.next = 2;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: 'Perfil no encontrado'
          }));
        case 2:
          res.status(200).json({
            message: 'Perfil actualizado correctamente',
            perfil: perfilActualizado
          });
          _context5.next = 4;
          break;
        case 3:
          _context5.prev = 3;
          _t5 = _context5["catch"](0);
          console.error('Error al actualizar el perfil:', _t5.message);
          res.status(500).json({
            error: 'Error al actualizar el perfil'
          });
        case 4:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 3]]);
  }));
  return function actualizarPerfil(_x9, _x0) {
    return _ref5.apply(this, arguments);
  };
}();

// Baja lógica (soft delete)
var eliminarPerfil = exports.eliminarPerfil = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, perfilEliminado, _t6;
    return _regenerator["default"].wrap(function (_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 1;
          return PerfilesServices.eliminarPerfil(id);
        case 1:
          perfilEliminado = _context6.sent;
          if (perfilEliminado) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: 'Perfil no encontrado'
          }));
        case 2:
          res.status(200).json({
            message: 'Perfil desactivado correctamente (baja lógica)',
            perfil: perfilEliminado
          });
          _context6.next = 4;
          break;
        case 3:
          _context6.prev = 3;
          _t6 = _context6["catch"](0);
          console.error('Error al eliminar (desactivar) el perfil:', _t6.message);
          res.status(500).json({
            error: 'Error al eliminar (desactivar) el perfil'
          });
        case 4:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return function eliminarPerfil(_x1, _x10) {
    return _ref6.apply(this, arguments);
  };
}();