import React from 'react'
import { ContactsListContainer} from "./styled-compoents"
import ContactDetails from "./ContactDetails";

const ContactsList = ({data}) => {
    return (
        <ContactsListContainer>
            {data.map(item=><ContactDetails item={item}/>)}
        </ContactsListContainer>
    )
}

export default ContactsList
