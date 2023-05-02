import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";
import s from "features/auth/Register/styles.module.css";
import { Button, FormControl, IconButton, Input, InputAdornment, InputLabel, Paper } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";


type IFormInput = {
  email: string;
  password: string | number;
  confirmPassword: string | number
}

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { control, handleSubmit, reset, register, formState: { errors } } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: ""
    }
  });
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data,e) => {

    e && e.preventDefault();
    console.log(data);
    let {email, password} = data
    let payload = {
      email,
      password
    }
    reset();
    // dispatch(authThunks.register(payload));
  };

  console.log('errors >> ', errors)
  const handleClickShowPassword = () => setShowPassword(prevState => !prevState);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword(prevState => !prevState);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {

  };


  return (
    <div className={s.container}>
      <Paper className={s.Paper}>
        <div><h1>Sign Up</h1></div>
        <form onSubmit={handleSubmit(onSubmit)} style={{display: 'flex', flexDirection: 'column'}}>
          <Controller
            name="email"
            control={control}
            render={({ field }) => {
              console.log('field >> ', field)
              return (<FormControl {...field} sx={{ m: 1, width: "347px" }} variant="standard">
                <InputLabel htmlFor="component-helper">Email</InputLabel>
                <Input
                  {...register("email", { required: true })}
                  id="component-helper"
                  defaultValue=""
                  aria-describedby="component-helper-text"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <p role="alert" style={{color: 'red'}}>Title is required</p>}
              </FormControl>)
            } } />
          <Controller
            name="password"
            control={control}
            render={({ field }) => <FormControl {...field} sx={{ m: 1, width: "347px" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                {...register("password", { required: true })}
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
              {errors.password ?.type === 'required' && <p role="alert" style={{color: 'red'}}>Title is required</p>}
            </FormControl>}
          />
          <Controller
            name="confirmPassword"
            control={control}
            render={({ field }) => <FormControl {...field} sx={{ m: 1, width: "347px" }} variant="standard">
              <InputLabel htmlFor="standard-adornment-password" >Confirm Password</InputLabel>
              <Input
                {...register("confirmPassword", { required: true })}
                id="standard-adornment-password"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowConfirmPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {errors.confirmPassword ?.type === 'required' && <p role="alert" style={{color: 'red'}}>Title is required</p>}
            </FormControl>}
          />
          <Button onClick={handleSubmit(onSubmit)} sx={{ m: 1, width: '347px', borderRadius: '30px', backgroundColor: '#366EFF'}} variant="contained">Sign Up</Button>
        </form>
        <div style={{textAlign: 'center'}} >
          <p style={{color: 'gray'}}>Already have an account ?</p>
         <NavLink to={'/login'} style={{fontSize: '16px', fontWeight: '700', color: '#366EFF'}}>Sign In</NavLink>
        </div>
      </Paper>
    </div>
  );
};
