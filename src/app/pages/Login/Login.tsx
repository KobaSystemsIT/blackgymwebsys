import { createUser } from '@/redux/states/user';
import { initLogin } from '@/services/firebase/auth/auth.service';
import { useDispatch } from 'react-redux';

function Login() {
  const dispatch = useDispatch();

  const username = 'adminAlfredo1';
  const password = 'bautista2002';

  const login = async () => {
    try{
		const result = await initLogin(username, password);
		dispatch(createUser({...result}));
	}catch{

	}
  };

  return (
    <div>
      <h2>HOLA ESTE ES EL LOGIN</h2>
      <button onClick={login}>LOGIN</button>
    </div>
  );
}

export default Login;

