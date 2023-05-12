import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "app/hooks";

export const PrivateRoutes = () => {
		const isAuth = useAppSelector(state => state.auth.isAuth)
		let auth = {'token':isAuth}
		return (
			auth.token ? <Outlet/> : <Navigate to='/login'/>
		);
};

