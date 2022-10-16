import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types';

class Contacts extends Component {
  render() {
    return (
      <div>
        <h3>Contacts</h3>
        <ul>
          {this.props.contacts.map(contact => (
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
