import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

import { GlobalStyle } from './GlobalStyle';
import { Phonebook, PhonebookTitle, ContactsTitle } from './App.styled';

const LS_KEY = 'contacts';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const getSavedContacts = localStorage.getItem(LS_KEY);
    const parseSavedContacts = JSON.parse(getSavedContacts);

    if (parseSavedContacts) {
      this.setState({ contacts: parseSavedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const prevContacts = prevState.contacts;
    const nextContacts = this.state.contacts;

    if (prevContacts !== nextContacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(nextContacts));
    }
  }

  handleChangeFilter = e => this.setState({ filter: e.target.value });

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    const normalizeFindDuplicateContacts = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (normalizeFindDuplicateContacts) {
      return toast.info(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

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
        <ToastContainer autoClose={3000} />
      </Phonebook>
    );
  }
}

export default App;
