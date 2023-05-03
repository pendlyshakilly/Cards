import React from "react";
import { useAppDispatch, useAppSelector } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import styled from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { ArgLoginType } from "features/auth/auth.api";
import { useForm } from "react-hook-form";
import Paper from "@mui/material/Paper";
import FormEmail from "features/auth/form/FormEmail";
import FormPassword from "features/auth/form/FormPassword";

export const Login = () => {

		const profile = useAppSelector(state => state.auth.profile);
		const dispatch = useAppDispatch();
		const navigate = useNavigate();

		const { register, handleSubmit, reset, formState: { errors } } = useForm<ArgLoginType>({
				mode: "onChange"
		});

		const onSubmit = (data: ArgLoginType) => {
				dispatch(authThunks.login(data));
				reset();
		};

		profile !== null && navigate("/");
		return (
			<>
					<Paper style={{ width: "413px", margin: "0 auto" }} elevation={2}>
							<div className={styled.loginBlock}>
									<h1>Sign in</h1>
									<form onSubmit={handleSubmit(onSubmit)}>
											<div className={styled.requestLogin}>
													<div className={styled.email}>
															<FormEmail register={register} errors={errors} />
													</div>
													<div className={styled.password}>
															<FormPassword title={"Password"} register={register} errors={errors} type={"password"} />
													</div>
													<div className={styled.checked}>
															<FormControlLabel control={<Checkbox  {...register("rememberMe")} />}
																								label="Remember me" />
													</div>
											</div>
											<div className={styled.linkForgot}>
													<Link style={{ textDecoration: "none" }} to={"/forgot-password"}>Forgot Password?</Link>
											</div>
											<div className={styled.btnSubmitBlock}>
													<button className={styled.btn} onClick={() => onSubmit}>LOGIN</button>
											</div>
									</form>
									<p className={styled.text}>Don't have an account?</p>
									<div style={{ marginBottom: "42px" }}>
											<Link className={styled.singUp} to={"/register"}>Sign Up</Link>
									</div>
							</div>
					</Paper>
			</>

		);
};
