import Paper from "@mui/material/Paper";
import React, { useEffect } from "react";
import s from "./styles.module.css";
import { useForm } from "react-hook-form";
import FormPassword from "features/auth/form/FormPassword";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";

import { useNavigate, useParams } from "react-router-dom";
import { authThunks } from "features/auth/auth.slice";
import { useAppSelector } from "common/hooks/useAppSelector";
import { useAppDispatch } from "common/hooks/useAppDispatch";

export const CreateNewPassword = () => {
		const dispatch = useAppDispatch();
		const isAuth = useAppSelector(state => state.auth.isAuth);
		const navigate = useNavigate();
		const { token }  = useParams()


		useEffect(() => {
				if (isAuth) {
						return navigate("/login");
				}
		}, [isAuth]);


		const { register, handleSubmit, reset, formState: { errors } } = useForm<any>({

		});

		const onSubmit = (data: { password:string }) => {
				const payload = {
						password: data.password,
						resetPasswordToken: token
				}
			 dispatch(authThunks.createPassword(payload))
				reset();
		};


		return (
			<div className={s.container}>
					<Paper className={s.Paper}>
							<h1>Create new password</h1>
							<form onSubmit={handleSubmit(onSubmit)}>
									<div style={{marginTop:'50px'}}>
											<FormPassword title={'Password'} register={register} errors={errors} type={'password'}/>
									</div>
							</form>
							<div className={s.description}>
									<p>Create new password and we will send you further instructions to email</p>
							</div>
					<div style={{marginTop:'42px'}}>
							<ButtonForAuth title={'Create new password'} callback={handleSubmit(onSubmit)}/>
					</div>

					</Paper>

			</div>
		);
};

