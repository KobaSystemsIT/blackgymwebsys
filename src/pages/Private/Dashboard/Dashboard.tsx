import { Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { faCartShopping, faChartPie, faCity, faShop, faWarehouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

function Dashboard() {
  const userState = useSelector((store: AppStore) => store.user);
  const clubState = useSelector((store: AppStore) => store.club);
  let idClub: number = userState.idClub;

  const isAdmin = userState.rol === Roles.ADMIN;
  return <div className="container">
    <div className=" mt-[2%]">
      <h1 className=" font-semibold lg:text-4xl md:text-3xl text-2xl">Bienvenido <span className=" font-normal uppercase">{userState.username}</span></h1>
      <h1 className=" text-lg font-semibold mt-4"> Sucursal:  <span className=" font-normal">{clubState.nameClub}</span></h1>
    </div>
    <div className="mt-[10%]">
      <h1>Accesos rápidos</h1>
      <br />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center text-white text-sm">
        {isAdmin ? (
          <>
            <a href="Gestion_de_Sucursales/" className="card bg-black shadow-md rounded-lg">
              <div className="card-body justify-center">
                <FontAwesomeIcon icon={faCity} />
                <h1>Gestión de <br /> sucursales</h1>
              </div>
            </a>
            <a href="Gestion_de_Inventarios/" className="card bg-black shadow-md rounded-lg">
              <div className="card-body justify-center">
                <FontAwesomeIcon icon={faWarehouse} />
                <h1>Gestión de <br /> Inventarios</h1>
              </div>
            </a>
            <a href="Gestion_Financiera/" className="card bg-black shadow-md rounded-lg">
              <div className="card-body justify-center">
                <FontAwesomeIcon icon={faChartPie} className=""/>
                <h1>Gestión <br /> Financiera</h1>
              </div>
            </a>
          </>
        ) : (
          <>
            <a href={`Gestion_de_Sucursal/${idClub}`} className="card bg-black shadow-md rounded-lg">
              <div className="card-body justify-center">
                <FontAwesomeIcon icon={faShop} />
                <h1>Gestión de <br /> sucursal</h1>
              </div>
            </a>
            <a href={`Punto_de_Venta/${clubState.idClub}`} className="card bg-black shadow-md rounded-lg">
              <div className="card-body justify-center">
                <FontAwesomeIcon icon={faCartShopping} />
                <h1>Punto de <br /> Venta</h1>
              </div>
            </a>
            <a href={`Inventario/${clubState.idClub}`} className="card bg-black shadow-md rounded-lg">
              <div className="card-body justify-center">
                <FontAwesomeIcon icon={faWarehouse} />
                <h1>Gestión de <br /> Inventario</h1>
              </div>
            </a>
          </>
        )}
      </div>
    </div>
  </div>
}
export default Dashboard;
