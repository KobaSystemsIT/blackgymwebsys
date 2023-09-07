# blackgymwebsys
# Para la instalación de todas las dependencias: npm i
# para ejecutar el sistema: npm run dev
Librerias empleadas: TailwinCSS y DaisyUI.
Para el manejo de estados se emplea Redux y localstorage
# Inventario
El inventario se compone de 3 partes:
1. Un CRUD de productos que se encuentra en la ruta src/services/Inventory/inventory.services.ts
2. La pagina que se encarga de mostrar los productos y el CRUD como Frontend se encuentra en la ruta src/pages/Inventory/Private/Inventario/Inventory.tsx
3. El modelo o interface de los productos se encuentra en la ruta src/models/Inventory/Inventory.ts