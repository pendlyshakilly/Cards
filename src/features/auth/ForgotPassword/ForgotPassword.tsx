import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import s from "./styles.module.css";
import FormEmail from "features/auth/form/FormEmail";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";
import { authThunks } from "features/auth/auth.slice";
import { useAppSelector } from "common/hooks";
import { useAppDispatch } from "common/hooks";


export let valueEmail: string;
export const ForgotPassword = () => {

		const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
				// mode: "onChange"
		});
		const dispatch = useAppDispatch();
		const isAuth = useAppSelector(state => state.auth.isAuth);
		const navigate = useNavigate();


		useEffect(() => {
				if (isAuth) {
						return navigate("/check-email");
				}
		}, [isAuth]);


		const onSubmit = (data: { email: string }) => {
				dispatch(authThunks.forgotPassword(data.email));
				valueEmail = data.email;
		};


		return (
			<div className={s.container}>
					<Paper className={s.Paper}>
							<div><h1>Forgot your password?</h1></div>
							<form onSubmit={handleSubmit(onSubmit)}>
									<div className={s.wrapper}>
											<div style={{ marginTop: "40px" }}>
													<FormEmail register={register} errors={errors} />
											</div>
											<p className={s.descriptionEmail}>Enter your email address and we will send you further
													instructions </p>
									</div>
							</form>
							<div style={{ marginTop: "31px" }}>
									<ButtonForAuth title={"Send Instructions"} callback={handleSubmit(onSubmit)} />
							</div>
							<div style={{ textAlign: "center", marginTop: "11px" }}>
									<p className={s.rememberPassText}>Did you remember your password?</p>
									<Link className={s.tryLogging} to={"/login"}>Try logging in</Link>
							</div>
					</Paper>
			</div>
		);
};


