import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { nanoid } from 'nanoid';
// import PropTypes from 'prop-types'

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount = () => {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);

    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  };

  alertName = () => {
    return this.state.contacts.map(contact => contact.name);
  };

  alertNumber = () => {
    return this.state.contacts.map(contact => contact.number);
  };

  deleteContacts = contactsID => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsID),
    }));
  };

  filterOnChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    if (this.alertName().includes(data.name)) {
      alert(`${data.name} is already in your contact`);
      return;
    }

    if (this.alertNumber().includes(data.number)) {
      alert(`Number ${data.number} is already in your contact`);
      return;
    }

    const addContacts = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    this.setState(prevState => ({
      contacts: [addContacts, ...prevState.contacts],
    }));
  };

  render() {
    const { filter, contacts } = this.state;

    const normalizedFilter = filter.toLowerCase();

    const visibleName = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );

    return (
      <div>
        <h2>Phonebook</h2>

        <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>

        <h3>Contacts</h3>

        <Filter value={filter} onChange={this.filterOnChange} />

        <ContactList
          contacts={visibleName}
          onDeleteContact={this.deleteContacts}
        />
      </div>
    );
  }
}
