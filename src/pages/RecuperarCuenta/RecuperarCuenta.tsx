import React, { useState } from 'react';
import './RecuperarCuenta.css';
import logo from '@/assets/icons/iconBG.svg'

export type RecuperarCuentaProps = {
}

const RecuperarCuenta: React.FC<RecuperarCuentaProps>  = ({}) => {
	
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	return <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
	<div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-16 w-auto"
          src={logo}
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Bienvenido
        </h2>
      </div>

	<div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
	  <form className="space-y-6">
		<div>
		  <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
			Ingresa tu usuario:
		  </label>
		  <div className="mt-2">
			<input
			  id="useranme"
			  name="username"
			  type="username"
			  required
			  value={username}
			  onChange={(e) => setUsername(e.target.value)}
			  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		  </div>
		</div>

		<div>
		  <div className="flex items-center justify-between">
			<label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Ingresa una nueva contraseña:</label>
		  </div>
		  <div className="mt-2">
			<input
			  id="password"
			  name="password"
			  type="password"
			  required
			  onChange={(e) => setPassword(e.target.value)}
			  className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
			/>
		  </div>
		</div>

		<div>
		  <button
			className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
		  >
			Cambiar contraseña
		  </button>
		</div>
	  </form>
	</div>
  </div>;
};

export default RecuperarCuenta;
