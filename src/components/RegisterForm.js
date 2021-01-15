import React from "react";
import { useField } from "../custom-hooks";
import serverSideValidate from "../helpers/serverSideValidate";
import { Button, Input } from "./reusable-components";
import { FormContainer } from "./styled-compoents";

const RegisterForm = ({ onSubmit }) => {
  const {
    field: usernameField,
    onChange: usernameOnChange,
    meta: usernameMeta,
  } = useField({
    validateFn: async (val) => {
      if (val.length < 4) return "at least 4 char needed";
      let errors = await serverSideValidate({ username: val });
      return Array.isArray(errors?.username) ? errors.username[0] : "";
    },
    debounceTime: 1000,
  });

  const {
    field: firstnameField,
    onChange: firstnameOnChange,
    meta: firstnameMeta,
  } = useField({
    validateFn: (val) => (val.length < 2 ? "at least 4 char needed" : ""),
  });

  const {
    field: lastnameField,
    onChange: lastnameOnChange,
    meta: lastnameMeta,
  } = useField({
    validateFn: (val) => (val.length < 2 ? "at least 4 char needed" : ""),
  });

  const {
    field: emailField,
    onChange: emailOnChange,
    meta: emailMeta,
  } = useField({
    validateFn: async (val) => {
      let errors = await serverSideValidate({ email: val });
      return Array.isArray(errors?.email) ? errors.email[0] : "";
    },
    debounceTime: 1000,
  });

  const {
    field: passwordField,
    onChange: passwordOnChange,
    meta: passwordMeta,
  } = useField({
    validateFn: (val) => (val.length < 6 ? "at least 8 char needed" : ""),
  });

  console.log(usernameMeta, emailMeta);
  const areAllValid =
    usernameMeta.isValid &&
    firstnameMeta.isValid &&
    lastnameMeta.isValid &&
    emailMeta.isValid &&
    passwordMeta.isValid;

  return (
    <FormContainer
      onSubmit={(e) =>
        onSubmit(e)({
          ...usernameField,
          ...firstnameField,
          ...lastnameField,
          ...emailField,
          ...passwordField,
        })
      }
    >
      <Input
        label="User Name"
        id="username"
        name="username"
        onChange={usernameOnChange}
        type="text"
        placeholder="userName"
        error={usernameMeta.error}
      />
      <Input
        label="First Name"
        id="firstname"
        name="first_name"
        onChange={firstnameOnChange}
        type="text"
        placeholder="firstName"
        error={firstnameMeta.error}
      />
      <Input
        label="Last Name"
        id="lastname"
        name="last_name"
        onChange={lastnameOnChange}
        type="text"
        placeholder="lastname"
        error={lastnameMeta.error}
      />
      <Input
        label="Email"
        id="email"
        name="email"
        onChange={emailOnChange}
        type="text"
        placeholder="email"
        error={emailMeta.error}
      />
      <Input
        label="Password"
        id="password"
        name="password"
        onChange={passwordOnChange}
        type="text"
        placeholder="password"
        error={passwordMeta.error}
      />
      <Button disabled={!areAllValid}>submit</Button>
    </FormContainer>
  );
};

export default RegisterForm;
