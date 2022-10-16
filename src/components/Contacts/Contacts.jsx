import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Filter from '../Filter/Filter';
// import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    const normalizedFilter = this.props.filter.toLowerCase();
    const filteredContacts = this.props.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter);
    });

    return (
      <div>
        <h3>Contacts</h3>
        <Filter value={this.props.filter} onChange={this.props.changeFilter} />
        <ul>
          {filteredContacts.map(contact => (
            <li key={nanoid()}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Contacts;
