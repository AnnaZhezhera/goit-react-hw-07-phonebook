import React, { Component } from 'react';
import { AppWrapp } from './App.styled';
import { Phonebook } from './Phonebook/Phonebook';
import { Contacts } from './Contacts/Contacts';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (userName, userNumer, userId) => {
    this.setState(previousState => ({
      contacts: [
        ...previousState.contacts,
        { name: userName, number: userNumer, id: userId },
      ],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleRemoveClick = contactId => {
    let filteredArray = this.state.contacts.filter(
      contact => contact.id !== contactId
    );
    this.setState({ contacts: filteredArray });
  };

  componentDidMount() {
    const stringContacts = localStorage.getItem('contacts');
    const storageContacts = JSON.parse(stringContacts);

    if (storageContacts !== null) {
      this.setState({ contacts: storageContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <AppWrapp>
        <h1>Phonebook</h1>
        <Phonebook
          onAddContact={this.addContact}
          contacts={this.state.contacts}
        />
        <h3>Contacts</h3>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts
          contacts={this.state.contacts}
          filter={this.state.filter}
          changeFilter={this.changeFilter}
          onDelete={this.handleRemoveClick}
        />
      </AppWrapp>
    );
  }
}
