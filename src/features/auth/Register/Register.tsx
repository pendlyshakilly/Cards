
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/styles.module.css";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { NavLink, useNavigate } from "react-router-dom";
import FormEmail from "features/auth/form/FormEmail";
import FormPassword from "features/auth/form/FormPassword";
import { useAppDispatch, useAppSelector } from "common/hooks";
import { toast } from "react-toastify";


type IFormInput = {
		email: string;
		password: string | number;
		confirmPassword: string | number
}

export const Register = () => {

		const isAuth = useAppSelector<boolean>(state => state.auth.isAuth);
		const navigate = useNavigate();
		const dispatch = useAppDispatch();
		const [error, setError] = useState(false);
		const { register, handleSubmit, reset, formState: { errors } } = useForm({
				defaultValues: {
						email: "",
						password: "",
						confirmPassword: ""
				}
		});

		const onSubmit: SubmitHandler<IFormInput> = (data, e) => {
				if (data.password !== data.confirmPassword) {
						setError(true);
						return;
				}
				setError(false);
				e && e.preventDefault();
				let { email, password } = data;
				let payload = {
						email,
						password
				};
				dispatch(authThunks.register(payload))
					.unwrap()
					.then(()=>{
							toast.success('You have successfully registered');
							navigate('/login')
					});
				reset();
		};


		return (
			<div className={s.container}>
					<Paper className={s.Paper}>
							<div><h1>Sign Up</h1></div>
							<form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column" }}>
									<FormEmail register={register} errors={errors} />
									<FormPassword title={"Password"} register={register} errors={errors} type={"password"} />
									<FormPassword title={"Confirm Password"} register={register} errors={errors}
																type={"confirmPassword"} />
									{errors.confirmPassword?.type !== "required" && error &&
                    <p style={{ color: "red" }}>Password is not sync</p>}
									<Button onClick={handleSubmit(onSubmit)}
													sx={{ m: 1, width: "347px", borderRadius: "30px", backgroundColor: "#366EFF" }}
													variant="contained">Sign Up</Button>
							</form>
							<div style={{ textAlign: "center" }}>
									<p style={{ color: "gray" }}>Already have an account ?</p>
									<NavLink to={"/login"} style={{ fontSize: "16px", fontWeight: "700", color: "#366EFF" }}>Sign
											In</NavLink>
							</div>
							{/*<button onClick={onSubmitApi}>onSubmitApi</button>*/}
					</Paper>
			</div>
		);
};
