import styled from "styled-components";
import FlexWrapper from "./FlexWrapper";

const SliderWrapper = styled.div`
  overflow-y: hidden;
  width: 50vw;
  display: flex;
  margin: 0 auto;
`;

const SliderContainer = styled(FlexWrapper).attrs({ align: "flex-start" })`
  overflow-y: auto;
  margin: 0 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled(FlexWrapper).attrs({ column: true })`
  text-align: center;
  font-size: 2rem;
  width: 200px;
  margin: 0 1rem;
`;

export { SliderWrapper, SliderContainer, SliderItem };
