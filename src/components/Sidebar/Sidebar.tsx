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
	const clubState = useSelector((store: AppStore) => store.club); 
	const userState = useSelector((store: AppStore) => store.user);
	const isAdmin = userState.rol === Roles.ADMIN;




	return (
		<div className="h-full md:overflow-y-auto md:overflow-x-hidden bg-black">
			<div className="pt-20">
				<div className="flex flex-col items-center">
					<div className="flex flex-col pt-6 justify-center">
						<img src={logo} className="h-10" alt="Logo" />
						<h1 className="text-lg mt-2  font-medium bottom-0 text-center text-white">
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
