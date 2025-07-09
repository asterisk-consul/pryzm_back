"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.obtenerContactoPorId = exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _pg = require("pg");
var _dotenv = _interopRequireDefault(require("dotenv"));
_dotenv["default"].config();
var pool = new _pg.Pool({
  host: process.env.HOST,
  port: process.env.PORTDB,
  user: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});
var _default = exports["default"] = pool;
var obtenerContactoPorId = exports.obtenerContactoPorId = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(id) {
    var result;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 1;
          return _pg.Pool.query("SELECT * FROM crm_contactos WHERE id = $1", [id]);
        case 1:
          result = _context.sent;
          return _context.abrupt("return", result.rows[0]);
        case 2:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function obtenerContactoPorId(_x) {
    return _ref.apply(this, arguments);
  };
}();

/* import { crearContacto } from '@components/contactos/contactosServices.js';
import Pool from '@database/keys.js';

afterAll(async () => {
  await Pool.query(`DELETE FROM crm_contactos WHERE email = 'tony@starkindustries.com'`);
  await Pool.end();
});

test('crearContacto inserta correctamente un contacto', async () => {
  const contacto = {
    nombre: 'Tony',
    apellido: 'Stark',
    email: 'tony@starkindustries.com',
    telefono: '123456789',
    direccion: 'Av. Stark 123',
    ciudad_id: 1, // que exista en tu base
    estado: 'activo',
    observaciones: 'Cliente VIP'
  };

  const id = await crearContacto(contacto);

  expect(typeof id).toBe('number');

  const result = await Pool.query('SELECT * FROM crm_contactos WHERE id = $1', [id]);
  expect(result.rows[0].email).toBe(contacto.email);
});
 */