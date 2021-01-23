import styled from "styled-components";
import FlexWrapper from "./FlexWrapper"

const ChooseImageContainer = styled(FlexWrapper).attrs({column:true})`
  height: 250px;
  width: 220px;
  border: 4px solid grey;
  position: relative;
  margin: 0 auto;
  img {
    height: 100%;
    width: 100%;
    position: absolute;
  }
`;
console.log(FlexWrapper);

export default ChooseImageContainer;
