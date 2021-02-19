import React from "react";
import { useHistory } from "react-router-dom";
import { useAuthDispatch, useAuthState, useContactsDispatch } from "../context";
import { clearContactsAction, logoutAction } from "../context/actions";
import { Clickable } from "./reusable-components";
import SearchField from "./SearchField";
import { HeaderContainer } from "./styled-compoents";

const Header = () => {
  const {
    loginUser: { currentUser },
  } = useAuthState();
  const authDispatch = useAuthDispatch();
  const contactsDispatch = useContactsDispatch();
  const history = useHistory();

  const logout = () => {
    logoutAction(authDispatch, history);
    clearContactsAction(contactsDispatch);
  };

  return (
    <HeaderContainer>
      <nav>
        <Clickable to="/">LOGO</Clickable>
      </nav>

      {currentUser ? (
        <nav>
          <SearchField />
          <Clickable icon="plus" to="/create-contacts">
            Add Contact
          </Clickable>
          <Clickable icon="sign-out-alt" onClick={logout}>
            Log out
          </Clickable>
        </nav>
      ) : (
        <nav>
          <Clickable to="/signin">Log in</Clickable>
          <Clickable to="/register">Register</Clickable>
        </nav>
      )}
    </HeaderContainer>
  );
};

export default Header;
