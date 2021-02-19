import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

const ContactsListContainer = styled(FlexWrapper).attrs({ column: true })`
  width: 90vw;
  margin: 0 auto;
`;
const ContactContainer = styled(FlexWrapper).attrs({ justify: "space-around" })`
  width: 100%;
  background-color: beige;
  margin-top: 20px;
  padding: 10px;
  box-shadow: 5px 5px 5px beige;
  border-radius: 5px;
`;
const ConatctSection = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 2fr 1fr 2fr 1fr 1fr;
  text-align: center;
`;

export { ContactsListContainer, ContactContainer, ConatctSection };
