import styled from "styled-components";

export const InputField = styled.input`
  outline: none;
  border: none;
  padding: 1rem;
  font-size: 2rem;
`;

const Input = ({ label, error, message, ...props }) => {
  return (
    <>
      {label && <label>{label}</label>}
      <InputField {...props} />
      {error && <span style={{ color: "red" }}>{error}</span>}
      {message && <span style={{ color: "green" }}>{message}</span>}
    </>
  );
};

export default Input;
