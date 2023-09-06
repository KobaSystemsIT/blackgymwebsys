import { lazy, useEffect, useState } from 'react';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes, Roles } from '../../models';
import { RoutesWithNotFound } from '../../utilities';
import { GestionSucursales } from './GestionSucursales';
import { RoleGuard } from '@/guards';
import { GestionSucursal } from './GestionSucursal';
import { CantAccess } from '@/common/CantAccess';
import { Navbar } from '@/components/Navbar';
import { Sidebar } from '@/components/Sidebar';
import { PuntoVenta } from './PuntoVenta';
import { GestionFinanciera } from './GestionFinanciera';
import { PanelAdmin } from './PanelAdmin';
import { GestionInventarios } from './GestionInventarios';
import { Inventario } from './Inventario';
import { GestionSubscripciones } from './GestionSubscripciones';
import { RegistroUsuarios } from './RegistroUsuarios';
import { FinanzasXSucursal } from './FinanzasXSucursal';
import { GestionClubes } from './GestionClubes';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  const open = useSelector((store: AppStore) => store.open.open);

  return (
    <div className="flex h-screen overflow-hidden relative">
      <div className={`lg:block lg:w-72 p-2 md:w-48 w-[25%] h-screen ${open ? "lg:w-72 md:w-48 w-[25%] absolute z-50 p-2" : "hidden"}  transition-all duration-500`}>
        <Sidebar />
      </div>
      <div className="flex-grow overflow-x-hidden min-h-screen p-4 rounded-xl lg:m-2 md:m-4 m-0">
        <Navbar />
        <div className="p-6 overflow-y-auto relative z-0">
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />
            <Route path='Gestion_de_Sucursal/:idClub' element={<GestionSucursal />}></Route>
            <Route path='Finanzas_Por_Sucursal/:idClub' element={<FinanzasXSucursal />}></Route>

            <Route path='Punto_de_Venta/:idClub' element={<PuntoVenta />} />
            <Route path='Inventario/:idClub' element={<Inventario />} />
            <Route path="Gestion_de_Subscripciones/:idClub" element={<GestionSubscripciones />} />
            <Route path="Registro_de_Usuarios/:idClub" element={<RegistroUsuarios />} />
            <Route path='Registro_de_Productos/:idClub'></Route>
            <Route path='Gestion_de_Inventario/:idClub'></Route>

            {/*rutas de administrador*/}
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path="Gestion_de_Sucursales/" element={<GestionSucursales />} />
              <Route path="Gestion_Financiera/" element={<GestionFinanciera />} />
              <Route path="Panel_de_Administrador" element={<PanelAdmin />} />
              <Route path="Gestion_de_Inventarios/" element={<GestionInventarios />} />
              <Route path="Gestion_de_Clubes/" element={<GestionClubes />}></Route>
            </Route>
          </RoutesWithNotFound>
        </div>
      </div>
    </div>
  );
}
export default Private;
