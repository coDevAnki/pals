import React, { useEffect } from "react";
import { ContactsList, Slider } from "../../components";
import {
  useAuthState,
  useContactsDispatch,
  useContactsState,
} from "../../context";
import { clearContactsAction, getContactsAction } from "../../context/actions";

const ContactsUI = () => {
  const contactsState = useContactsState();
  const contactsDispatch = useContactsDispatch();
  const authState = useAuthState();

  console.log(authState, contactsState);

  useEffect(() => {
    if (authState.currentUser) {
      if (!authState.currentUser === null) {
        clearContactsAction(contactsDispatch);
      }
      if (contactsState.contacts.loaded) return;
      getContactsAction(contactsDispatch);
    }
  }, [authState.currentUser]);

  return contactsState.contacts.loading ? (
    <h3>Loading</h3>
  ) : (
    <div>
      <header>Starred</header>
      <Slider
        data={contactsState?.contacts?.data.filter(
          (item) => !!item.is_favorite
        )}
      />
      <header>ALL</header>
      <ContactsList data={contactsState?.contacts?.data} />
    </div>
  );
};

export default ContactsUI;
