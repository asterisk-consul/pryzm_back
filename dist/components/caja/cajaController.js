"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarMovimiento = exports.historial = exports.crearCaja = exports.abrirCaja = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../database/keys"));
var crearCaja = exports.crearCaja = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, sucursal_id, activa, result, _t;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, sucursal_id = _req$body.sucursal_id, activa = _req$body.activa;
          _context.prev = 1;
          if (!(!nombre || !sucursal_id)) {
            _context.next = 2;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            error: 'Nombre y sucursal_id son campos obligatorios'
          }));
        case 2:
          _context.next = 3;
          return _keys["default"].query("INSERT INTO public.caja (nombre, descripcion, sucursal_id, activa)\n       VALUES ($1, $2, $3, $4) RETURNING *", [nombre, descripcion || null, sucursal_id, activa || true]);
        case 3:
          result = _context.sent;
          res.status(201).json(result.rows[0]);
          _context.next = 5;
          break;
        case 4:
          _context.prev = 4;
          _t = _context["catch"](1);
          res.status(500).json({
            error: _t.message
          });
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 4]]);
  }));
  return function crearCaja(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var abrirCaja = exports.abrirCaja = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body2, usuario_id, caja_id, monto_inicial, result, _t2;
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body2 = req.body, usuario_id = _req$body2.usuario_id, caja_id = _req$body2.caja_id, monto_inicial = _req$body2.monto_inicial;
          _context2.prev = 1;
          _context2.next = 2;
          return _keys["default"].query("INSERT INTO caja_apertura (usuario_id,caja_id, monto_inicial)\n       VALUES ($1, $2, $3) RETURNING *", [usuario_id, caja_id, monto_inicial]);
        case 2:
          result = _context2.sent;
          res.json(result.rows[0]);
          _context2.next = 4;
          break;
        case 3:
          _context2.prev = 3;
          _t2 = _context2["catch"](1);
          res.status(500).json({
            error: _t2.message
          });
        case 4:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[1, 3]]);
  }));
  return function abrirCaja(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var registrarMovimiento = exports.registrarMovimiento = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var _req$body3, caja_apertura_id, tipo_movimiento, monto, descripcion, result, _t3;
    return _regenerator["default"].wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _req$body3 = req.body, caja_apertura_id = _req$body3.caja_apertura_id, tipo_movimiento = _req$body3.tipo_movimiento, monto = _req$body3.monto, descripcion = _req$body3.descripcion;
          _context3.prev = 1;
          _context3.next = 2;
          return _keys["default"].query("INSERT INTO caja_movimientos (caja_apertura_id   , tipo_movimiento  , monto, descripcion)\n       VALUES ($1, $2, $3, $4) RETURNING *", [caja_apertura_id, tipo_movimiento, monto, descripcion]);
        case 2:
          result = _context3.sent;
          res.json(result.rows[0]);
          _context3.next = 4;
          break;
        case 3:
          _context3.prev = 3;
          _t3 = _context3["catch"](1);
          res.status(500).json({
            error: _t3.message
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function registrarMovimiento(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var historial = exports.historial = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var caja_id, result, _t4;
    return _regenerator["default"].wrap(function (_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          caja_id = req.params.caja_id;
          _context4.prev = 1;
          _context4.next = 2;
          return _keys["default"].query("SELECT * FROM caja_movimientos WHERE caja_id = $1 ORDER BY creado_en DESC", [caja_id]);
        case 2:
          result = _context4.sent;
          res.json(result.rows);
          _context4.next = 4;
          break;
        case 3:
          _context4.prev = 3;
          _t4 = _context4["catch"](1);
          res.status(500).json({
            error: _t4.message
          });
        case 4:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 3]]);
  }));
  return function historial(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();