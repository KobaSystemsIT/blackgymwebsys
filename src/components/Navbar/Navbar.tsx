import React from 'react';
import './Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faArrowRightToBracket, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logout } from '../Logout';
import { PrivateRoutes } from '@/models';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '@/redux/store';
import { toggleOpen } from '@/redux/states/sidebar';

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

  const open = useSelector((store: AppStore) => store.open.open);
  const dispatch = useDispatch();

  return (
    <div className="navbar p-4 border-b">
      <a onClick={() => dispatch(toggleOpen())} className='lg:hidden md:static hidden absolute md:left-12 left-10 z-10'>
        <FontAwesomeIcon icon={faBars} className="p-4text-black" />
      </a>
      <div className="relative flex-1">
        <div className="lg:text-sm text-xs breadcrumbs lg:ml-0 md:ml-10">
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

