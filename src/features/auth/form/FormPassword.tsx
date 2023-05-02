import React, { useState } from "react";
import { FormControl, IconButton, Input, InputAdornment, InputLabel } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const FormPassword = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(prevState => !prevState);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {

  };
  return (
    <FormControl sx={{ m: 1, width: "347px" }} variant="standard">
      <InputLabel htmlFor="standard-adornment-password">{props.title}</InputLabel>
      <Input
        {...props.register(props.type, { required: true })}
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
      {props.errors.password ?.type === 'required' && <p role="alert" style={{color: 'red'}}>Title is required</p>}
    </FormControl>
  );
};

export default FormPassword;