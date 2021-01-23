import styled from "styled-components";

const FormHeaderContainer = styled.div`
  box-sizing: border-box;
  width: 100%;

  font-size: 3rem;
  font-weight: 500;
  color: dimgrey;
  margin-bottom: 1rem;
  border-bottom: 1px solid grey;
`;
const HeaderText = styled.span``;

const FormHeader = ({ children }) => (
  <FormHeaderContainer>
    <HeaderText>{children}</HeaderText>
  </FormHeaderContainer>
);

export default FormHeader;
