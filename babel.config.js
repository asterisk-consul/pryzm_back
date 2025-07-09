module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    "@babel/plugin-transform-runtime",
    [
      "module-resolver", // Agrega este plugin
      {
        alias: {
          "@components": "./src/components", // Alias para ./src/components
          "@consultorios": "./src/components/consultorios",
          "@database": "./src/components/database",
          "@auth": "./src/components/auth",
          "@pacientes": "./src/components/pacientes",
          "@turnos": "./src/components/turnos",
          "@whatsapp": "./src/components/whatsapp",
          "@tratamientos": "./src/components/tratamientos",
          "@utils": "./src/utils", 
          "@caja":"./src/components/caja",
          "@ventas": "./src/components/ventas",
          "@services": "./src/services",
          "@articulos": "./src/components/articulos",
          "@perfiles": "./src/components/perfiles",
          "@ubicacion": "./src/components/ubicacion",
          "@contactos": "./src/components/contactos",
        },
      },
    ],
  ],
  env: {
    production: {
      presets: [
        [
          "@babel/preset-env",
          {
            targets: "> 0.25%, not dead",
            useBuiltIns: "usage",
            corejs: 3,
          },
        ],
      ],
    },
    development: {
      presets: ["@babel/preset-env"],
    },
  },
};
