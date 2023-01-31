import Notiflix from 'notiflix';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/contactsSlice';

export default function ContactListItem({ contact: { name, number, id } }) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col">
          <h5 className="mb-0">{name}:</h5>
        </div>
        <div className="col">
          <p className="mb-0">{number}</p>
        </div>
        <div className="col-auto ">
          <button
            className="btn btn-primary "
            type="button"
            onClick={() => {
              dispatch(deleteContacts(id));
              Notiflix.Notify.success('Deleted from contacts');
            }}
          >
            Delete
          </button>
        </div>
      </div>
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
