import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import Filter from './components/Filter/Filter';

export default function App() {
  return (
    <div className="container text-center">
      <h1>Phonebook</h1>
      <ContactForm />
      <hr />
      <h2 className="mb-4">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
