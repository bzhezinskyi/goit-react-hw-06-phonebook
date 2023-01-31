import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import Notiflix from 'notiflix';

import { addContact } from 'redux/contactsSlice';
import { getContacts } from 'redux/selectors';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = event => {
    event.preventDefault();

    if (!contacts.find(contact => contact.name.includes(name))) {
      dispatch(addContact({ name: name, number: number }));

      Notiflix.Notify.success(name + ' added in contacts');
    } else {
      const message = ' is already in contacts';
      Notiflix.Notify.failure(name + message);
    }

    setName('');
    setNumber('');
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className=" mb-4  row text-start">
          <label className="form-label  col">
            <span className=" ms-2">Name</span>
            <input
              className="form-control"
              onChange={handleChange}
              type="text"
              name="name"
              value={name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label className="form-label col">
            <span className=" ms-2">Number</span>
            <input
              className="form-control"
              onChange={handleChange}
              value={number}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    </div>
  );
}
