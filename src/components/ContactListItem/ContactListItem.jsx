import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export default function ContactListItem({
  contact: { name, number, id },
  onDeleteContact,
}) {
  const dispatch = useDispatch();

  return (
    <li>
      {name}:{number}
      <button
        type="button"
        onClick={() => {
          onDeleteContact(id);
          dispatch(deleteContacts(id));
        }}
      >
        Delete
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
