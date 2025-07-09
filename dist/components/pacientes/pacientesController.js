"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _keys = _interopRequireDefault(require("../database/keys"));
var _dateformatter = require("../../utils/dateformatter");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var AdminPacientes = {};

// Función para formatear fechas
// const formatearFecha = (fecha) => {
//   const fechaObj = new Date(fecha); // Convierte la cadena de fecha en un objeto Date
//   const year = fechaObj.getFullYear(); // Obtiene el año
//   const month = String(fechaObj.getMonth() + 1).padStart(2, '0'); // Obtiene el mes (y le suma 1 porque los meses en JS comienzan desde 0)
//   const day = String(fechaObj.getDate()).padStart(2, '0'); // Obtiene el día

//   return `${year}-${month}-${day}`; // Devuelve la fecha en el formato YYYY-MM-DD
// };

// Crear un paciente
AdminPacientes.CrearPaciente = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, nombre, apellido, fecha_nacimiento, genero, telefono, email, direccion, _t;
    return _regenerator["default"].wrap(function (_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, nombre = _req$body.nombre, apellido = _req$body.apellido, fecha_nacimiento = _req$body.fecha_nacimiento, genero = _req$body.genero, telefono = _req$body.telefono, email = _req$body.email, direccion = _req$body.direccion;
          _context.prev = 1;
          _context.next = 2;
          return _keys["default"].query('INSERT INTO pacientes(nombre, apellido, fecha_nacimiento, genero, telefono, email, direccion) VALUES ($1, $2, $3, $4, $5, $6, $7)', [nombre, apellido, fecha_nacimiento, genero, telefono, email, direccion]);
        case 2:
          // Respuesta exitosa
          res.status(200).json({
            message: 'Paciente creado exitosamente'
          });
          _context.next = 4;
          break;
        case 3:
          _context.prev = 3;
          _t = _context["catch"](1);
          console.log('Error al insertar', _t);
          res.status(500).json({
            message: 'An error has occurred',
            error: _t
          });
        case 4:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[1, 3]]);
  }));
  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Obtener todos los pacientes
AdminPacientes.ObtenerPacientes = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var result, pacientesFormateados, _t2;
    return _regenerator["default"].wrap(function (_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 1;
          return _keys["default"].query('SELECT * FROM pacientes');
        case 1:
          result = _context2.sent;
          // Consulta para obtener todos los pacientes
          // Formatear las fechas de los pacientes antes de enviarlos
          pacientesFormateados = result.rows.map(function (paciente) {
            return _objectSpread(_objectSpread({}, paciente), {}, {
              fecha_nacimiento: (0, _dateformatter.formatearFecha)(paciente.fecha_nacimiento)
            });
          }); // Enviar los datos formateados al frontend
          res.status(200).json(pacientesFormateados);
          _context2.next = 3;
          break;
        case 2:
          _context2.prev = 2;
          _t2 = _context2["catch"](0);
          console.error('Error al obtener pacientes:', _t2);
          res.status(500).json({
            message: 'An error has occurred',
            error: _t2
          });
        case 3:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 2]]);
  }));
  return function (_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
AdminPacientes.DeletePacientes = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, _t3;
    return _regenerator["default"].wrap(function (_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id_paciente;
          _context3.prev = 1;
          _context3.next = 2;
          return _keys["default"].query('DELETE FROM pacientes WHERE id_paciente = $1', [id]);
        case 2:
          res.status(200).json({
            message: 'El paciente se eliminó correctamente'
          });
          _context3.next = 4;
          break;
        case 3:
          _context3.prev = 3;
          _t3 = _context3["catch"](1);
          console.error('Error al eliminar el turno:', _t3);
          res.status(500).json({
            message: 'Error interno del servidor',
            error: _t3
          });
        case 4:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 3]]);
  }));
  return function (_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
module.exports = AdminPacientes;