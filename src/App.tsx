import { lazy, Suspense } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './redux/store';
import Rutas from './routes/routes';
import { Loading } from './common/Loading';

const Login = lazy(() => import('./pages/Login/Login'));
const Private = lazy(() => import('./pages/Private/Private'));

function App() {
  return (
      <Suspense fallback={<><Loading/></>}>
        <Provider store={store}>
          <Rutas></Rutas>
        </Provider>
      </Suspense>
  );
}

export default App;
