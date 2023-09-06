import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Roles } from "@/models";
import { AppStore } from "@/redux/store";
import { useSelector } from "react-redux";
import { faCartShopping, faChartPie, faCity, faHome, faShop, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';


export default function BottonNavigate() {
    const clubState = useSelector((store: AppStore) => store.club);
    const userState = useSelector((store: AppStore) => store.user);
    const isAdmin = userState.rol === Roles.ADMIN;
    return (
        <div className="btm-nav">
            <button>
                <a href="/" className="flex items-center">
                    <FontAwesomeIcon
                        icon={faHome}
                        className="h-4"
                    />
                </a>
            </button>
            {!isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Gestion_de_Sucursal/${clubState.idClub}`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faShop}
                            className="h-4"
                        />
                    </a>
                </button>
            )}
            {!isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Punto_de_Venta/${clubState.idClub}`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            className="h-4"
                        />
                    </a>
                </button>
            )}
            {!isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Inventario/${clubState.idClub}`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faWarehouse}
                            className="h-4"
                        />
                    </a>
                </button>
            )}
            {isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Gestion_de_Sucursales/`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faCity}
                            className="h-4"
                        />
                    </a>
                </button>
            )}

            {isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Gestion_de_Inventarios/`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faWarehouse}
                            className="h-4"
                        />
                    </a>
                </button>
            )}

            {isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Gestion_Financiera/`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faChartPie}
                            className="h-4"
                        />
                    </a>
                </button>
            )}

            {isAdmin && (
                <button>
                    <a
                        href={`/Dashboard/Panel_de_Administrador/`}
                        className="flex items-center"
                    >
                        <FontAwesomeIcon
                            icon={faUsers}
                            className="md:h-3 h-5 m-2"
                        />
                    </a>
                </button>
            )}

        </div>
    )
}