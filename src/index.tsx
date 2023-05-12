import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "app/store";
import App from "app/App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import { Register } from "features/auth/Register/Register";
import { Login } from "features/auth/Login/Login";
import { ForgotPassword } from "features/auth/ForgotPassword/ForgotPassword";

import { CreateNewPassword } from "features/auth/CreateNewPassword/CreateNewPassword";
import Profile from "features/profile/Profile";
import { CheckEmail } from "features/auth/checkEmail/CheckEmail";


const container = document.getElementById("root")!;
const root = createRoot(container);
const router = createBrowserRouter([
		{
				path: "/",
				element: <h1>APP</h1>
		},
		{
				path: "/login",
				element: <Login />
		},
		{
				path: "/register",
				element: <Register />
		},
		{
				path: "/packs",
				element: <h1>Packs</h1>
		},
		{
				path: "/forgot-password",
				element: <ForgotPassword />
		},
		{
				path: "/check-email",
				element: <CheckEmail />
		},
		{
				path: "/create-new-password/:token",
				element: <CreateNewPassword />
		},
		{
				path: "/profile",
				element: <Profile />
		}
]);

root.render(
	<Provider store={store}>
			{/*<RouterProvider router={router} />*/}
			<BrowserRouter>
					<App />
			</BrowserRouter>

	</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
