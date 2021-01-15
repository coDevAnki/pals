import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState } from "../context";
import logoutAction from "../context/actions/authActions/logoutAction";
import isLoggedin from "../helpers/isLoggedin";
import { Clickable, Linked } from "./reusable-components";
import { HeaderContainer } from "./styled-compoents";

const Header = () => {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const history = useHistory();

  useEffect(() => {
    console.log(authState);
    if (isLoggedin()) {
      history.push("/");
    } else {
      history.push("/signin");
    }
  }, [authState]);

  const logout = () => {
    logoutAction(authDispatch);
  };
  return (
    <div>
      <HeaderContainer>
        {console.log("hello")}
        <Linked to="/">LOGO</Linked>
        {isLoggedin() ? (
          <span>
            <Linked to="/create-contacts">Add Contact</Linked>
            <Clickable onClick={logout}>Log out</Clickable>
          </span>
        ) : (
          <span>
            <Linked to="/signin">Log in</Linked>
            <Linked to="/register">Register</Linked>
          </span>
        )}
      </HeaderContainer>
    </div>
  );
};

export default Header;
