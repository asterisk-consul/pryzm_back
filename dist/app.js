"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
require("module-alias/register");
var _cors = _interopRequireDefault(require("cors"));
var _expressFileupload = _interopRequireDefault(require("express-fileupload"));
var _connectHistoryApiFallback = _interopRequireDefault(
  require("connect-history-api-fallback")
);
var _path = _interopRequireDefault(require("path"));
require("dotenv/config");
var _auth = _interopRequireDefault(require("./components/auth/auth.routes"));
var _whatsapp = _interopRequireDefault(
  require("./components/whatsapp/whatsapp.routes")
);
var _turnos = _interopRequireDefault(
  require("./components/turnos/turnos.routes")
);
var _pacientes = _interopRequireDefault(
  require("./components/pacientes/pacientes.routes")
);
var _consultorios = _interopRequireDefault(
  require("./components/consultorios/consultorios.routes")
);
var _tratamientos = _interopRequireDefault(
  require("./components/tratamientos/tratamientos.routes")
);
var _caja = _interopRequireDefault(require("./components/caja/caja.routes"));
var _ventas = _interopRequireDefault(
  require("./components/ventas/ventas.routes")
);
var _articulos = _interopRequireDefault(
  require("./components/articulos/articulos.routes")
);
var _perfiles = _interopRequireDefault(
  require("./components/perfiles/perfiles.routes")
);
var _ubicacion = _interopRequireDefault(
  require("./components/ubicacion/ubicacion.routes")
);
// Importar rutas

// import contactosRoute from "./components/contactos/contactos.routes";

var app = (0, _express["default"])();

// Middlewares
app.use((0, _morgan["default"])("tiny"));
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(
  _express["default"].urlencoded({
    extended: true,
  })
);
app.use(
  (0, _expressFileupload["default"])({
    useTempFiles: true,
  })
);

// Rutas
app.use("/", _auth["default"]);
app.use("/", _whatsapp["default"]);
app.use("/turnos", _turnos["default"]);
app.use("/pacientes", _pacientes["default"]);
app.use("/consultorios", _consultorios["default"]);
app.use("/tratamientos", _tratamientos["default"]);
app.use("/caja", _caja["default"]);
app.use("/ventas", _ventas["default"]);
app.use("/articulos", _articulos["default"]);
app.use("/perfiles", _perfiles["default"]);
app.use("/ubicacion", _ubicacion["default"]);
// app.use("/contactos", contactosRoute);

// Middleware para frontend
app.use((0, _connectHistoryApiFallback["default"])());
app.use(
  _express["default"]["static"](_path["default"].join(__dirname, "public"))
);
console.log("App.js se está ejecutando...");

// Puerto
var PORT = process.env.PORT || 3003;
app.set("port", PORT);
app.listen(app.get("port"), function () {
  console.log("Server on port ".concat(app.get("port")));
});
