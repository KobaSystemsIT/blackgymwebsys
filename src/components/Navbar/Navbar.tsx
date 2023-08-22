import React from 'react';
import './Navbar.css';
import { useLocation } from 'react-router-dom';
import { faArrowRightToBracket, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logout } from '../Logout';


export type NavbarProps = {
}

const Navbar: React.FC<NavbarProps> = ({ }) => {

	const location = useLocation();
	const pathSegments = location.pathname.split('/').filter((segment: string) => segment !== '');

	return <div className="navbar p-4 border-b">
		<div className="flex-1">
			<div className="text-sm breadcrumbs">
				<ul>
					<li>
						<a href="/">
							<FontAwesomeIcon icon={faHome} /> {/* Icono de casa */}
						</a>
					</li>
					<li>
						{pathSegments.length > 0 ? (
							<span>{pathSegments[pathSegments.length - 1]}</span>
						) : (
							<span>Home</span>
						)}
					</li>
				</ul>
			</div>
		</div>
		<div className="flex-none">
			<ul className="menu menu-horizontal">
				<li>
					<details>
						<summary className='text-xs'>
							Opciones
						</summary>
						<ul className="p-2 text-xs">							
							<li>
								<div>
									<h1>Editar perfil</h1>
								</div>
							</li>
							<li>
								<div>
									<FontAwesomeIcon icon={faArrowRightToBracket} className="h-2" />
									<Logout></Logout>
								</div>
							</li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	</div>
};

export default Navbar;
