import { Roles } from '@/models';
import { AppStore } from '@/redux/store';
import { faArrowRightToBracket, faCartShopping, faChartPie, faCity, faHome, faShop, faUsers, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { Logout } from '../../components/Logout';
import './Sidebar.css';

export type SidebarProps = {
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
	const clubState = useSelector((store: AppStore) => store.club);
	const userState = useSelector((store: AppStore) => store.user);
	const isAdmin = userState.rol === Roles.ADMIN;

	return (
		<div className="h-screen md:overflow-y-auto md:overflow-x-hidden bg-black">
			<div className="flex flex-col h-full justify-between items-center">
				<div className="flex flex-col pt-10 justify-center items-center">
					{/* <img src={logo} className="lg:h-16 md:h-10" alt="Logo" /> */}
					<h1 className="lg:text-xl lg:block md:hidden text-lg mt-7 font-bold bottom-0 text-center text-white">
						Black Gym Club
					</h1>				
				</div>
				<div>
					<ul className="lg:px-5 text-white lg:text-sm md:text-xs">
						<li className="m-5 hover:bg-white rounded-md hover:text-black">
							<a href="/" className="flex items-center">
								<FontAwesomeIcon
									icon={faHome}
									className="md:h-3 h-5 m-2"
								/>
								<h1 className='lg:block md:block hidden'>Inicio</h1>
							</a>
						</li>
						{!isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Sucursal/${clubState.idClub}`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faShop}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>
										Gestión de Sucursal
									</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Sucursales/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faCity}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>
										Gestión de Sucursales
									</h1>
								</a>
							</li>
						)}
						{!isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Punto_de_Venta/${clubState.idClub}`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faCartShopping}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>Punto de Venta</h1>
								</a>
							</li>
						)}
						{!isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Inventario/${clubState.idClub}`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faWarehouse}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>Inventario</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_de_Inventarios/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faWarehouse}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>
										Gestión de Inventarios
									</h1>
								</a>
							</li>
						)}
						{isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Gestion_Financiera/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faChartPie}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>
										Gestión Financiera
									</h1>
								</a>
							</li>
						)}

						{isAdmin && (
							<li className="m-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
								<a
									href={`/Dashboard/Panel_de_Administrador/`}
									className="flex items-center"
								>
									<FontAwesomeIcon
										icon={faUsers}
										className="md:h-3 h-5 m-2"
									/>
									<h1 className='lg:block md:block hidden'>
										Administración
									</h1>
								</a>
							</li>
						)}

					</ul>
				</div>
				<div className='p-4 text-white '>
					<a
						className="flex items-center hover:bg-white rounded-md hover:text-black"
					>
						<FontAwesomeIcon
							icon={faArrowRightToBracket}
							className="h-4 m-2"
						/>
						<h1 className='lg:block md:block hidden'>
							<Logout></Logout>
						</h1>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
