import { lazy, useEffect, useState } from 'react';
import { Navigate, Route, useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from '../../models';
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
import BottonNavigate from '@/components/BottomNavigate/BottomNavigate';
import { getClubes } from '@/services/Clubes/clubes.service';
import { tokenExpired } from '@/components/AlertToken/AlertToken';
import { viewClientsSubs } from '@/services/Clients/clients.service';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

declare global {
  interface Window {
    modalUsers: HTMLDialogElement;
    modalStaff: HTMLDialogElement;
    modalInventory: HTMLDialogElement;
    modalClubes: HTMLDialogElement;
	}
}

function Private() {
  const tokenState = useSelector((store: AppStore) => store.token);
  const token = tokenState.token;

  const tokenIsActive = async () => {
    try {
      const { data } = await viewClientsSubs('1', token);
      if (data) {
        console.log('Token Valido');
      }
    } catch (error) {
      console.error('Error:', error);
      tokenExpired();
    }
  };

  useEffect(() => {
    tokenIsActive();
  });


  return (
    <div className="flex h-screen overflow-hidden relative">
      <div className="lg:block lg:w-64 md:hidden hidden h-screen  transition-all duration-500">
        <Sidebar />
      </div>
      <div className="flex-grow overflow-x-hidden min-h-screen p-4 rounded-xl lg:m-2 md:m-4 m-0 pb-4">
        <Navbar />
        <div className="p-6 overflow-y-auto relative z-0">
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />
            <Route path='Gestion_de_Sucursal/:idClub' element={<GestionSucursal />}></Route>
            <Route path='Punto_de_Venta/:idClub' element={<PuntoVenta />} />
            <Route path='Inventario/:idClub' element={<Inventario />} />

            {/*rutas de administrador*/}
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path="Gestion_de_Sucursales/" element={<GestionSucursales />} />
              <Route path="Gestion_Financiera/" element={<GestionFinanciera />} />
              <Route path="Panel_de_Administrador" element={<PanelAdmin />} />
              <Route path="Gestion_de_Inventarios/" element={<GestionInventarios />} />
            </Route>
          </RoutesWithNotFound>
        </div>
      </div>
      <br />
      <div className='lg:hidden'>
        <BottonNavigate />
      </div>
    </div>
  );
}
export default Private;
