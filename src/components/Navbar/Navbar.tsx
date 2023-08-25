import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { faArrowRightToBracket, faHome, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logout } from '../Logout';
import { PrivateRoutes } from '@/models'; // Importa tus rutas privadas aquí

export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment: string) => segment !== '');

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const displayText = segment.split('_').join(' ');

    if (index === 0 && PrivateRoutes.DASHBOARD.includes(segment)) {
      return (
        <li key={index}>
          <Link to={`/${PrivateRoutes.DASHBOARD}`}>
            <FontAwesomeIcon icon={faHome} />
          </Link>
        </li>
      );
    }

    return (
      <li key={index}>
        <span>{displayText}</span>
      </li>
    );
  });

  return (
    <div className="navbar p-4 border-b">
      <div className="relative flex-1 left-5">
        <div className="text-sm breadcrumbs">
          <ul>
            {breadcrumbItems}
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-4">
          <li>
            <details>
              <summary className="text-xs">
                <h1>Más</h1>
              </summary>
              <ul className="text-xs">
                <li>
                  <div>
                    <FontAwesomeIcon icon={faPenToSquare} className="h-2" />
                    <h1>Editar perfil</h1>
                  </div>
                </li>
                <li>
                  <div>
                    <FontAwesomeIcon icon={faArrowRightToBracket} className="h-2" />
                    <Logout />
                  </div>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
