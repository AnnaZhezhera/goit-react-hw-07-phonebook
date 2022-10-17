import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../Filter/Filter';
import {
  ContactBlock,
  ListOfContacts,
  FindContactWrapp,
} from './Contacts.styled';
import PropTypes from 'prop-types';

class Contacts extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    filter: PropTypes.string,
    changeFilter: PropTypes.func,
  };

  render() {
    const normalizedFilter = this.props.filter.toLowerCase();
    const filteredContacts = this.props.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <ContactBlock>
        <FindContactWrapp>
          <h3>Contacts</h3>
          <Filter
            value={this.props.filter}
            onChange={this.props.changeFilter}
          />
        </FindContactWrapp>
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
