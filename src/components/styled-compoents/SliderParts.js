import styled from "styled-components/macro";
import FlexWrapper from "./FlexWrapper";

const SliderWrapper = styled.div`
  overflow-y: hidden;
  width: 70vw;
  display: flex;
  margin: 0 auto;
`;

const SliderContainer = styled(FlexWrapper).attrs({ align: "flex-start" })`
  overflow-y: auto;
  width: ${({ itemsCount }) => (itemsCount ? itemsCount * 200 + "px" : "100%")};
  &::-webkit-scrollbar {
    display: none;
  }
`;

const SliderItem = styled(FlexWrapper).attrs({ column: true })`
  text-align: center;
  font-size: 2rem;
  width: 200px;
  margin: 0 1rem;
  transition: 0.6s ease transform;
  transform: ${({ num }) => (num ? `translateX(${300 * num}px)` : `none`)};
`;

export { SliderWrapper, SliderContainer, SliderItem };
