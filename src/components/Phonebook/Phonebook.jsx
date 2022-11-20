import React from 'react';
import PropTypes from 'prop-types';
import { PhonebookForm, PhonebookWrapp } from './Phonebook.styled';
// import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/actions';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';

export default function Phonebook() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    const existingArray = contacts.filter(contact => {
      return contact.name.toLowerCase() === name.toLowerCase();
    });

    if (existingArray.length === 0) {
      dispatch(addContact(name, number));
    } else {
      alert(`${name} is already in contacts.`);
    }

    form.reset();
  };

  return (
    <PhonebookWrapp>
      <PhonebookForm onSubmit={handleSubmit}>
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

Phonebook.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onAddContact: PropTypes.func,
};
