"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registrarMovimientoCaja = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../components/database/keys"));
var registrarMovimientoCaja = exports.registrarMovimientoCaja = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var tipo_movimiento, origen, referencia_id, descripcion, monto, medio_pago, caja_id, aperturaResult, caja_apertura_id;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          tipo_movimiento = _ref.tipo_movimiento, origen = _ref.origen, referencia_id = _ref.referencia_id, descripcion = _ref.descripcion, monto = _ref.monto, medio_pago = _ref.medio_pago, caja_id = _ref.caja_id;
          _context.next = 1;
          return _keys["default"].query("SELECT id FROM caja_apertura WHERE caja_id = $1 AND estado = 'abierta' ORDER BY id DESC LIMIT 1", [caja_id]);
        case 1:
          aperturaResult = _context.sent;
          if (!(aperturaResult.rowCount === 0)) {
            _context.next = 2;
            break;
          }
          throw new Error('No hay una apertura de caja activa.');
        case 2:
          caja_apertura_id = aperturaResult.rows[0].id;
          console.log("Caja apertura ID encontrada:", caja_apertura_id); // LOG para debugging
          if (caja_apertura_id) {
            _context.next = 3;
            break;
          }
          throw new Error("No se obtuvo un ID de apertura válido.");
        case 3:
          _context.next = 4;
          return _keys["default"].query("INSERT INTO caja_movimientos (caja_apertura_id, tipo_movimiento, origen, referencia_id, descripcion, monto, medio_pago)\n       VALUES ($1, $2, $3, $4, $5, $6, $7)", [caja_apertura_id, tipo_movimiento, origen, referencia_id, descripcion, monto, medio_pago]);
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function registrarMovimientoCaja(_x) {
    return _ref2.apply(this, arguments);
  };
}();