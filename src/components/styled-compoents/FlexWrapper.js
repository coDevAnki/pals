import styled from "styled-components";

const FlexWrapper = styled.div`
  display:flex;
  flex-direction:${({column})=> column?"column":"row"};
  justify-content:${({justify})=> justify?justify:"center"};
  align-items:${({align})=> align?align:"center"};
`
export default FlexWrapper;