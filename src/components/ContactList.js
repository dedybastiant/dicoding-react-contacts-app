import React from "react";
import ContactItem from "./ContactItem";

function ContactList({ contacts }) {
  return (
    contacts.map(contact => (
      <ContactItem key={contact.id} {...contact} />
    ))
  );
}

export default ContactList;