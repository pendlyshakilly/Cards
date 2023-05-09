import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "assets/img/logo.png";
import LogoutIcon from "@mui/icons-material/Logout";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";
import { useAppSelector } from "app/hooks";
import { Navigate, useNavigate } from "react-router-dom";

export const HeaderBar = () => {
		const isAuth = useAppSelector(state => state.auth.isAuth)
		const navigate = useNavigate()
		const onCLickSignIn = () => {
				console.log();
		navigate('/login')
		}
		return (
			<Box sx={{ flexGrow: 1 }}>
					<AppBar position="static">
							<Toolbar style={{backgroundColor:'white'}}>
									<Typography variant="h6" component="div"  sx={{ flexGrow: 1 }}>
												<img src={logo} alt="logotype" />
									</Typography>
									{isAuth ? <button>logOut</button> : <ButtonForAuth title={"sign in"} callback={onCLickSignIn} />}
							</Toolbar>
					</AppBar>
			</Box>
		);
};
