import React from "react";
import styled, { css } from "styled-components";
export const InputField = styled.div`
  width: 100%;
  input,
  select {
    box-sizing: border-box;
    outline: none;
    border: 1px solid;
    padding: 0.5rem;
    font-size: 2.3rem;
    width: 100%;
  }
  input[type="checkbox"] {
    position: relative;
    width: 0%;
    height: 0%;
    &::after {
      content: "";
      position: absolute;
      height: 23px;
      width: 23px;
      /* border-radius: 50%; */
      border: 1px solid;
      top: 0;
      left: 1rem;
    }
    &:checked::after {
      background-color: cornflowerblue;
    }
  }

  &::after {
    content: "";
    height: 3rem;
    display: block;
    width: 100%;
    font-size: 2rem;
    ${({ error }) =>
      error &&
      css`
    content:"${error}";
    color: red;
    `}
    ${({ message }) =>
      message &&
      css`
    content:"${message}";
    color: green;
    `}
  }
`;

export const FormLabel = styled.span`
  font-size: 2.5rem;
  max-width: 100%;
`;
export const FormField = styled.span`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  flex-direction: ${({ type }) =>
    type === "row" || type === "checkbox" ? "row" : "column"};
`;

const FormInput = React.forwardRef(
  ({ label, error, message, ...props }, ref) => (
    <FormField type={props.type}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputField error={error} message={message}>
        <input ref={ref} {...props} />
      </InputField>
    </FormField>
  )
);

export default FormInput;
