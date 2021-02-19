import React from "react";
import ContactDetails from "./ContactDetails";
import { ContactsListContainer } from "./styled-compoents";

const ContactsList = ({ data }) => {
  return (
    <ContactsListContainer>
      {data.map((item) => (
        <ContactDetails item={item} />
      ))}
    </ContactsListContainer>
  );
};

export default ContactsList;
