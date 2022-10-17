import React, { Component } from 'react';
import { PhonebookForm, PhonebookWrapp } from './Phonebook.styled';
import PropTypes from 'prop-types';

class Phonebook extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        name: PropTypes.string,
        number: PropTypes.string,
      })
    ),
    onAddContact: PropTypes.func,
  };
  // state = {
  //   name: '',
  //   number: '',
  // };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // console.dir(name);

    // this.setState({ name: name, number: number });
    // console.log(this.props.contacts.map(contact => console.log(contact.name)));
    const existingInput = this.props.contacts.filter(contact => {
      // console.log('contact', contact);
      // console.log('name value', contact.name);
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (existingInput.length === 0) {
      this.props.onAddContact(name, number);
    } else {
      alert(`${name} is already in contacts.`);
    }

    form.reset();
  };

  //const normalizedFilter = this.props.filter.toLowerCase();
  //  const filteredContacts = this.props.contacts.filter(contact => {
  //  return contact.name.toLowerCase().includes(this.props.filter.toLowerCase());
  //  });

  // reset = () => {
  //   this.setState(this.state.name);
  //   this.setState(this.state.number);
  // };

  render() {
    return (
      <PhonebookWrapp>
        <h3>Phonebook</h3>
        <PhonebookForm onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number:
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <div>
            <input type="submit" value="Add contact" />
          </div>
        </PhonebookForm>
      </PhonebookWrapp>
    );
  }
}

export default Phonebook;
