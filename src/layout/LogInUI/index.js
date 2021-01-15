import React from "react";
import { LoginForm } from "../../components";
import { useAuthDispatch } from "../../context";
import { loginAction } from "../../context/actions";

const LogInUI = () => {
  const authDispatch = useAuthDispatch();

  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    console.log(formFields);
    loginAction(authDispatch, formFields);
  };
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LogInUI;
