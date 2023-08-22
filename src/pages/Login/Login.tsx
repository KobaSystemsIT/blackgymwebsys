import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes, Roles } from '../../models';
import { createUser, resetUser, UserKey } from '../../redux/states/user';
import { initLogin } from '../../services';
import { clearLocalStorage, persistLocalStorage } from '../../utilities';
import logo from '@/assets/icons/iconBG.svg'
import { getClubes } from '@/services/Clubes/clubes.service';
import { Clubes } from '@/models/Clubes';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [idClub, setIdClub] = useState('1');

  const [clubes, setClubes] = useState<Clubes[]>([]);

  useEffect(() => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    navigate(`/${PublicRoutes.LOGIN}`, { replace: true });
  }, []);

  const login = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault(); 
    try {
      const result = await initLogin(username, password, idClub);
      dispatch(createUser({ ...result }));
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    } catch (error) {
      console.error("Error de inicio de sesión:", error);
    }
  };

   const obtainClubes = async () => {
    try{
      const {data} = await getClubes();
      setClubes(data);
      console.log(data)
      //persistLocalStorage("user", data);
      //console.log(localStorage.getItem(key));
    } catch (error) {
      console.error("Error:", error);
    }
   }
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8" onLoad={obtainClubes}>
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
              Usuario
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
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Contraseña
              </label>
              <div className="text-sm">
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full pl-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring- ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <label htmlFor="idClub" className="block text-sm font-medium leading-6 text-gray-900">
              Club
            </label>
            <div className="mt-2">
              <select
                id="idClub"
                name="idClub"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={idClub}
                onChange={(e) => setIdClub(e.target.value)}
              >
                <option value="">Selecciona una sucursal.</option>
                {clubes.map(club => (
                  <option key={club.idClub} value={club.idClub}>{club.nameClub}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <button
              onClick={login}
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Ingresar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Login;
