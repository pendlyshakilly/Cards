import React from "react";
import { Input, InputLabel, FormControl} from "@mui/material";

const FormEmail = (props: any) => {
  return (
    <FormControl sx={{ m: 1, width: "347px" }} variant="standard">
      <InputLabel htmlFor="component-helper">Email</InputLabel>
      <Input
        {...props.register("email", { required: true })}
        id="component-helper"
        defaultValue=""
        aria-describedby="component-helper-text"
        aria-invalid={props.errors.email ? "true" : "false"}
      />

      {props.errors.email && <p role="alert" style={{color: 'red'}}>Title is required</p>}
    </FormControl>
  );
};

export default FormEmail;