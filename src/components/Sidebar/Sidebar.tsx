import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFileAlt, faUser, faCog, faBars, faCartShopping, faTable, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { Logout } from '../Logout';
import './Sidebar.css'
import logo from '@/assets/icons/iconBG.svg'
import { PrivateRoutes } from '@/models';

export type SidebarProps = {
}

const Sidebar: React.FC<SidebarProps> = ({ }) => {
	const [showMenu, setShowMenu] = useState(false);

	const onMouseEnter = () => {
		setShowMenu(true);
	};

	const onMouseLeave = () => {
		setShowMenu(false);
	};


	return (
		<div
			className={`relative border-r bg-black rounded-lg ${showMenu ? 'w-48' : 'w-24'
				}`}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div
				className={`w-48 pt-5 rounded-lg ${showMenu ? 'w-48' : ' w-14'
					} transition-all duration-1000`}
			>
				<div className="flex flex-col items-center">
					<div className="flex flex-col pt-6 justify-center">
						<img src={logo} className={`${showMenu ? 'h-8' : 'relative h-8 left-4'}`} alt="Logo" />
						<h1
							className={`text-sm font-medium bottom-0 text-center text-white bg-dark ${showMenu ? 'block' : 'hidden'
								}`}
						>
							Black Gym Club
						</h1>
					</div>
				</div>
				<div className="pt-5">
					<ul className="py-2 px-3 text-white text-sm">
						<li className="m-5 hover:bg-white rounded-md hover:text-black">
							<a
								href="/"
								className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
									}`}
							>
								<FontAwesomeIcon
									icon={faHome}
									className={`${showMenu ? ' m-3 h-2' : 'h-5'}`}
								/>
								<h1 className={`${showMenu ? 'block' : ' hidden'}`}>Inicio</h1>
							</a>
						</li>
						<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href={PrivateRoutes.SUCSTAFF}
								className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
									}`}
							>
								<FontAwesomeIcon
									icon={faTable}
									className={`${showMenu ? ' m-3 h-2' : 'h-5'}`}
								/>
								<h1 className={`${showMenu ? 'block' : ' hidden'}`}>
									Gestión de Sucursal
								</h1>
							</a>
						</li>
						<li className="m-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href={PrivateRoutes.PDV}
								className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
									}`}
							>
								<FontAwesomeIcon
									icon={faCartShopping}
									className={`${showMenu ? ' m-3 h-2' : 'h-5'}`}
								/>
								<h1 className={`${showMenu ? 'block' : ' hidden'}`}>Punto de Venta</h1>
							</a>
						</li>
						<li className="m-5 ml-5 mt-7 hover:bg-white rounded-md hover:text-black">
							<a
								href="/login"
								className={`${showMenu ? 'flex items-center' : 'relative items-center left-1'
									}`}
							>
								<FontAwesomeIcon
									icon={faArrowRightToBracket}
									className={`${showMenu ? ' m-3 h-2' : 'h-5'}`}
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
