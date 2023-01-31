import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

import ContactListItem from 'components/ContactListItem/ContactListItem';

export default function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const normalizeFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizeFilter)
  );

  return (
    <div className="container">
      <ul className="text-start list-group">
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ul>
    </div>
  );
}
