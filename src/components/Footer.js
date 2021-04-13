import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: var(--clr-primary);
  bottom: 0;
  padding: 1em;
  margin-top: 80vh;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <div>
      <FooterContainer>
        &#169; Designed And Created By Ankita Mondal
      </FooterContainer>
    </div>
  );
};

export default Footer;
