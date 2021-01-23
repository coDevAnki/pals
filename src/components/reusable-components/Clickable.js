import styled, { css } from "styled-components";
import FlexWrapper from "../styled-compoents/FlexWrapper";
import Linked from "./Linked";

const ClickableWrapper = styled(FlexWrapper).attrs((props) => ({
  justify: props.justify,
}))`
  cursor: pointer;
  display: inline-flex;
  text-align: start;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
`;
const Clickable = ({ to, children, icon, ...props }) => {
  return (
    <ClickableWrapper {...props}>
      {to ? (
        <Linked to={to}>
          {icon && <Clickable.Icon icon={icon} />}
          {children}
        </Linked>
      ) : icon ? (
        <>
          <Clickable.Icon icon={icon} />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </ClickableWrapper>
  );
};

Clickable.Icon = ({ icon }) => <i className={`fas fa-${icon} fa-sm`}></i>;

export default Clickable;
