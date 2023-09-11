import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from '../models';
import { AppStore } from '@/redux/store';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const tokenInStorage = useSelector((store: AppStore) => store.token);
  const tokenInlocalStorage = localStorage.getItem('token');
  const redirect = !tokenInStorage.token || !tokenInlocalStorage;
  return redirect ? (
    <Navigate replace to={PublicRoutes.LOGIN} />
  ) : (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  );
};

export default AuthGuard;
