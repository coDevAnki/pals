import React from "react";
import { RegisterForm } from "../../components";
import { registerAction } from "../../context/actions";

const RegisterUI = () => {
  const onSubmit = (e) => (formFields) => {
    e.preventDefault();
    console.log(formFields);
    registerAction(formFields);
  };

  return (
    <div>
      <RegisterForm onSubmit={onSubmit} />
    </div>
  );
};

export default RegisterUI;
