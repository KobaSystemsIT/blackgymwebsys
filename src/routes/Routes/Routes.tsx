import { NotFound } from '@/app/common/NotFound';
import { Dashboard } from '@/app/pages/Dashboard';
import { Login } from '@/app/pages/Login';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export type RoutesProps = {
}

const Rutas: React.FC<RoutesProps>  = ({}) => {
	return <>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Login/>}></Route>
				<Route path='*' element={<NotFound/>}></Route>
				<Route path='/dashboard' element={<Dashboard/>}></Route>
			</Routes>
		</BrowserRouter>
	</>;
};

export default Rutas;
