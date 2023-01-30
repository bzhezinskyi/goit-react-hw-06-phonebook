import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export default function ContactListItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li>
      {name}:{number}
      <button
        type="button"
        onClick={() => {
          dispatch(deleteContacts(id));
          Notiflix.Notify.success('Deleted from contacts');
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
};
