import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = () => {
  if (
    localStorage.getItem('Contacts') &&
    JSON.parse(localStorage.getItem('Contacts')).length !== 0
  ) {
    return JSON.parse(localStorage.getItem('Contacts'));
  } else {
    return [];
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare({ name, number }) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContacts(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContacts } = contactsSlice.actions;
export const contactsReduser = contactsSlice.reducer;
