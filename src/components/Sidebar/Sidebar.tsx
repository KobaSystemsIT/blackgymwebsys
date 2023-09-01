import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faArrowRightToBracket, faBars, faCity, faShop, faChartPie, faWarehouse, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Logout } from '../Logout';
import './Sidebar.css'
import logo from '@/assets/icons/iconBG.svg'
import { Roles } from '@/models';
import { useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';

export type SidebarProps = {
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
	const clubState = useSelector((store: AppStore) => store.club); 
	const userState = useSelector((store: AppStore) => store.user);
	const isAdmin = userState.rol === Roles.ADMIN;

	return (
		<div className="h-full md:overflow-y-auto md:overflow-x-hidden bg-black lg:rounded-2xl md:rounded-none rounded-2xl">
			<div className="pt-20">
				<div className="flex flex-col items-center">
					<div className="flex flex-col pt-6 justify-center">
						<img src={logo} className="h-14" alt="Logo" />
						<h1 className="lg:text-2xl md:text-lg text-base mt-5 font-medium bottom-0 text-center text-white ">
							Black Gym Club
						</h1>
					</div>
				</div>
				<div className="pt-8">
					<ul className="py-5 lg:px-10 md:px-5 text-white lg:text-base md:text-sm text-xs">
						<li className="m-5 hover:bg-white rounded-md hover:text-black">
							<a href="/" className="flex items-center">
								<FontAwesomeIcon
									icon={faHome}
									className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
								/>
								<h1 className='lg:block md:block hidden'>Inicio</h1>
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
									className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
								/>
								<h1 className='lg:block md:block hidden'>
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
										className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
									/>
									<h1 className='lg:block md:block hidden'>
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
										className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
									/>
									<h1 className='lg:block md:block hidden'>Punto de Venta</h1>
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
										className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
									/>
									<h1 className='lg:block md:block hidden'>Inventario</h1>
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
										className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
									/>
									<h1 className='lg:block md:block hidden'>
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
										className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
									/>
									<h1 className='lg:block md:block hidden'>
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
										className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
									/>
									<h1 className='lg:block md:block hidden'>
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
									className="lg:m-3 lg:h-4 m-3 md:h-4 h-6"
								/>
								<h1 className='lg:block md:block hidden'>
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
