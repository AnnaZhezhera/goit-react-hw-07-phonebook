import React, { Component } from 'react';
import { AppWrapp } from './App.styled';
import Phonebook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;
    // console.dir(name);

    this.setState({ name: name });
    this.setState({ number: number });

    this.setState(previousState => ({
      contacts: [...previousState.contacts, { name, number }],
    }));
    // console.log(this.state.contacts);
    form.reset();
  };

  reset = () => {
    this.setState(this.state.name);
    this.setState(this.state.number);
  };

  render() {
    return (
      <AppWrapp>
        <Phonebook
          name={this.state.name}
          handleSubmit={this.handleSubmit}
          number={this.state.number}
        />
        <Contacts
          name={this.state.name}
          contacts={this.state.contacts}
          number={this.state.number}
        />
      </AppWrapp>
    );
  }
}
