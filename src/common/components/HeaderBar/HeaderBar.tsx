import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import logo from "assets/img/logo.png";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "common/hooks/useAppSelector";
import CircularProgress from "@mui/material/CircularProgress";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";
import { useAppSelector } from "app/hooks";
import { useNavigate } from "react-router-dom";

export const HeaderBar = () => {
		// debugger
		const isAuth = useAppSelector(state => state.auth.isAuth)
		const navigate = useNavigate()
		const isInitialized = useAppSelector(state => state.auth.isInitialized)


		const onCLickSignIn = () => {
				navigate('/login');
		}

// 		const navigate = useNavigate();
// 		const isInitialized = useAppSelector((state) => state.auth.isInitialized);
//
// 		// Получить данные об авторизации пользователя из localStorage
// 		// const isAuth = localStorage.getItem('isAuth') === 'true';
// 		const [isLogout, setIsLogout] = React.useState(true);
//
//
//
// // Получение значения из локального хранилища
// 		const isAuthForBtn = JSON.parse(localStorage.getItem('isAuth') || 'false');
//
//
// 		const onCLickSignIn = () => {
// 				localStorage.setItem('isAuth', JSON.stringify(true));
// 				setIsLogout(true);
// 				navigate('/login');
// 		};
//
// 		const onCLickLogOut = () => {
// 				localStorage.removeItem('isAuth');
// 				setIsLogout(false);
// 				// Дополнительная логика для выхода из приложения
// 		};
//
//


		return (
			<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
							<Toolbar style={{backgroundColor:'white'}}>
									<Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
												<img src={'logo'} alt="logotype" />
									</Typography>
									{ isAuth ? <button>logOut</button> : <ButtonForAuth title={"sign in"} callback={onCLickSignIn} />}
							</Toolbar>
					</AppBar>
			</Box>
		);
};
