import styled from "styled-components";
import FlexWrapper from "./FlexWrapper"

const ContactsListContainer = styled(FlexWrapper).attrs({column:true})`
  width:90vw;
  margin:0 auto;
`
const ContactContainer=  styled(FlexWrapper).attrs({justify:"space-around"})`
width:100%;
`
const ConatctSection=  styled(FlexWrapper).attrs({justify:"space-between"})`
width:30vw;
text-align:center;
`;


export  {ContactsListContainer, ContactContainer, ConatctSection}
