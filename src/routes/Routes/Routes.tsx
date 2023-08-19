import { NotFound } from '@/app/common/NotFound';
import { Dashboard } from '@/app/pages/Dashboard';
import { Login } from '@/app/pages/Login';
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PrivateRoute from './privateRoute';

export type RoutesProps = {};

const Rutas: React.FC<RoutesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <PrivateRoute path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <PrivateRoute path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;

