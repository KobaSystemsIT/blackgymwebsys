import React, { useEffect, useState } from 'react';
import './RecuperarCuenta.css';
import logo from '@/assets/icons/iconBG.svg'
import { PublicRoutes } from '@/models';
import { useNavigate } from 'react-router-dom';
import { changePassword } from '@/services';
import { AlertComponent } from '@/components/AlertComponent';

export type RecuperarCuentaProps = {
}

const RecuperarCuenta: React.FC<RecuperarCuentaProps> = ({ }) => {

	const navigate = useNavigate();

	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [errorMessage, seErrorMessage] = useState('');

	const setNewPassword = async (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		if (!username || !password) {
			setShowEmptyFieldsAlert(true);
			return;
		};

		try {
			setShowModal(true);
			setIsLoading(true);

			const result = await changePassword(username, password);
			if(result) {
				setMessage(result.message);
				setShowAlert(true);

				 setTimeout(() => {
					setShowAlert(false);
					navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
				 }, 2000)
			}
		} catch (error: any) {
			console.error('Error de inicio de sesión:', error);
			setIsLoading(false);
			setShowModal(false);
			seErrorMessage(error.message);
		}

		useEffect(() => {
			if (showAlert) {
			  // Ocultar la alerta después de 2 segundos
			  const timeoutId = setTimeout(() => {
				setShowAlert(false);
			  }, 2000);
		
			  return () => {
				clearTimeout(timeoutId); // Limpiar el temporizador si el componente se desmonta antes.
			  };
			}
		  }, [showAlert]);
	}

	return <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
		{showAlert && (
			<AlertComponent message={message}></AlertComponent>
		)}
		<div className="relative py-3 sm:max-w-xl sm:mx-auto">
			<div
				className="absolute inset-0 bg-gradient-to-r from-black to-white shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
			</div>
			<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
				<div className="max-w-md mx-auto">
					<div className="sm:mx-auto sm:w-full sm:max-w-sm" >
						<img
							className="mx-auto h-16 w-auto"
							src={logo}
							alt="Your Company"
						/>
						<h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-black">
							Recuperación de cuenta
						</h2>
					</div>
					<div className="divide-y divide-gray-200">
						<div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
							<div className="relative">
								<input id="username" value={username}
									onChange={(e) => setUsername(e.target.value)} name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
								<label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Ingresa tu usuario</label>
							</div>
							<div className="relative">
								<input id="password" onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
								<label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Ingresa una nueva contraseña</label>
							</div>

							{showEmptyFieldsAlert && (
								<div className="text-red-600">
									Por favor, complete todos los campos.
								</div>
							)}

							{errorMessage && (
								<div className="text-red-600">
									{errorMessage}
								</div>
							)}

							<div className="relative">
								<button onClick={setNewPassword}
									className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-normal leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
								>
									Restablecer contraseña
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		{showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="">
            {isLoading ? (
              <div className="flex flex-col bg-white p-4 rounded-lg shadow-md items-center">
                <span className="loading loading-lg text-black"></span>
                <span>Por favor espere...</span>
              </div>
            ) : (
              <p>Por favor espere...</p>
            )}
          </div>
        </div>
      )}
	</div>
};

export default RecuperarCuenta;
