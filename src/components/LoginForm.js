import React from "react";
import { useField } from "../custom-hooks";
import { Button, Input } from "./reusable-components";
import { FormContainer } from "./styled-compoents";

const LoginForm = ({ onSubmit }) => {
  const { field: usernameField, onChange: usernameOnChange } = useField({
    validateFn: (val) => val.length < 2,
  });

  const { field: passwordField, onChange: passwordOnChange } = useField({
    validateFn: (val) => val.length < 2,
  });

  return (
    <FormContainer
      onSubmit={(e) => onSubmit(e)({ ...usernameField, ...passwordField })}
    >
      <Input
        id="username"
        name="username"
        onChange={usernameOnChange}
        type="text"
        placeholder="username"
      />
      <Input
        id="password"
        name="password"
        onChange={passwordOnChange}
        type="text"
        placeholder="password"
      />
      <Button>submit</Button>
    </FormContainer>
  );
};

export default LoginForm;
