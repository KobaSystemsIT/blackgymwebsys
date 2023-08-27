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
import { GestionClubes } from './GestionClubes';

const Dashboard = lazy(() => import('./Dashboard/Dashboard'));

function Private() {
  return (
    <div className="flex text-sm bg-black h-screen">
      <Sidebar />
      <div className="flex-grow overflow-auto max-h-screen p-4 lg:m-4 md:m-4 m-2 bg-white rounded-xl">
        <div className="flex flex-col">
          <Navbar />
          <div className="flex-grow p-4">
            <RoutesWithNotFound>
              <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
              <Route path={PrivateRoutes.CANTACCESS} element={<CantAccess />} />                      
              <Route path='Gestion_de_Sucursal/:idClub' element={<GestionSucursal/>}></Route>
              <Route path='Finanzas_Por_Sucursal/:idClub' element={<FinanzasXSucursal/>}></Route>

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
                <Route path="Gestion_de_Clubes/" element={<GestionClubes/>}></Route>
              </Route>
            </RoutesWithNotFound>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Private;
