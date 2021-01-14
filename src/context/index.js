import { createContext, useContext, useReducer } from "react";
import { initialAuthState, initialContactsState } from "./initialStates";
import { authReducer, contactsReducer } from "./reducers";

export const authStateContext = createContext();
export const authDispatchContext = createContext();
export const contactsStateContext = createContext();
export const contactsDispatchContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialAuthState);

  return (
    <authStateContext.Provider value={authState}>
      <authDispatchContext.Provider value={authDispatch}>
        {children}
      </authDispatchContext.Provider>
    </authStateContext.Provider>
  );
};

export const ContactsProvider = ({ children }) => {
  const [contactsState, contactsDispatch] = useReducer(
    contactsReducer,
    initialContactsState
  );

  return (
    <contactsStateContext.Provider value={contactsState}>
      <contactsDispatchContext.Provider value={contactsDispatch}>
        {children}
      </contactsDispatchContext.Provider>
    </contactsStateContext.Provider>
  );
};

export const useAuthState = () => {
  const { authState } = useContext(authStateContext);
  return authState;
};
export const useAuthDispatch = () => {
  const { authDispatch } = useContext(authDispatchContext);
  return authDispatch;
};
export const useContactsState = () => {
  const { contactsState } = useContext(contactsStateContext);
  return contactsState;
};
export const useContactsDispatch = () => {
  const { contactsDispatch } = useContext(contactsDispatchContext);
  return contactsDispatch;
};
