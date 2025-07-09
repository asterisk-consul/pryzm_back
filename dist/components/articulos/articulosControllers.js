"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.crearArticulo = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var ArticulosServices = _interopRequireWildcard(require("./articulos.services"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t2 in e) "default" !== _t2 && {}.hasOwnProperty.call(e, _t2) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t2)) && (i.get || i.set) ? o(f, _t2, i) : f[_t2] = e[_t2]); return f; })(e, t); }
var crearArticulo = exports.crearArticulo = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, categoria_id, precio_base, activo, articulo_tipo, ArticuloId, _t;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion, categoria_id = _req$body.categoria_id, precio_base = _req$body.precio_base, activo = _req$body.activo, articulo_tipo = _req$body.articulo_tipo;
          _context.next = 1;
          return ArticulosServices.crearArticulo({
            nombre: nombre,
            descripcion: descripcion,
            categoria_id: categoria_id,
            precio_base: precio_base,
            activo: activo,
            articulo_tipo: articulo_tipo
          });
        case 1:
          ArticuloId = _context.sent;
          res.status(201).json({
            message: 'Artículo creado correctamente',
            ArticuloId: ArticuloId
          });
          _context.next = 3;
          break;
        case 2:
          _context.prev = 2;
          _t = _context["catch"](0);
          console.error('Error al crear el artículo:', _t.message);
          res.status(500).json({
            error: 'Error al crear el artículo'
          });
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 2]]);
  }));
  return function crearArticulo(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();