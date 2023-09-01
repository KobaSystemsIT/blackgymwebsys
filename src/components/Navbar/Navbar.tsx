import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import { faArrowRightToBracket, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Logout } from '../Logout';

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

  return (
    <div className="navbar p-4 border-b">
      <div className="relative flex-1">
        <div className="lg:text-sm text-xs breadcrumbs">
          <ul className=''>
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
