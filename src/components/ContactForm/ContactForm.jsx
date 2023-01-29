import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { useState } from 'react';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';

import { Form, Label } from './ContactForm.styled';
import { addContact } from 'redux/contactsSlice';

export default function ContactForm({ onSubmitForm, contacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    if (!contacts.find(contact => contact.name.includes(name))) {
      const contact = { id: nanoid(), name: name, number: number };
      dispatch(addContact({ name: name, number: number }));

      onSubmitForm(contact);
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
    <Form onSubmit={handleSubmit}>
      <Label>
        <span>Name</span>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label>
        <span>Number</span>
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <button type="submit">Add contact</button>
    </Form>
  );
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onSubmitForm: PropTypes.func.isRequired,
};
