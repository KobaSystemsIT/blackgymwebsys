import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { PrivateRoutes, Roles } from "@/models";
import { faCartShopping, faCity, faShop } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  const userState = useSelector((store: AppStore) => store.user);
  const clubState = useSelector((store: AppStore) => store.club);

  const isAdmin = userState.rol === Roles.ADMIN;
  return <>
    <div className="container-fluid">
      <div>
        <h1 className=" font-medium text-2xl">Bienvenido <span className=" font-normal uppercase">{userState.username}</span></h1>
        <h1 className=" text-lg font-medium"> Sucursal:  <span className=" font-normal">{clubState.nameClub}</span></h1>
      </div>
      <br />
      <div className="text-center p-2">
        <h1>Accesos rápidos</h1>
        <br />
        <div className="inline-grid md:grid-cols-2 lg:grid-flow-col gap-4">
          {isAdmin && (
            <a href="GestionSucursales/" className="p-2 bg-slate-100 shadow-md rounded-lg">
              <div className="card-body flex-row items-center">
                <FontAwesomeIcon icon={faCity} />
                <h1>Gestión de sucursales</h1>
              </div>
            </a>
          )}
          <a href={`GestionSucursal/${clubState.idClub}`}  className="p-2 bg-slate-100 shadow-md rounded-lg">
            <div className="card-body flex-row items-center">
              <FontAwesomeIcon icon={faShop} />
              <h1>Gestión de sucursal</h1>
            </div>
          </a>
          <a href={PrivateRoutes.PDV} className="p-2 bg-slate-100 shadow-md rounded-lg">
            <div className="card-body flex-row items-center">
              <FontAwesomeIcon icon={faCartShopping} />
              <h1>Punto de Venta</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  </>;
}
export default Dashboard;
