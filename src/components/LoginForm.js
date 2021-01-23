import React from "react";
import { Link } from "react-router-dom";
import { useField } from "../custom-hooks";
import { Button, FormHeader, FormInput, Segment } from "./reusable-components";
import { FormContainer } from "./styled-compoents";
import {useAuthState } from "../context";

const LoginForm = ({ onSubmit }) => {
  const {loading} = useAuthState()
  const { field: usernameField, onChange: usernameOnChange } = useField({
    validateFn: (val) => val.length < 2,
  });

  const { field: passwordField, onChange: passwordOnChange } = useField({
    validateFn: (val) => val.length < 2,
  });

  return (
    <FormContainer
      onSubmit={(e) => onSubmit(e)({ ...usernameField, ...passwordField })}
      maxWidth={"45%"}
    >
      <FormHeader>Log in to Your Account</FormHeader>
      <FormInput
        id="username"
        name="username"
        onChange={usernameOnChange}
        type="text"
        label="User Name"
      />
      <FormInput
        id="password"
        name="password"
        onChange={passwordOnChange}
        type="text"
        label="Password"
      />
      <Button>{loading?"Loading":"submit"}</Button>
      <Segment>
        need an account ? <Link to="/register">Register</Link>
      </Segment>
    </FormContainer>
  );
};

export default LoginForm;
