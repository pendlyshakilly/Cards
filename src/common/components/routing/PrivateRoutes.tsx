import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "common/hooks";



export const PrivateRoutes = () => {

		console.log('PrivateRoutes');
		const isAuth = useAppSelector(state => state.auth.isAuth)


		let auth = {'token':isAuth}
		console.log(isAuth);
		return (
			auth.token ? <Outlet/> : <Navigate to='/login'/>
		);
};

