import React from "react";
import styled from "styled-components";

const HeadingContainer = styled.header`
  font-size: 3.5rem;
  margin: 2rem;
  border-bottom: 1px solid lightgray;
`;

const Heading = ({ children }) => {
  return <HeadingContainer>{children}</HeadingContainer>;
};

export default Heading;
