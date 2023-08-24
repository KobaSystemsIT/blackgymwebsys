export const PublicRoutes = {
  LOGIN: 'login',
  FORGOTPASS: 'Recuperar_Cuenta', //panel para reestablecer la contraseña
};

export const PrivateRoutes = {
  PRIVATE: 'Dashboard',
  DASHBOARD: 'Home',
  SUCADMIN: 'Gestion_de_Sucursales', //panel de admin para gestionar todas las sucursales
  SUCSTAFF: 'Gestion_de_Sucursal', //panel para ver los campos importantes de la sucursal
  CANTACCESS: 'Cant_Acess', //pagina de aviso
  PDV: 'Punto_de_Venta', //punto de venta
  FINANZAS: 'Gestion_Financiera', //panel de admin para las finanzas de todas las sucursales
  FINANZASSUC : 'Finanzas_por_Sucursal', //panel de admin para las finanzas de cada sucursal
  ADMIN: 'Panel_de_Administrador', //panel de admin para gestionar usuarios de admin, clubes
  INVENTARIO: 'Inventario', //vista del inventario por sucursal 
  SUBSCRIPCION: 'Gestion_de_Subscripciones', //panel para gestionar las subscripciones
  REGISTROUSER: 'Registro_de_Usuarios', //panel para el registro de nuevos usuarios staff o clientes
  GESTINV: 'Gestion_de_Inventarios', //Panel para visualizar los inventarios de todas las sucursales
  MODINVENTARIO: 'Gestion_de_Inventario', //para editar o eliminar el producto
  REGINVENTARIO: 'Registrar_Productos', //para registrar nuevos productos
  GESTCLUBES: 'Gestion_de_Clubes', //panel para editar, agregar o eliminar sucursales.
   

};

