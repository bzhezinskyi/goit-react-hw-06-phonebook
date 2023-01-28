import { useState, useEffect } from 'react';

import Notiflix from 'notiflix';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    if (
      localStorage.getItem('Contacts') &&
      JSON.parse(localStorage.getItem('Contacts')).length !== 0
    ) {
      setContacts(JSON.parse(localStorage.getItem('Contacts')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    return;
  }, [contacts]);

  const hendleSubmaiForm = contact => {
    setContacts([...contacts, contact]);
  };

  const hendleChangeFiltr = event => {
    setFilter(event.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(contacts.filter(contact => contact.id !== contactId));

    Notiflix.Notify.success('Deleted from contacts');
  };

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmitForm={hendleSubmaiForm} contacts={contacts} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={hendleChangeFiltr} />
      <ContactList contacts={visibleContacts} onDeleteContact={deleteContact} />
    </div>
  );
}
