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

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  return (
    <div className="flex p-4 max-h-screen overflow-hidden text-sm">
      <Sidebar />
      {/* Main Content */}
      <div className="flex-grow">
        <div className="flex flex-col h-screen p-4">
          <Navbar />
          <div className="flex-grow overflow-auto p-4">
            {/* Contenido de la página */}
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />
              <Route path={PrivateRoutes.SUCSTAFF} element={<GestionSucursal />} />
              <Route path={PrivateRoutes.PDV} element={<PuntoVenta />} />

              {/*rutas de administrador*/}
              <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                <Route path={PrivateRoutes.SUCADMIN} element={<GestionSucursales />} />
                <Route path={PrivateRoutes.FINANZAS} element={<GestionFinanciera />} />
                <Route path={PrivateRoutes.ADMIN} element={<PanelAdmin />} />
              </Route>
            </RoutesWithNotFound>
          </div>
        </div>
      </div>
    </div>




  );
}
export default Private;
