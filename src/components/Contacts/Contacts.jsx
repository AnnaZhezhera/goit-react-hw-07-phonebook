import React from 'react';
import PropTypes from 'prop-types';

import { ContactBlock, ListOfContacts } from './Contacts.styled';

export default function Contacts({ filter, contacts, onDelete }) {
  const normalizedFilter = filter.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return (
    <ContactBlock>
      <ListOfContacts>
        {filteredContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => onDelete(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ListOfContacts>
    </ContactBlock>
  );
}

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
