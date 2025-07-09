"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearArticulo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../database/keys"));
var crearArticulo = exports.crearArticulo = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(_ref) {
    var nombre, descripcion, categoria_id, precio_base, activo, articulo_tipo, result, ArticuloId;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          nombre = _ref.nombre, descripcion = _ref.descripcion, categoria_id = _ref.categoria_id, precio_base = _ref.precio_base, activo = _ref.activo, articulo_tipo = _ref.articulo_tipo;
          _context.next = 1;
          return _keys["default"].query('INSERT INTO articulos(nombre, descripcion, categoria_id, precio_base, activo, articulo_tipo) VALUES ($1,$2,$3,$4,$5,$6) RETURNING id', [nombre, descripcion, categoria_id, precio_base, activo, articulo_tipo]);
        case 1:
          result = _context.sent;
          ArticuloId = result.rows[0].id;
          return _context.abrupt("return", ArticuloId);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function crearArticulo(_x) {
    return _ref2.apply(this, arguments);
  };
}();