import styled, { css } from "styled-components";
import FlexWrapper from "./FlexWrapper"

const ImageOptions = styled(FlexWrapper).attrs({column:true})`
  position: relative;
  font-size: 2.5rem;
  ${({ ifImage }) =>
    ifImage &&
    css`
      background-color: rgba(255, 255, 255, 0.7);
      transition: 0.6s ease all;
      opacity: 0;
      &:hover {
        opacity: 1;
      }
    `}
`;

export default ImageOptions;
