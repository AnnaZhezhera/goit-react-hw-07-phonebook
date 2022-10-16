import React, { Component } from 'react';
import { nanoid } from 'nanoid';
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
        <label htmlFor="">
          <input
            type="text"
            name="filter"
            // value={this.props.filter}
            onChange={this.props.changeFilter}
          />
        </label>
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
