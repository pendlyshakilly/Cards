import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/styles.module.css";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";


type IFormInput = {
  email: string;
  password: string | number;
  confirmPassword: string | number
}

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = data => {
    console.log(data);
    let {email, password} = data
    let payload = {
      email,
      password
    }
    dispatch(authThunks.register(payload));
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };



  return (
    <div className={s.container}>
      <Paper className={s.Paper}>
        <div><h2>Sign Up</h2></div>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column'}}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <FormControl {...field} sx={{ m: 1, width: "31ch" }} variant="standard">
              <InputLabel htmlFor="component-helper">Email</InputLabel>
              <Input
                id="component-helper"
                defaultValue=""
                aria-describedby="component-helper-text"
              />
            </FormControl>} />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <FormControl {...field} sx={{ m: 1, width: "31ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => <FormControl {...field} sx={{ m: 1, width: "31ch" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Confirm Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>}
          />
          <Button onClick={handleSubmit(onSubmit)} sx={{ m: 1, width: '34.6ch', borderRadius: '25px'}} variant="contained">Sign Up</Button>
        </form>
        <p style={{color: 'gray'}}>Already have an account ?</p>
        <div>
          Sign In
        </div>
      </Paper>
    </div>
  );
};
