import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import reactRecommended from "eslint-plugin-react/configs/recommended.js";
import reactNative from "eslint-plugin-react-native";

export default [
  js.configs.recommended, // Configuración base de ESLint
  reactRecommended, // Configuración recomendada para React
  {
    files: ["**/*.{js,jsx,ts,tsx}"], // Aplica estas reglas a archivos JS/TS
    languageOptions: {
      parser: tsParser, // Usa el parser de TypeScript
      ecmaVersion: "latest", // Usa la última versión de ECMAScript
      sourceType: "module", // Usa módulos ES
    },
    plugins: {
      "react-native": reactNative, // Plugin de React Native
      "@typescript-eslint": tsPlugin, // Plugin de TypeScript
      import: importPlugin, // Plugin de importaciones
      prettier: prettierPlugin, // Plugin de Prettier
    },
    rules: {
      "prettier/prettier": "error", // Asegura que Prettier marque errores
      "react/react-in-jsx-scope": "off", // Desactiva la regla que requiere importar React
      "react-native/no-unused-styles": "error", // Detecta estilos no usados
      "react-native/split-platform-components": "error", // Separa componentes por plataforma
      "react-native/no-inline-styles": "warn", // Evita estilos en línea
      "react-native/no-color-literals": "warn", // Evita literales de color en línea
      "react-native/no-raw-text": "warn", // Evita texto crudo en componentes
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ], // Ordena las importaciones
      "react/prop-types": "off", // Desactiva la validación de PropTypes (si usas TypeScript)
      "@typescript-eslint/explicit-module-boundary-types": "off", // No requiere tipos explícitos en funciones
      "@typescript-eslint/no-unused-vars": "warn", // Detecta variables no usadas
    },
    settings: {
      react: {
        version: "detect", // Detecta automáticamente la versión de React
      },
    },
  },
  prettierConfig, // Aplica la configuración de Prettier
  {
    ignores: ["node_modules/", ".expo/", "dist/", "build/"], // Ignora estas carpetas
  },
];
