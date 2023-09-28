import BottonNavigate from '@/common/BottomNavigate/BottomNavigate';
import { CantAccess } from '@/common/CantAccess';
import { Navbar } from '@/common/Navbar';
import { Sidebar } from '@/common/Sidebar';
import { tokenExpired } from '@/components/AlertToken/AlertToken';
import { RoleGuard } from '@/guards';
import { AppStore } from '@/redux/store';
import { viewDataClientsOrStaff } from '@/services/Clients/clients.service';
import { GestionClubView } from '@/views/GestionClubView';
import { GestionProductosView } from '@/views/GestionProductosView';
import GestionUsuarioView from '@/views/GestionUsuarioView/GestionUsuarioView';
import { lazy, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes, Roles } from '../../models';
import { RoutesWithNotFound } from '../../utilities';
import { Finanzas } from './Finanzas';
import { GestionFinanciera } from './GestionFinanciera';
import { GestionInventarios } from './GestionInventarios';
import { GestionSucursal } from './GestionSucursal';
import { GestionSucursales } from './GestionSucursales';
import { Inventario } from './Inventario';
import { PanelAdmin } from './PanelAdmin';
import { PuntoVenta } from './PuntoVenta';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

declare global {
  interface Window {
    modalUsers: HTMLDialogElement;
    modalStaff: HTMLDialogElement;
    modalInventory: HTMLDialogElement;
    modalClubes: HTMLDialogElement;
    modalUpdateUser: HTMLDialogElement;
    modalCategories: HTMLDialogElement;
    modalProducts: HTMLDialogElement;
    modalUserSys: HTMLDialogElement;
    modalUserVisitors: HTMLDialogElement;
    modalPuntoDeVenta: HTMLDialogElement;
  }
}

function Private() {
  const tokenState = useSelector((store: AppStore) => store.token);
  const token = tokenState.token;

  const tokenIsActive = async () => {
    try {
      const { data } = await viewDataClientsOrStaff('1', 1, token);
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
        <div className="p-6 overflow-y-auto relative z-0 pb-10">
          <RoutesWithNotFound>
            <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
            <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />
            <Route path='Gestion_de_Sucursal/:idClub' element={<GestionSucursal />}></Route>
            <Route path='Punto_de_Venta/:idClub' element={<PuntoVenta />} />
            <Route path='Inventario/:idClub' element={<Inventario />} />
            <Route path='Gestion_de_Sucursal/:idClub/Gestion_de_Usuario/:idUser' element={<GestionUsuarioView />}></Route>
            <Route path='Finanzas_por_Sucursal/:idClub' element={<Finanzas/>}></Route>


            {/*rutas de administrador*/}
            <Route element={<RoleGuard rol={Roles.ADMIN} />}>
              <Route path='Panel_de_Administrador/Gestion_de_Club/:idClub' element={<GestionClubView />}></Route>
              <Route path='Panel_de_Administrador/Gestion_de_Producto/:productID' element={<GestionProductosView />}></Route>
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
