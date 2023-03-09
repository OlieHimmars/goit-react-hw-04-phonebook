import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import ContactFilter from './ContactFilter';
import { Layout, TitlePhoneBook, TitleContacts } from './AppStyled';

export  const App = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });
   const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    contacts.some(contact => contact.name === name)
      ? alert(
          `${name} is already in your contact list.`,
          'OK'
        )
      : setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(contacts =>
      contacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = e => setFilter(e.currentTarget.value);

  const filtredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

    return (
      <Layout>
        <TitlePhoneBook>Phonebook</TitlePhoneBook>
        <ContactForm onSubmit={addContact} />
        <TitleContacts>Contacts</TitleContacts>
        <ContactFilter onFilter={changeFilter} filter={filter} />
        <ContactList
          contacts={filtredContacts()}
          onDeleteContact={deleteContact}
        />
      </Layout>
    );
};
