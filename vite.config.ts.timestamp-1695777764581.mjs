// vite.config.ts
import react from "file:///C:/Users/programador2/Desktop/blackgymwebsys/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/programador2/Desktop/blackgymwebsys/node_modules/vite/dist/node/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\Users\\programador2\\Desktop\\blackgymwebsys";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve(__vite_injected_original_dirname, "src") }]
  }
});
export {
  vite_config_default as default
};
