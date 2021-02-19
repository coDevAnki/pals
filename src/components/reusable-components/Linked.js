import { Link } from "react-router-dom";
import styled from "styled-components";

const Linked = styled(Link).attrs(({ to }) => ({
  to,
}))`
  text-decoration: none;
  font-size: ${({ fz }) => fz || "2.75rem"};
  margin: 0 2rem;
  color: ${({ color }) => color || "black"};
`;

export default Linked;
