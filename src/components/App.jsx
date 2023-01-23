import React, { Component } from 'react'
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from './Filter/Filter'
import { ContactList } from "./ContactList/ContactList";
import { nanoid } from 'nanoid'
// import PropTypes from 'prop-types'

export class App extends Component { 

  state = {
  contacts: [{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
             {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
             {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
             {id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }],
    filter: '',
  
  }
  alertName = () => { 
    
    return this.state.contacts.map(contact => contact.name)
   
    
  }

  deleteContacts = contactsID => { 
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactsID)
    }))
  }
  
  filterOnChange = event => { 
    this.setState({filter: event.currentTarget.value})
  }

  formSubmitHandler = data => {
    if (this.alertName().includes(data.name)) {
     
      alert(`${data.name} is already in your contact`)
      return
    }
    
    const addContacts = {
      id: nanoid(),
      name: data.name,
      number: data.number
    }

    this.setState(prevState => ({
      contacts: [addContacts, ...prevState.contacts],
    }))
   
  }
  
  render() {

    const {filter} = this.state

    const normalizedFilter = this.state.filter.toLowerCase();

    const visibleName = this.state.contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter))


    return (
      <div
       style={{
        
        marginLeft: '40px',
         width:'400px',
        fontSize: 24,
        color: '#010101'
        }}>
        

        <h2>Phonebook</h2>

       <ContactForm onSubmit={this.formSubmitHandler}></ContactForm>

        <h3>Contacts</h3>

        <Filter value={filter} onChange={this.filterOnChange} />

        <ContactList contacts={visibleName} onDeleteContact={ this.deleteContacts} />
        
      </div>
    )
  }
}
