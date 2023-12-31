import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRoutes } from '@/models';
import { resetUser, UserKey } from '@/redux/states/user';
import { clearLocalStorage } from '@/utilities';
import { removeClub } from '@/redux/states/club';

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logOut = () => {
    clearLocalStorage(UserKey);
    dispatch(resetUser());
    dispatch(removeClub());
    navigate("/login", { replace: true });
  };
  return <button onClick={logOut} className='text-sm'>Salir</button>;
}
export default Logout;
