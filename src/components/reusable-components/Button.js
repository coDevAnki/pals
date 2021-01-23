import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem;
  font-family: "IBM Plex Sans", sans-serif;
  border: none;
  background-color: salmon;
  border-radius: 10px;
  outline: none;
  color: white;
  font-size: 2.5rem;
  width: 100%;
  cursor: pointer;
  transition: 0.5s ease all;

  &:hover {
    background-color: lightsalmon;
  }
  &:disabled {
    background-color: peachpuff;
  }
`;

export default Button;
