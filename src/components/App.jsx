import React, { useState, useEffect } from 'react';
import { AppWrapp } from './App.styled';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

export default function App() {
  return (
    <AppWrapp>
      <h1>Phonebook</h1>
      <Phonebook />
      <h3>Contacts</h3>

      <Filter />
      <Contacts />
    </AppWrapp>
  );
  // const [contacts, setContacts] = useState([
  //   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  // ]);
  // const [filter, setFilter] = useState('');
  // //зчитує з localStorage
  // useEffect(() => {
  //   const stringContacts = localStorage.getItem('contacts');
  //   const storageContacts = JSON.parse(stringContacts);
  //   if (storageContacts !== null) {
  //     setContacts(storageContacts);
  //   }
  // }, []);
  // //записуємо в localStorage
  // const saveContactsToLocalStorage = newContacts => {
  //   localStorage.setItem('contacts', JSON.stringify(newContacts));
  // };
  // const addContact = (userName, userNumber, userId) => {
  //   const arrayOfContacts = [
  //     ...contacts,
  //     { name: userName, number: userNumber, id: userId },
  //   ];
  //   setContacts(arrayOfContacts);
  //   saveContactsToLocalStorage(arrayOfContacts);
  // };
  // const changeFilter = event => {
  //   setFilter(event.currentTarget.value);
  // };
  // const handleRemoveClick = contactId => {
  //   let filteredArray = contacts.filter(contact => contact.id !== contactId);
  //   setContacts(filteredArray);
  //   saveContactsToLocalStorage(filteredArray);
  // };
  // return (
  //   <AppWrapp>
  //     <h1>Phonebook</h1>
  //     <Phonebook onAddContact={addContact} contacts={contacts} />
  //     <h3>Contacts</h3>
  //     <Filter value={filter} onChange={changeFilter} />
  //     <Contacts
  //       contacts={contacts}
  //       filter={filter}
  //       changeFilter={changeFilter}
  //       onDelete={handleRemoveClick}
  //     />
  //   </AppWrapp>
  // );
}
