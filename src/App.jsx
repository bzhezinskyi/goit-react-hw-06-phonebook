import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('Contacts', JSON.stringify(contacts));
    return;
  }, [contacts]);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} />

      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
