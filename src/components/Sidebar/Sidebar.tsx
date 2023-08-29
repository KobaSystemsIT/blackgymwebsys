import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faArrowRightToBracket, faBars, faCity, faShop, faChartPie, faWarehouse, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Logout } from '../Logout';
import './Sidebar.css'
import logo from '@/assets/icons/iconBG.svg'
import { PrivateRoutes, Roles } from '@/models';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export type SidebarProps = {
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
	const [showMenu, setShowMenu] = useState(false);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const clubState = useSelector((store: AppStore) => store.club); 

	const userState = useSelector((store: AppStore) => store.user);

	const isAdmin = userState.rol === Roles.ADMIN;

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
		if (window.innerWidth > 768) {
			setShowMenu(true); // Mostrar el menú completo en pantallas grandes
		}
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize(); // Asegurarse de que el estado se inicialice correctamente
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
	};

	return (
		<div className={`relative bg-black md:overflow-y-auto md:overflow-x-hidden ${showMenu ? 'lg:w-[18%] md:w-[30%] sidebar-transition' : '-left-4 sidebar-transition'}`}>
			<button onClick={toggleMenu} className={`${showMenu ? 'fixed lg:block top-[3.9rem] left-10 z-14 menu-button-transition' : 'fixed lg:block lg:top-[3.7rem] md:top-[3.9rem] md:left-10 top-[3.4rem] left-10 z-14 menu-button-transition'}`}>
				<FontAwesomeIcon icon={faBars} className={`h-5 ${showMenu ? 'rounded-lg text-white' : 'rounded-lg text-dark'}`} />
			</button>
			<div className={`pt-20 ${showMenu ? 'block' : 'hidden'} menu-content-transition`}>
				<div className="flex flex-col items-center">
					<div className="flex flex-col pt-6 justify-center">
						<img src={logo} className={` h-12 ${showMenu ? 'relative' : 'relative -left-11'} menu-content-transition`} alt="Logo" />
						<h1 className={`text-lg mt-2  font-medium bottom-0 text-center text-white bg-dark ${showMenu ? 'block' : 'hidden'} menu-content-transition`}>
							Black Gym Club
						</h1>
					</div>
				</div>
				<div className="pt-5">
					<ul className="py-2 px-3 text-white text-sm">
						<li className="m-5 hover:bg-white rounded-md hover:text-black">
							<a href="/" className="flex items-center">
								<FontAwesomeIcon
									icon={faHome}
									className="m-3 h-3"
								/>
								<h1>Inicio</h1>
							</a>
						</li>
						{!isAdmin && (
						<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href={`/Dashboard/Gestion_de_Sucursal/${clubState.idClub}`}
								className="flex items-center"
							>
								<FontAwesomeIcon
									icon={faShop}
									className="m-3 h-3"
								/>
								<h1>
									Gestión de Sucursal
								</h1>
							</a>
						</li>
						)}
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Sucursales/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faCity}
										className="m-3 h-3"
									/>
									<h1>
										Gestión de Sucursales
									</h1>
								</a>
							</li>
						)}
						{!isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Punto_de_Venta/${clubState.idClub}`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faCartShopping}
										className="m-3 h-3"
									/>
									<h1>Punto de Venta</h1>
								</a>
							</li>
						)}
						{!isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Inventario/${clubState.idClub}`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faWarehouse}
										className="m-3 h-3"
									/>
									<h1>Inventario</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Inventarios/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faWarehouse}
										className="m-3 h-3"
									/>
									<h1>
										Gestión de Inventarios
									</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_Financiera/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faChartPie}
										className="m-3 h-3"
									/>
									<h1>
										Gestión Financiera
									</h1>
								</a>
							</li>
						)}
						
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Panel_de_Administrador/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faUsers}
										className="m-3 h-3"
									/>
									<h1>
										Administración
									</h1>
								</a>
							</li>
						)}
						<li className="m-5 ml-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href="/login"
								className="flex items-center"
							>
								<FontAwesomeIcon
									icon={faArrowRightToBracket}
									className="m-3 h-3"
								/>
								<h1>
									<Logout></Logout>
								</h1>
							</a>
						</li>

					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
