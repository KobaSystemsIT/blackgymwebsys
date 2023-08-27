import { useSelector } from "react-redux";
import { AppStore } from "@/redux/store";
import { PrivateRoutes, Roles } from "@/models";
import { faCartShopping, faCity, faShop, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Dashboard() {
  const userState = useSelector((store: AppStore) => store.user);
  const clubState = useSelector((store: AppStore) => store.club);

  const isAdmin = userState.rol === Roles.ADMIN;
  return <div className="container">
      <div>
        <h1 className=" font-medium text-2xl">Bienvenido <span className=" font-normal uppercase">{userState.username}</span></h1>
        <h1 className=" text-lg font-medium"> Sucursal:  <span className=" font-normal">{clubState.nameClub}</span></h1>
      </div>
      <br />
      <div className="text-center p-2">
        <h1>Accesos rápidos</h1>
        <br />
        <div className="inline-grid md:grid-cols-2 sm:grid-cols-2 lg:grid-flow-col gap-4">
          {isAdmin && (
            <a href="Gestion_de_Sucursales/" className="p-2 bg-black shadow-md rounded-lg text-white">
              <div className="card-body flex-row items-center">
                <FontAwesomeIcon icon={faCity} />
                <h1>Gestión de sucursales</h1>
              </div>
            </a>
          )}
          <a href={`Gestion_de_Sucursal/${clubState.idClub}`} className="p-2 bg-black shadow-md rounded-lg text-white">
            <div className="card-body flex-row items-center">
              <FontAwesomeIcon icon={faShop} />
              <h1>Gestión de sucursal</h1>
            </div>
          </a>
          <a href={`Punto_de_Venta/${clubState.idClub}`}className="p-2 bg-black shadow-md rounded-lg text-white">
            <div className="card-body flex-row items-center">
              <FontAwesomeIcon icon={faCartShopping} />
              <h1>Punto de Venta</h1>
            </div>
          </a>
          <a href={`Inventario/${clubState.idClub}`}className="p-2 bg-black shadow-md rounded-lg text-white">
            <div className="card-body flex-row items-center">
              <FontAwesomeIcon icon={faWarehouse} />
              <h1>Inventario</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
}
export default Dashboard;
