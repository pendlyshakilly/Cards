import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import styled from "./Login.module.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ArgLoginType } from "features/auth/auth.api";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";

export const Login = () => {

		const profile = useAppSelector(state => state.auth.profile);
		const isLogged = useAppSelector(state => state.auth.isLogged);
		const dispatch = useAppDispatch();
		const loginHandler = () => {
				const payload = {
						email: "mytest@gmail.com",
						password: "12345678",
						rememberMe: true
				};
				dispatch(authThunks.login(payload));
		};
		const navigate = useNavigate();


		const { register, control, handleSubmit, reset, formState: { errors, isValid } } = useForm<ArgLoginType>({
				mode: "onChange"
		});

		const onSubmit = (data: ArgLoginType) => {
				dispatch(authThunks.login(data));
				;
				reset();
		};
		const [showPassword, setShowPassword] = useState(false);
		const handleClickShowPassword = () => setShowPassword((show) => !show);
		const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
				event.preventDefault();
		};

		profile !== null && navigate("/");
		return (
			<>
			<Paper style={{width:'413px', margin:'0 auto'}} elevation={2}>
					<div className={styled.loginBlock}>
									<h1>Sign in</h1>
									<form onSubmit={handleSubmit(onSubmit)}>
											<div className={styled.requestLogin}>
													<div className={styled.email}>
															<TextField
																type={"email"}
																label="Email"
																id="standard-start-adornment"
																sx={{ m: 1, width: "40ch" }}
																variant="standard"
																{...register("email", {
																		required: true,
																		 pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
																})}
															/>
															{errors.email?.type === 'required' &&
                                <p className={styled.error_message} role="alert">Email is required</p>}
															{errors.email?.type === 'pattern' &&
                                <p className={styled.error_message} role="alert">Email is not valid</p>}
													</div>
													<div className={styled.password}>
															<FormControl sx={{ m: 1, width: "40ch" }} variant="standard">
																	<InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
																	<Input
																		id="standard-adornment-password"
																		type={showPassword ? "text" : "password"}
																		endAdornment={
																				<InputAdornment position="end">
																						<IconButton
																							aria-label="toggle password visibility"
																							onClick={handleClickShowPassword}
																							onMouseDown={handleMouseDownPassword}
																						>
																								{showPassword ? <VisibilityOff /> : <Visibility />}
																						</IconButton>
																				</InputAdornment>
																		}
																		{...register("password", {
																				required: true,
																				minLength: 8
																		})}
																	/>
															</FormControl>
															{errors.password?.type === "required" &&
															  <p className={styled.error_message} role="alert">Password is required</p>}
															{errors.password?.type === "minLength" &&
															  <p className={styled.error_message} role="alert">Password should be more 3 symbols</p>}
													</div>
													<div className={styled.checked}>
															<FormControlLabel control={<Checkbox  {...register("rememberMe")} />}
																								label="Remember me" />
													</div>
											</div>
											<div className={styled.linkForgot}>
													<Link style={{ color: "black", borderBottom: "aqua" }} to={"/forgot-password"}>Forgot
															Password?</Link>
											</div>

											<div className={styled.btnSubmitBlock}>
													{/*<input type="submit" />*/}
													<button className={styled.btn} onClick={() => onSubmit}>
															LOGIN
													</button>
											</div>
									</form>
									<p className={styled.text}>Don't have an account?</p>
									<div style={{ marginTop: "11px" }}>
											<Link className={styled.singUp} to={"/register"}>Sign Up</Link>
									</div>
					</div>
			</Paper>
			</>

		);
};

{/*<Controller*/
}
{/*	name={'email'}*/
}
{/*	control={control}*/
}
{/*	rules={{required:true}}*/
}

{/*	render={({field})=><Email error={errors} field={field}/>}*/
}
{/*	/>*/
}
{/*<Controller*/
}
{/*	name={'password'}*/
}
{/*	control={control}*/
}
{/*	rules={{required:true}}*/
}
{/*	render={({field})=><Password field={field}/>}*/
}
{/*/>*/
}
