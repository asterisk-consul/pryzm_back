import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import * as AuthModel from "./auth.model.js";
import crypto from "crypto";

dotenv.config();

const controller = {};

// Constantes de configuración
const ACCESS_TOKEN_EXPIRY = "15m"; // Token de acceso de corta duración
const REFRESH_TOKEN_EXPIRY = "7d"; // Token de refresco de larga duración

// Generar tokens
const generateTokens = (user) => {
  // Payload con información mínima necesaria
  const payload = {
    id: user.id,
    email: user.email,
    rol: user.rol_id,
  };

  // Token de acceso - corta duración
  const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: ACCESS_TOKEN_EXPIRY,
  });

  // Token de refresco - larga duración
  const refreshToken = jwt.sign(
    { id: user.id },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: REFRESH_TOKEN_EXPIRY }
  );

  return { accessToken, refreshToken };
};

// Registro
controller.signUp = async (req, res) => {
  const { nombre, email, telefono, direccion, ciudad, pais, password, rol_id } =
    req.body;

  try {
    // Validar que el usuario no exista ya
    const existingUser = await AuthModel.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ message: "El email ya está registrado" });
    }

    // Generar hash de la contraseña con costo alto para mayor seguridad
    const hashedPassword = await bcrypt.hash(password, 12);

    // Crear usuario
    const newUser = await AuthModel.createUser({
      nombre,
      email,
      telefono,
      direccion,
      ciudad,
      pais,
      password: hashedPassword,
      rol_id,
    });

    res.status(201).json({
      message: "Usuario registrado correctamente",
      userId: newUser.id,
    });
  } catch (error) {
    console.error("Error en signUp:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Login
controller.signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Buscar usuario
    const user = await AuthModel.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Verificar contraseña - usar tiempo constante para comparación
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Generar tokens
    const { accessToken, refreshToken } = generateTokens(user);

    // Guardar refresh token en la base de datos (hash para mayor seguridad)
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // Guardar en BD con fecha de expiración
    await AuthModel.saveRefreshToken(user.id, refreshTokenHash);

    // Configurar cookies seguras para tokens
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 días en milisegundos
    });

    res.status(200).json({
      message: "Login exitoso",
      accessToken,
      user: {
        id: user.id,
        nombre: user.nombre,
        email: user.email,
        rol: user.rol_id,
      },
    });
  } catch (error) {
    console.error("Error en signIn:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Refrescar token
controller.refreshToken = async (req, res) => {
  // Obtener el refresh token de la cookie o del cuerpo
  const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if (!refreshToken) {
    return res.status(401).json({ message: "Refresh token no proporcionado" });
  }

  try {
    // Verificar refresh token
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
    const userId = decoded.id;

    // Crear hash del token para verificar contra la BD
    const refreshTokenHash = crypto
      .createHash("sha256")
      .update(refreshToken)
      .digest("hex");

    // Verificar si el token existe en la BD y no ha expirado
    const tokenExists = await AuthModel.findRefreshToken(
      userId,
      refreshTokenHash
    );
    if (!tokenExists) {
      return res.status(403).json({ message: "Refresh token inválido" });
    }

    // Obtener datos del usuario
    const user = await AuthModel.findUserById(userId);
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    // Generar nuevos tokens
    const tokens = generateTokens(user);

    // Invalidar token anterior y guardar el nuevo
    await AuthModel.deleteRefreshToken(userId, refreshTokenHash);

    const newRefreshTokenHash = crypto
      .createHash("sha256")
      .update(tokens.refreshToken)
      .digest("hex");

    await AuthModel.saveRefreshToken(userId, newRefreshTokenHash);

    // Actualizar cookie
    res.cookie("refreshToken", tokens.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      accessToken: tokens.accessToken,
      message: "Token refrescado exitosamente",
    });
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(403).json({ message: "Refresh token expirado" });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ message: "Token inválido" });
    }

    console.error("Error al refrescar token:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// Logout
controller.logout = async (req, res) => {
  const refreshToken = req.cookies.refreshToken || req.body.refreshToken;

  if (refreshToken) {
    try {
      // Decodificar para obtener el ID sin verificar (podría estar expirado)
      const decoded = jwt.decode(refreshToken);

      if (decoded && decoded.id) {
        // Crear hash del token para buscarlo en la BD
        const refreshTokenHash = crypto
          .createHash("sha256")
          .update(refreshToken)
          .digest("hex");

        // Eliminar el token de la BD
        await AuthModel.deleteRefreshToken(decoded.id, refreshTokenHash);
      }
    } catch (error) {
      console.error("Error al procesar logout:", error);
    }
  }

  // Limpiar cookie independientemente de si hubo error
  res.clearCookie("refreshToken");

  res.status(200).json({ message: "Sesión cerrada correctamente" });
};

// Middleware de verificación de token
controller.verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Token no proporcionado" });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    if (error instanceof jwt.TokenExpiredError) {
      return res.status(401).json({
        message: "Token expirado",
        expired: true,
      });
    } else if (error instanceof jwt.JsonWebTokenError) {
      return res.status(403).json({ message: "Token inválido" });
    }

    console.error("Error en verificación de token:", error);
    return res.status(500).json({ message: "Error interno del servidor" });
  }
};

export default controller;
