"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearVenta = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var ventasService = _interopRequireWildcard(require("./ventas.services"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
var crearVenta = exports.crearVenta = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, cliente_id, fecha, fecha_fin, modulo_id, estado, observaciones, total, caja_id, medio_pago, ventaId, _t;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, cliente_id = _req$body.cliente_id, fecha = _req$body.fecha, fecha_fin = _req$body.fecha_fin, modulo_id = _req$body.modulo_id, estado = _req$body.estado, observaciones = _req$body.observaciones, total = _req$body.total, caja_id = _req$body.caja_id, medio_pago = _req$body.medio_pago; // Lógica delegada al service
          _context.next = 1;
          return ventasService.crearVenta({
            cliente_id: cliente_id,
            fecha: fecha,
            fecha_fin: fecha_fin,
            modulo_id: modulo_id,
            estado: estado,
            observaciones: observaciones,
            total: total,
            caja_id: caja_id,
            medio_pago: medio_pago
          });
        case 1:
          ventaId = _context.sent;
          res.status(201).json({
            message: 'Venta creada correctamente',
            ventaId: ventaId
          });
          _context.next = 3;
          break;
        case 2:
          _context.prev = 2;
          _t = _context["catch"](0);
          console.error('Error al crear venta:', _t.message);
          res.status(500).json({
            error: 'Error al crear la venta'
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function crearVenta(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();