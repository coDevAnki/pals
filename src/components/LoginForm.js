import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "../context";
import { useField } from "../custom-hooks";
import { Button, FormHeader, FormInput, Segment } from "./reusable-components";
import { FormContainer } from "./styled-compoents";

const LoginForm = ({ onSubmit }) => {
  const {
    loginUser: { loading },
  } = useAuthState();
  const {
    field: usernameField,
    onChange: usernameOnChange,
    meta: usernameMeta,
  } = useField({
    validateFn: (val) => val.length < 1,
  });

  const {
    field: passwordField,
    onChange: passwordOnChange,
    meta: passwordMeta,
  } = useField({
    validateFn: (val) => val.length < 1,
  });
  const allValid = usernameMeta.isValid && passwordMeta.isValid;
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
      <Button disabled={!allValid || loading}>
        {loading ? "Loading..." : "submit"}
      </Button>
      <Segment>
        need an account ? <Link to="/register">Register</Link>
      </Segment>
    </FormContainer>
  );
};

export default LoginForm;
