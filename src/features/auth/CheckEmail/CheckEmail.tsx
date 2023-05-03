import Paper from "@mui/material/Paper";
import React from "react";
import s from "./styles.module.css";
import image from "features/auth/CheckEmail/letter.png";
import { ButtonForAuth } from "features/auth/ButtonForAuth/ButtonForAuth";

export const CheckEmail = () => {
		

		return (
			<div className={s.container}>
					<Paper className={s.Paper}>
							<h1>Check Email</h1>
							<div className={s.img}>
									<img src={image} alt="email-logo" />
							</div>
							<div className={s.description}>
									<p>We’ve sent an Email with instructions to example@mail.com</p>
							</div>
							<div style={{ marginTop: "31px" }}>
									<ButtonForAuth title={'Back to login'} callback={()=>{}}/>
							</div>
					</Paper>
			</div>
		);
};

