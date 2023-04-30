import React from "react";
import { useAppDispatch } from "app/hooks";
import { authThunks } from "features/auth/auth.slice";

export const Login = () => {
  const dispatch = useAppDispatch();

  const loginHandler = () => {
    const payload = {
      email: "mytest@gmail.com",
      password: "12345678",
      rememberMe:true
    };
    dispatch(authThunks.login(payload));
  };


  return (
    <div>
      <h1>Login;</h1>
      <button onClick={loginHandler}>LOGIN</button>
    </div>
  );
};

