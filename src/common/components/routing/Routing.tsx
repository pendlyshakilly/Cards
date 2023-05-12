import React from "react";
import { Route, Routes } from "react-router-dom";
import { PrivateRoutes } from "common/components/routing/PrivateRoutes";
import Profile from "features/profile/Profile";
import { Login } from "features/auth/Login/Login";
import { Register } from "features/auth/Register/Register";
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword";
import { CreateNewPassword } from "features/auth/CreateNewPassword/CreateNewPassword";
import { CheckEmail } from "features/auth/checkEmail/CheckEmail";
import Packs from "features/packs/packsComponent/Packs";

export const Routing = () => {
		return (
			<>
					<Routes>
							<Route element={<PrivateRoutes/>}>
									<Route path='/' element={<h1>Home Page</h1>}  />
									<Route path='/packs' element={<Packs/>} />
									<Route path='/profile' element={<Profile/>} />
							</Route>
							<Route path='/register' element={<Register/>}/>
							<Route path='/login' element={<Login/>}/>
							<Route path='/forgot-password' element={<ForgotPassword/>}/>
							<Route path='/check-email' element={<CheckEmail/>}/>
							<Route path='/create-new-password/:token' element={<CreateNewPassword/>}/>
					</Routes>

			</>
		);
};

