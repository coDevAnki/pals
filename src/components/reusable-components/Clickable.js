import styled, { css } from "styled-components";
import FlexWrapper from "../styled-compoents/FlexWrapper";
import Linked from "./Linked";

const ClickableWrapper = styled(FlexWrapper).attrs((props) => ({
  justify: props.justify,
}))`
  cursor: pointer;
  box-sizing: border-box;
  display: inline-flex;
  text-align: start;
  font-size: ${({ fz }) => fz || "2.75rem"};
  margin: ${({ margin }) => margin || ".5em"};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `};
`;
const Clickable = ({ to, children, icon, ...props }) => {
  return (
    <ClickableWrapper {...props}>
      {to ? (
        <Linked to={to} {...props}>
          {icon && <Clickable.Icon icon={icon} />}
          {children}
        </Linked>
      ) : icon ? (
        <>
          <Clickable.Icon icon={icon} iconSize={props.iconSize || ""} />
          {children}
        </>
      ) : (
        <>{children}</>
      )}
    </ClickableWrapper>
  );
};

Clickable.Icon = ({ icon, iconSize }) => (
  <i className={`fas fa-${icon} fa-${iconSize ? iconSize : "sm"}`}></i>
);

export default Clickable;
