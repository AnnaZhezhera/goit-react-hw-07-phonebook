import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getNameFilter } from '../../redux/selectors';
import { ContactBlock, ListOfContacts } from './Contacts.styled';
import { deleteContact } from '../../redux/contactsSlice';
import { useDispatch } from 'react-redux';

const getVisibleContacts = (contacts, filteredName) => {
  if (!filteredName) {
    return contacts;
  }
  const normalizedFilter = filteredName?.toLowerCase();
  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(normalizedFilter);
  });

  return filteredContacts;
};

export default function Contacts() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const filteredName = useSelector(getNameFilter);
  const visibleContacts = getVisibleContacts(contacts, filteredName);

  const handleDelete = contact => dispatch(deleteContact(contact.id));

  return (
    <ContactBlock>
      <ListOfContacts>
        {visibleContacts.map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.number}
            <button type="button" onClick={() => handleDelete(contact)}>
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
