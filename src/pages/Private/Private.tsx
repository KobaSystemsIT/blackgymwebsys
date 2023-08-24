import { lazy } from 'react';
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

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  return (
    <div className="flex p-4 max-h-screen overflow-hidden text-sm">
      <Sidebar />
      <div className="flex-grow">
        <div className="flex flex-col h-screen p-4">
          <Navbar />
          <div className="flex-grow overflow-auto p-4">
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />                      
              <Route path='GestionSucursal/:idClub' element={<GestionSucursal/>}></Route>

              <Route path={PrivateRoutes.PDV} element={<PuntoVenta />} />
              <Route path={PrivateRoutes.INVENTARIO} element={<Inventario />} />
              <Route path={PrivateRoutes.SUBSCRIPCION} element={<GestionSubscripciones />} />
              <Route path={PrivateRoutes.REGISTROUSER} element={<RegistroUsuarios />} />

              {/*rutas de administrador*/}
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path="GestionSucursales/" element={<GestionSucursales />} />
                <Route path={PrivateRoutes.FINANZAS} element={<GestionFinanciera />} />
                <Route path={PrivateRoutes.ADMIN} element={<PanelAdmin />} />
                <Route path={PrivateRoutes.GESTINV} element={<GestionInventarios />} />
              </Route>
            </RoutesWithNotFound>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Private;
