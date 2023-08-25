import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faArrowRightToBracket, faBars, faCity, faShop, faChartPie, faWarehouse, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
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
		<div className={`relative border-r bg-black rounded-lg md:overflow-y-auto md:overflow-x-hidden ${showMenu ? 'lg:w-[18%] md:w-[30%] sidebar-transition' : '-left-4 sidebar-transition'}`}>
			<button onClick={toggleMenu} className={`${showMenu ? 'fixed lg:block top-[3.9rem] left-10 z-14 menu-button-transition' : 'fixed lg:block top-[3.9rem] left-10 z-14 menu-button-transition'}`}>
				<FontAwesomeIcon icon={faBars} className={`h-5 ${showMenu ? 'rounded-lg text-white' : 'rounded-lg text-dark'}`} />
			</button>
			<div className={`pt-16 rounded-lg ${showMenu ? 'block' : 'hidden'} menu-content-transition`}>
				<div className="flex flex-col items-center">
					<div className="flex flex-col pt-6 justify-center">
						<img src={logo} className={`h-8 ${showMenu ? 'relative' : 'relative -left-11'} menu-content-transition`} alt="Logo" />
						<h1 className={`text-sm font-medium bottom-0 text-center text-white bg-dark ${showMenu ? 'block' : 'hidden'} menu-content-transition`}>
							Black Gym Club
						</h1>
					</div>
				</div>
				<div className="pt-5">
					<ul className="py-2 px-3 text-white text-sm">
						<li className="m-5 hover:bg-white rounded-md hover:text-black">
							<a href="/" className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'}`}>
								<FontAwesomeIcon
									icon={faHome}
									className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
								/>
								<h1 className={`${showMenu ? 'block' : ' hidden'}`}>Inicio</h1>
							</a>
						</li>
						{!isAdmin && (
						<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href=""
								className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
									}`}
							>
								<FontAwesomeIcon
									icon={faShop}
									className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
								/>
								<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
									Gestión de Sucursal
								</h1>
							</a>
						</li>
						)}
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Sucursales/`}
									className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
										}`}
								>
									<FontAwesomeIcon
										icon={faCity}
										className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
									/>
									<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
										Gestión de Sucursales
									</h1>
								</a>
							</li>
						)}
						{!isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Punto_de_Venta/${clubState.idClub}`}
									className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
										}`}
								>
									<FontAwesomeIcon
										icon={faCartShopping}
										className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
									/>
									<h1 className={`${showMenu ? 'block' : ' hidden'}`}>Punto de Venta</h1>
								</a>
							</li>
						)}
						{!isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Inventario/${clubState.idClub}`}
									className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
										}`}
								>
									<FontAwesomeIcon
										icon={faWarehouse}
										className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
									/>
									<h1 className={`${showMenu ? 'block' : ' hidden'}`}>Inventario</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Inventarios/`}
									className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
										}`}
								>
									<FontAwesomeIcon
										icon={faWarehouse}
										className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
									/>
									<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
										Gestión de Inventarios
									</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_Financiera/`}
									className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
										}`}
								>
									<FontAwesomeIcon
										icon={faChartPie}
										className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
									/>
									<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
										Gestión Financiera
									</h1>
								</a>
							</li>
						)}
						
						{isAdmin && (
							<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Panel_de_Administrador/`}
									className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
										}`}
								>
									<FontAwesomeIcon
										icon={faUsers}
										className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
									/>
									<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
										Administración
									</h1>
								</a>
							</li>
						)}
						<li className="m-5 ml-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href="/login"
								className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
									}`}
							>
								<FontAwesomeIcon
									icon={faArrowRightToBracket}
									className={`${showMenu ? ' m-3 h-3' : 'h-5'}`}
								/>
								<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
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
