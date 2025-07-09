"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearVenta = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../database/keys"));
var _movimientosCajaService = require("../../services/movimientosCaja.service.js");
var crearVenta = exports.crearVenta = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var cliente_id, fecha, fecha_fin, modulo_id, estado, observaciones, total, caja_id, medio_pago, result, ventaId;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          cliente_id = _ref.cliente_id, fecha = _ref.fecha, fecha_fin = _ref.fecha_fin, modulo_id = _ref.modulo_id, estado = _ref.estado, observaciones = _ref.observaciones, total = _ref.total, caja_id = _ref.caja_id, medio_pago = _ref.medio_pago;
          _context.next = 1;
          return _keys["default"].query("INSERT INTO ventas (cliente_id, fecha, fecha_fin, modulo_id, estado, observaciones, total)\n     VALUES ($1, $2, $3, $4, $5, $6, $7)\n     RETURNING id", [cliente_id, fecha, fecha_fin, modulo_id, estado, observaciones, total]);
        case 1:
          result = _context.sent;
          ventaId = result.rows[0].id;
          if (!(estado.toLowerCase() === 'finalizado')) {
            _context.next = 4;
            break;
          }
          if (caja_id) {
            _context.next = 2;
            break;
          }
          throw new Error('Falta caja_id para registrar el movimiento.');
        case 2:
          if (medio_pago) {
            _context.next = 3;
            break;
          }
          throw new Error('Falta medio_pago para registrar el movimiento.');
        case 3:
          _context.next = 4;
          return (0, _movimientosCajaService.registrarMovimientoCaja)({
            caja_id: caja_id,
            tipo_movimiento: 'ingreso',
            origen: 'venta',
            referencia_id: ventaId,
            descripcion: "Ingreso por venta N\xB0 ".concat(ventaId),
            monto: total,
            medio_pago: medio_pago
          });
        case 4:
          return _context.abrupt("return", ventaId);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function crearVenta(_x) {
    return _ref2.apply(this, arguments);
  };
}();