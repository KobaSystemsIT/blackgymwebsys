import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCartShopping, faArrowRightToBracket, faBars, faCity, faShop, faChartPie, faWarehouse, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Logout } from '../Logout';
import './Sidebar.css'
import logo from '@/assets/icons/iconBG.svg'
import { Roles } from '@/models';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { toggleOpen } from '@/redux/states/sidebar';

export type SidebarProps = {
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
	const clubState = useSelector((store: AppStore) => store.club);
	const userState = useSelector((store: AppStore) => store.user);
	const isAdmin = userState.rol === Roles.ADMIN;

	const open = useSelector((store: AppStore) => store.open.open);
	const dispatch = useDispatch();

	return (
		<div className="h-screen md:overflow-y-auto md:overflow-x-hidden bg-black rounded-lg">
			<a onClick={() => dispatch(toggleOpen())} className='absolute top-10 left-5 lg:hidden md:block hidden z-10'>
				<FontAwesomeIcon icon={faBars} className="p-4 text-white" />
			</a>
			<div className="flex flex-col h-full justify-center items-center">
				<div className="flex flex-col pt-6 justify-center items-center">
					<img src={logo} className="lg:h-14 lg:block md:hidden hidden" alt="Logo" />
					<h1 className="lg:text-2xl lg:block md:hidden text-lg mt-7 hidden font-medium bottom-0 text-center text-white">
						Black Gym Club
					</h1>
				</div>
				<div className='lg:mt-16'>
					<ul className="lg:px-10 md:px-0 px-5 text-white md:text-xs text-sm">
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
						<li className="m-5 ml-5 lg:mt-10 hover:bg-white rounded-md hover:text-black">
							<a
								className="flex items-center"
							>
								<FontAwesomeIcon
									icon={faArrowRightToBracket}
									className="md:h-3 h-5 m-2"
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
