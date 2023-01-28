import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: {
      contactId: nanoid(),
      name,
      number,
    },
  };
});

export const deleteContact = createAction('contact/deleteContact');

export const queryFilter = createAction('filters/queryFilter');
