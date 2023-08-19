import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

type PrivateRouteProps = {
  element: React.ReactNode;
  path: string;
};

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element, path }) => {
  const token = useSelector((state: any) => state.auth.token);

  return token ? <Route path={path} element={element} /> : <Navigate to="/login" />;
};

export default PrivateRoute;
