import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactBlock, ListOfContacts } from './Contacts.styled';

class Contacts extends Component {
  render() {
    const normalizedFilter = this.props.filter.toLowerCase();
    const filteredContacts = this.props.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <ContactBlock>
        <ListOfContacts>
          {filteredContacts.map(contact => (
            <li key={nanoid()}>
              {contact.name}: {contact.number}
              <button
                type="button"
                onClick={() => this.props.onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ListOfContacts>
      </ContactBlock>
    );
  }
}

export default Contacts;
