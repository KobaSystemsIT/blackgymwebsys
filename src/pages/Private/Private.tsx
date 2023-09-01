import { lazy, useState } from 'react';
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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { toggleOpen } from '@/redux/states/sidebar';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  const open = useSelector((store: AppStore) => store.open.open!);
  const dispatch = useDispatch();

  return (
    <div className="flex h-screen overflow-hidden text-lg">
      <button onClick={() => dispatch(toggleOpen())} className='transition-all duration-300'>
        <FontAwesomeIcon icon={faBars} className="absolute bottom-3 right-6 m-2 hover:bg-black hover:text-white hover:rounded-xl transition-all duration-300 lg:hidden" />
      </button>
      <div className={`lg:block relative ${open ? " lg:w-72" : "hidden"}  transition-all duration-500`}>
        <Sidebar />
      </div>
      <div className="flex-grow overflow-x-hidden max-h-screen p-4 bg-white rounded-xl m-2">
        <Navbar />
        <div className="p-6 overflow-y-auto">
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
