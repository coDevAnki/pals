import { Link } from "react-router-dom";
import styled from "styled-components";

const Linked = styled(Link).attrs(({ to }) => ({
  to,
}))`
  text-decoration: none;
  font-size: 3rem;
  color: black;
  margin: 0 2rem;
`;

export default Linked;
