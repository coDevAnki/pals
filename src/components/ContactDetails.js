import React from "react";
import { useContactsDispatch } from "../context";
import { deleteContactAction, editContactAction } from "../context/actions";
import { Clickable, ImageThumb } from "./reusable-components";
import { ConatctSection, ContactContainer } from "./styled-compoents";

const ContactDetails = ({
  item: {
    id,
    first_name,
    last_name,
    contact_picture,
    phone_number,
    is_favorite,
    country_code,
  },
}) => {
  const contactsDispatch = useContactsDispatch();

  const deleteContact = (id) => deleteContactAction(contactsDispatch, id);

  const editContact = (id, editedData) => {
    editContactAction(contactsDispatch, id, editedData);
  };

  return (
    <ContactContainer>
      <ConatctSection>
        <ImageThumb
          firstName={first_name}
          lastName={last_name}
          src={contact_picture}
        />
        <Clickable width="200px" justify="space-between">
          {first_name + " " + last_name}
          <Clickable
            icon="star"
            style={{ color: `${is_favorite ? "gold" : "grey"}` }}
            justify="space-between"
            onClick={() => editContact(id, { is_favorite: !is_favorite })}
          />
        </Clickable>
      </ConatctSection>
      <ConatctSection>
        <span>{country_code + " " + phone_number}</span>
        <Clickable width="20px" icon="edit" to={`edit/${id}`} />
        <Clickable
          width="20px"
          onClick={() => deleteContact(id)}
          icon="trash"
        />
      </ConatctSection>
    </ContactContainer>
  );
};

export default ContactDetails;
