import React from "react";
import {useHistory} from "react-router-dom"
import { LoginForm } from "../../components";
import { useAuthDispatch } from "../../context";
import { loginAction } from "../../context/actions";

const LogInUI = () => {
  const authDispatch = useAuthDispatch();
  const history =useHistory()
  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    loginAction(authDispatch, formFields, history);
  };
  return (
    <div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default LogInUI;
