import express from "express";
import morgan from "morgan";
import "module-alias/register";
import cors from "cors";
import fileUpload from "express-fileupload";
import history from "connect-history-api-fallback";
import path from "path";
import "dotenv/config";

// Importar rutas
import authRoute from "@auth/auth.routes";
import whatsappRoute from "@whatsapp/whatsapp.routes";
import turnosRoute from "@turnos/turnos.routes";
import pacientesRoute from "@pacientes/pacientes.routes";
import consultorioRoute from "@consultorios/consultorios.routes";
import tratamientosRoute from "@tratamientos/tratamientos.routes";

import cajaRoute from "@caja/caja.routes";
import ventasRoute from "./components/ventas/ventas.routes";
import articulosRoute from "./components/articulos/articulos.routes";
import perfilesRoute from "@perfiles/perfiles.routes";
import ubicacionRoute from "./components/ubicacion/ubicacion.routes";
// import contactosRoute from "./components/contactos/contactos.routes";

const app = express();

// Middlewares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

// Rutas
app.use("/", authRoute);
app.use("/", whatsappRoute);
app.use("/turnos", turnosRoute);
app.use("/pacientes", pacientesRoute);
app.use("/consultorios", consultorioRoute);
app.use("/tratamientos", tratamientosRoute);
app.use("/caja", cajaRoute);
app.use("/ventas", ventasRoute);
app.use("/articulos", articulosRoute);
app.use("/perfiles", perfilesRoute);
app.use("/ubicacion", ubicacionRoute);
// app.use("/contactos", contactosRoute);

// Middleware para frontend
app.use(history());
app.use(express.static(path.join(__dirname, "public")));
console.log("App.js se está ejecutando...");

// Puerto
const PORT = process.env.PORT || 3003;
app.set("port", PORT);
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
});
