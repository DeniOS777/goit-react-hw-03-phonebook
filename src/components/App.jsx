import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { GlobalStyle } from './GlobalStyle';
import { Phonebook, PhonebookTitle, ContactsTitle } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChangeFilter = e => this.setState({ filter: e.target.value });

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const normalizeFindDuplicateContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (normalizeFindDuplicateContacts) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deleteContact = contactId =>
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== contactId),
    }));

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizeFilter = filter.toLowerCase();

    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(normalizeFilter)
    );
  };

  render() {
    const { filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Phonebook>
        <PhonebookTitle>Phonebook ☎️</PhonebookTitle>

        <ContactForm onSubmit={this.addContact} />

        <ContactsTitle>Contacts</ContactsTitle>

        <Filter filter={filter} onChange={this.handleChangeFilter} />

        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
        <GlobalStyle />
      </Phonebook>
    );
  }
}

export default App;
