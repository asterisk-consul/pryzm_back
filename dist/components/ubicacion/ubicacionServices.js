"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerCiudades = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../database/keys"));
var obtenerCiudades = exports.obtenerCiudades = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    var result;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return _keys["default"].query('SELECT * FROM ciudades');
        case 1:
          result = _context.sent;
          return _context.abrupt("return", result.rows);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function obtenerCiudades() {
    return _ref.apply(this, arguments);
  };
}();