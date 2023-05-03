import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const FormPassword = (props: any) => {
		const [showPassword, setShowPassword] = useState(false);

		const handleClickShowPassword = () => setShowPassword(prevState => !prevState);
		const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {

		};
		return (
			<FormControl sx={{ m: 1, width: "347px" }} variant="standard">
					<InputLabel htmlFor="standard-adornment-password">{props.title}</InputLabel>
					<Input
						{...props.register(props.type, {
								required: 'Title is required',
								minLength: {
										value:8,
										message:'Password should be more 8 symbols'
								}
						})}
						error={props.errors?.password}
						helperText="Incorrect entry."
						id="standard-adornment-password"
						type={showPassword ? "text" : "password"}
						endAdornment={
								<InputAdornment position="end">
										<IconButton
											aria-label="toggle password visibility"
											onClick={handleClickShowPassword}
											onMouseDown={handleMouseDownPassword}>
												{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
								</InputAdornment>
						}
					/>
					{props.errors.password && <p role="alert" style={{color: 'red', margin:'0px'}}>{props.errors.password.message}</p>}
			</FormControl>
		);
};

export default FormPassword;
