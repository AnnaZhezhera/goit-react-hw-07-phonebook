import React, { Component } from 'react';
import { AppWrapp } from './App.styled';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = (name, number) => {
    console.log(name, number);
    this.setState(previousState => ({
      contacts: [...previousState.contacts, { name, number }],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  render() {
    return (
      <AppWrapp>
        <Phonebook onAddContact={this.addContact} />
        <Contacts
          name={this.state.name}
          contacts={this.state.contacts}
          number={this.state.number}
          filter={this.state.filter}
          changeFilter={this.changeFilter}
        />
      </AppWrapp>
    );
  }
}
