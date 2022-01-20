import PropTypes from 'prop-types';
import { ContactsButton, 
         ContactsItem,
         ContactsItemName, 
         ContactsItemNumber } from './ContactsList.styled';

export const ContactsList = ({contacts, onDeleteContact}) => {
    return (
        <div>
            <ul>
                {contacts.map(({id, name, number}) =>(
                  <ContactsItem key={number}>
                      <ContactsItemName>{name}: </ContactsItemName> 
                      <ContactsItemNumber>{number}</ContactsItemNumber>
                      <ContactsButton onClick={() => onDeleteContact(id)}>Delete</ContactsButton>
                  </ContactsItem>) 
                  )}
            </ul>
        </div>
    );
};


ContactsList.propTypes = {
   contacts: PropTypes.array,
   onDeleteContact: PropTypes.func
};