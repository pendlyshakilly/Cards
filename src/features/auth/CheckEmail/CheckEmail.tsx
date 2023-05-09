import Paper from "@mui/material/Paper";
import React from "react";
import s from "./styles.module.css";
import image from "assets/img/letter.png";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "app/hooks";
import { valueEmail } from "features/auth/ForgotPassword/ForgotPassword";

export const CheckEmail = () => {

		const valueEmail1 = useAppSelector(state => state.auth.profile?.email )
		const navigate = useNavigate()
		const onClickBack = () => {
		  navigate('/login')
		}

		return (
			<div className={s.container}>
					<Paper className={s.Paper}>
							<h1>Check Email</h1>
							<div className={s.img}>
									<img src={image} alt="email-logo" />
							</div>
							<div className={s.description}>
									<p>We’ve sent an Email with instructions to {valueEmail}</p>
							</div>
							<div style={{ marginTop: "31px" }}>
									<ButtonForAuth title={'Back to login'} callback={onClickBack}/>
							</div>
					</Paper>
			</div>
		);
};

