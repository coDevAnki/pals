import React from "react";
import { useAuthDispatch } from "../../context";
import {useHistory} from "react-router-dom"
import { RegisterForm } from "../../components";
import { registerAction } from "../../context/actions";

const RegisterUI = () => {
  const authDispatch= useAuthDispatch()
  const history=useHistory()

  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    registerAction(formFields, authDispatch, history);
  };

  return (
    <div>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default RegisterUI;
