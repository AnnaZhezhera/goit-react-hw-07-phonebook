import React from 'react';
import { nanoid } from 'nanoid';
import { ContactBlock, ListOfContacts } from './Contacts.styled';

export const Contacts = ({ filter, contacts, onDelete }) => {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <ContactBlock>
      <ListOfContacts>
        {filteredContacts.map(contact => (
          <li key={nanoid()}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ListOfContacts>
    </ContactBlock>
  );
};

export default Contacts;

Contacts.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDelete: PropTypes.func,
  filter: PropTypes.string,
};
