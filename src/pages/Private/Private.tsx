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

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));
const Home = lazy(() => import('./Home/Home'));

function Private() {
  return (
    <div className="flex p-4 max-h-screen overflow-y-hidden text-xs">
      <Sidebar/>
      {/* Main Content */}
      <div className="flex-grow p-4">
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <div className="flex-grow overflow-hidden"> {/* Utiliza 'overflow-hidden' para evitar el scroll en este nivel */}
            <div style={{ maxHeight: 'calc(100vh - 5rem)', overflowY: 'auto' }} className='p-4'> {/* Establece una altura máxima */}
              <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
                <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
                <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />
                <Route element={<RoleGuard rol={Roles.ADMIN} />}>
                  <Route path={PrivateRoutes.SUCADMIN} element={<GestionSucursales />} />
                </Route>
                <Route element={<RoleGuard rol={Roles.USER && Roles.ADMIN} />}>
                  <Route path={PrivateRoutes.SUCSTAFF} element={<GestionSucursal />} />
                </Route>
              </RoutesWithNotFound>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
}
export default Private;
