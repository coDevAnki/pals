import React from "react";
import { Link } from "react-router-dom";
import { useField } from "../custom-hooks";
import serverSideValidate from "../helpers/serverSideValidate";
import { Button, FormHeader, FormInput, Segment } from "./reusable-components";
import { FormContainer } from "./styled-compoents";
import {useAuthState } from "../context";

  const RegisterForm = ({ onSubmit }) => {
  const {loading} = useAuthState()
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
    validateFn: (val) => (val.length < 8 ? "at least 8 char needed" : ""),
  });

  console.log(usernameMeta, emailMeta);
  const areAllValid =
    usernameMeta.isValid &&
    firstnameMeta.isValid &&
    lastnameMeta.isValid &&
    emailMeta.isValid &&
    passwordMeta.isValid;

  return (
    <>
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
        <FormHeader>Create New Contact</FormHeader>
        <FormInput
          label="User Name"
          id="username"
          name="username"
          onChange={usernameOnChange}
          type="text"
          error={usernameMeta.error}
          message={usernameMeta.message}
        />
        <FormInput
          label="First Name"
          id="firstname"
          name="first_name"
          onChange={firstnameOnChange}
          type="text"
          error={firstnameMeta.error}
        />
        <FormInput
          label="Last Name"
          id="lastname"
          name="last_name"
          onChange={lastnameOnChange}
          type="text"
          error={lastnameMeta.error}
        />
        <FormInput
          label="Email"
          id="email"
          name="email"
          onChange={emailOnChange}
          type="text"
          error={emailMeta.error}
        />
        <FormInput
          label="Password"
          id="password"
          name="password"
          onChange={passwordOnChange}
          type="text"
          error={passwordMeta.error}
          message={passwordMeta.message}
        />
        <Button disabled={!areAllValid}>{loading?"Loading":"submit"}</Button>
        <Segment>
          already have an account? <Link to="/signin">Log in </Link>
        </Segment>
      </FormContainer>
    </>
  );
};

export default RegisterForm;
