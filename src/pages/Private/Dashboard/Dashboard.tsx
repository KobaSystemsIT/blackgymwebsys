import { useSelector } from "react-redux";
import { AppStore } from "../../../redux/store";
import { PrivateRoutes, Roles } from "@/models";

function Dashboard() {
  const userState = useSelector((store: AppStore) => store.user);

  const isAdmin = userState.rol === Roles.ADMIN;
  return <>
    <div className="container-fluid">
      <div>
        <h1 className=" font-medium text-2xl">Bienvenido <span className=" font-normal uppercase">{userState.username}</span></h1>
      </div>

      <br />
      <div className="grid grid-rows-2 text-center p-2">
        <h1>Accesos rápidos</h1>
        {isAdmin && (
          <div className=" grid grid-flow-col">
          <div className="card w-[30%] bg-slate-100 shadow-md">
            <div className="card-body">
              <p>Gestión de sucursal</p>
            </div>
          </div>
        </div>
        )}
      </div>
    </div>
  </>;
}
export default Dashboard;
