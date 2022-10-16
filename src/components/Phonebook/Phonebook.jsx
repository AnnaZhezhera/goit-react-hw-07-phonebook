import React, { Component } from 'react';
import { PhonebookBlock } from './Phonebook.styled';

// import PropTypes from 'prop-types';

class Phonebook extends Component {
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

    this.props.onAddContact(name, number);

    form.reset();
  };

  // reset = () => {
  //   this.setState(this.state.name);
  //   this.setState(this.state.number);
  // };

  render() {
    return (
      <div>
        <h3>Phonebook</h3>
        <PhonebookBlock onSubmit={this.handleSubmit}>
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
        </PhonebookBlock>
      </div>
    );
  }
}

export default Phonebook;
