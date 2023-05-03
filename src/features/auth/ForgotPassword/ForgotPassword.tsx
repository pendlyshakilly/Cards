import Paper from "@mui/material/Paper";
import React from "react";
import s from "./styles.module.css";
import FormEmail from "features/auth/form/FormEmail";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";

export const ForgotPassword = () => {
		const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({
				// mode: "onChange"
		});

		const onSubmit = (data: any) => {
				console.log(data);
				reset();
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


