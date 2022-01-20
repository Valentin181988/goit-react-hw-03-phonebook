import React, { Component } from "react";
import { nanoid } from 'nanoid';
import { PhoneBookTitle } from "./Components/PhoneBookTitle";
import { PhoneBookForm } from './Components/PhoneBookForm';
import { ContactsList } from './Components/ContactsList';
import { ContactsTitle } from "./Components/ContactsTitle";
import { Filter } from './Components/Filter';

class App extends Component {
  state = {
    contacts: [],
    filter: ''
  };

  formSubmitHandler = ({name, number}) => {

    const alreadyInList = this.state.contacts.find(contact => contact.name === name);

    if (alreadyInList !== undefined) {
        alert(`${name} is already in contacts`);

        return;
    };
  
    const contact = {
      id: nanoid(),
      name,
      number
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts] 
    }))
  };

  changeSearchFilter = event => {
    this.setState({filter: event.currentTarget.value})
  };

  getVisibleContacts = () => {
    const {contacts, filter} = this.state;

    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => 
      contact.name.toLowerCase().includes(normalizedFilter));
  };

  deleteContact = contactId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      };
    });
  };

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const contactsParsed = JSON.parse(contacts);

    if (contactsParsed) {
      this.setState({contacts: contactsParsed});
    };
  };

  componentDidUpdate(prevProps, prevState) {
     if (this.state.contacts !== prevState.contacts) {
        localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
     };
  };
  
  render() {

     const { filter } = this.state;

      const searchContact = this.getVisibleContacts();

      return (
        <div>
          <PhoneBookTitle title="Phone book"/>
          <PhoneBookForm onSubmit={this.formSubmitHandler}/>
          <ContactsTitle title="Contacts"/>
          <Filter value={filter} onChange={this.changeSearchFilter}/>
          <ContactsList contacts={searchContact} onDeleteContact={this.deleteContact}/> 
        </div>
    );
  };
  
}


export default App;
