import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '@/models';
import { createUser, resetUser, UserKey } from '@/redux/states/user';
import { initLogin } from '@/services';
import { clearLocalStorage } from '@/utilities';
import logo from '@/assets/icons/iconBG.svg';
import { getClubes } from '@/services/Clubes/clubes.service';
import { Clubes } from '@/models/clubes';
import club, { addClub } from '@/redux/states/club';
import { deleteToken, saveToken } from '@/redux/states/token';
import { authToken } from '@/services';
import { Loading } from '@/components/LoadingComponent/LoadingComponent';
import { Alert } from '@/components/AlertComponent/AlertComponent';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [idClub, setIdClub] = useState('0');
  const [errorMessage, setErrorMessage] = useState('');
  const [showEmptyFieldsAlert, setShowEmptyFieldsAlert] = useState(false);
  const [clubes, setClubes] = useState<Clubes[]>([]);

  useLayoutEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    dispatch(deleteToken());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    if (!username || !password || !idClub) {
      setShowEmptyFieldsAlert(true);
      return;
    }

    try {
      const result = await initLogin(username, password, idClub);
      Loading();
      setTimeout(() => {
        const tokenData = { token: authToken };
        dispatch(saveToken({ ...tokenData }));
        dispatch(createUser({ ...result }));
        navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
      }, 2000);
    } catch (error: any) {
      console.error('Error de inicio de sesión:', error);
      setErrorMessage(error.message);
      Alert(error.message, false);
    }
  };

  const handleClub = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setIdClub(selectedValue);
    const id = parseInt(selectedValue);
    const targetClub = clubes.find((club) => club.idClub === id);
    if (targetClub) {
      const { idClub, nameClub, addressClub } = targetClub;
      const data = { idClub, nameClub, addressClub };
      dispatch(addClub({ ...data }));
    } else {
      console.log('No se encontró ningún club para el ID seleccionado');
    }
  };

  const obtainClubes = async () => {
    try {
      const { data } = await getClubes();
      setClubes(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="bg-gray-100 flex flex-col justify-center sm:py-12 overflow-hidden h-screen" onLoad={obtainClubes}>
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
                Bienvenido
              </h2>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input id="username" value={username}
                    onChange={(e) => setUsername(e.target.value)} name="username" type="text" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                  <label htmlFor="username" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Usuario</label>
                </div>
                <div className="relative">
                  <input id="password" onChange={(e) => setPassword(e.target.value)} name="password" type="password" className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600" />
                  <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Contraseña</label>
                </div>
                <div className="relative">
                  <div className="pt-2 pb-2">
                    <select
                      id="idClub"
                      name="idClub"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={idClub}
                      onChange={handleClub}
                    >
                      <option value="">Selecciona una sucursal.</option>
                      {clubes.map(club => (
                        <option key={club.idClub} value={club.idClub}>{club.nameClub}</option>
                      ))}
                    </select>
                  </div>
                  <label htmlFor="idClub" className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm">Club</label>
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
                  <button
                    onClick={login}
                    className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Ingresar
                  </button>
                </div>
                <div className="relative">
                  <a href={PublicRoutes.FORGOTPASS} className="absolute left-4 -top-1 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm hover:text-indigo-500 hover:border-b">Olvidaste tu contraseña?</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;