"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerTiposPerfil = exports.obtenerPerfiles = exports.obtenerPerfilPorId = exports.eliminarPerfil = exports.crearPerfil = exports.actualizarPerfil = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../database/keys"));
// Crear Perfil
var crearPerfil = exports.crearPerfil = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var nombre, telefono, direccion, tipo_perfil_id, ciudad_id, creado_por_usuario_id, datos, _ref$activo, activo, result;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = _ref.nombre, telefono = _ref.telefono, direccion = _ref.direccion, tipo_perfil_id = _ref.tipo_perfil_id, ciudad_id = _ref.ciudad_id, creado_por_usuario_id = _ref.creado_por_usuario_id, datos = _ref.datos, _ref$activo = _ref.activo, activo = _ref$activo === void 0 ? true : _ref$activo;
          _context.next = 1;
          return _keys["default"].query('INSERT INTO perfiles(nombre, telefono, direccion, tipo_perfil_id, ciudad_id, creado_por_usuario_id,  datos, activo) VALUES ($1, $2, $3, $4, $5, $6, $7, $8 ) RETURNING id', [nombre, telefono, direccion, tipo_perfil_id, ciudad_id, creado_por_usuario_id, datos, activo]);
        case 1:
          result = _context.sent;
          return _context.abrupt("return", result.rows[0].id);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function crearPerfil(_x) {
    return _ref2.apply(this, arguments);
  };
}();

// Obtener todos los perfiles
var obtenerPerfiles = exports.obtenerPerfiles = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var result;
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 1;
          return _keys["default"].query('SELECT * FROM perfiles');
        case 1:
          result = _context2.sent;
          return _context2.abrupt("return", result.rows);
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function obtenerPerfiles() {
    return _ref3.apply(this, arguments);
  };
}();

// Obtener un perfil por ID
var obtenerPerfilPorId = exports.obtenerPerfilPorId = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(id) {
    var result;
    return _regenerator["default"].wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 1;
          return _keys["default"].query('SELECT * FROM perfiles WHERE id = $1', [id]);
        case 1:
          result = _context3.sent;
          return _context3.abrupt("return", result.rows[0]);
        case 2:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function obtenerPerfilPorId(_x2) {
    return _ref4.apply(this, arguments);
  };
}();

// Actualizar un perfil
var actualizarPerfil = exports.actualizarPerfil = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(id, _ref5) {
    var nombre, telefono, direccion, tipo_perfil_id, ciudad_id, updated_at, result;
    return _regenerator["default"].wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          nombre = _ref5.nombre, telefono = _ref5.telefono, direccion = _ref5.direccion, tipo_perfil_id = _ref5.tipo_perfil_id, ciudad_id = _ref5.ciudad_id, updated_at = _ref5.updated_at;
          _context4.next = 1;
          return _keys["default"].query('UPDATE perfiles SET nombre = $1, telefono = $2, direccion = $3, tipo_perfil_id = $4, ciudad_id = $5, updated_at = $6 WHERE id = $7 RETURNING *', [nombre, telefono, direccion, tipo_perfil_id, ciudad_id, updated_at, id]);
        case 1:
          result = _context4.sent;
          return _context4.abrupt("return", result.rows[0]);
        case 2:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function actualizarPerfil(_x3, _x4) {
    return _ref6.apply(this, arguments);
  };
}();

// Eliminar un perfil
var eliminarPerfil = exports.eliminarPerfil = /*#__PURE__*/function () {
  var _ref7 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5(id) {
    var result;
    return _regenerator["default"].wrap(function (_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 1;
          return _keys["default"].query('DELETE FROM perfiles WHERE id = $1 RETURNING *', [id]);
        case 1:
          result = _context5.sent;
          return _context5.abrupt("return", result.rows[0]);
        case 2:
        case "end":
          return _context5.stop();
      }
    }, _callee5);
  }));
  return function eliminarPerfil(_x5) {
    return _ref7.apply(this, arguments);
  };
}();

// tipo de perfil 

var obtenerTiposPerfil = exports.obtenerTiposPerfil = /*#__PURE__*/function () {
  var _ref8 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee6() {
    var result;
    return _regenerator["default"].wrap(function (_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 1;
          return _keys["default"].query('SELECT * FROM perfil_tipo');
        case 1:
          result = _context6.sent;
          return _context6.abrupt("return", result.rows);
        case 2:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return function obtenerTiposPerfil() {
    return _ref8.apply(this, arguments);
  };
}();