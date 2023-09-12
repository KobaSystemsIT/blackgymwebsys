import { BrowserRouter, Navigate, Route } from "react-router-dom";
import { RoutesWithNotFound } from "../utilities";
import { PrivateRoutes, PublicRoutes } from "../models";
import { AuthGuard } from "../guards";
import { lazy } from "react";
import { RecuperarCuenta } from "@/pages/RecuperarCuenta";


const Login = lazy(() => import('@/pages/Login/Login'));
const Private = lazy(() => import('@/pages/Private/Private'));


export default function Rutas() {
    return (
        <BrowserRouter>
            <RoutesWithNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                <Route path={PublicRoutes.LOGIN} element={<Login />} />
                <Route path={PublicRoutes.FORGOTPASS} element={<RecuperarCuenta/>}></Route>
                <Route element={<AuthGuard privateValidation={true} />}>
                    <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
            </RoutesWithNotFound>
        </BrowserRouter>
    )
}