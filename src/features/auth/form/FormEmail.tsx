import React from "react";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const FormEmail = (props: any) => {
		return (
			<FormControl sx={{ m: 1, width: "347px" }} variant="standard">
					<InputLabel htmlFor="component-helper">Email</InputLabel>
					<Input
						{...props.register("email", {
								required: 'Title is required',
								pattern: {
										value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
										message:'Please enter a valid email'
						}
						})}
						id="component-helper"
						error={props.errors?.email}
						defaultValue=""
						aria-describedby="component-helper-text"
					/>

					{props.errors?.email && <p role="alert" style={{color: 'red',margin:'0px'}}>{props.errors.email.message}</p>}

			</FormControl>
		);
};

export default FormEmail;
