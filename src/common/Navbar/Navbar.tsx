import React from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logout } from '../../components/Logout';
import { PrivateRoutes } from '@/models';
export type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({ }) => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment: string) => segment !== '');

  const breadcrumbItems = pathSegments.map((segment, index) => {
    const displayText = segment.split('_').join(' ');
    const pathSegmentsSoFar = pathSegments.slice(0, index + 1);
    const path = `/${pathSegmentsSoFar.join('/')}`;

    return (
      <li key={index}>
        <Link to={path}>{displayText}</Link>
      </li>
    );
  });

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(`${PrivateRoutes.DASHBOARD}`, { replace: true });// Navega hacia atrás en la pila de rutas
    window.location.reload(); // Recarga la página
  };


  return (
    <div className="navbar p-4 border-b">
      <div className="relative flex-1">
        <div className="lg:text-sm text-xs breadcrumbs lg:ml-0 md:ml-8">
          <ul onClick={handleGoBack}>
            {breadcrumbItems}
          </ul>
        </div>
      </div>
      <div className="flex-none">
        <div className='flex items-center'>
          <FontAwesomeIcon icon={faArrowRightToBracket} className="h-3 m-2" />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

