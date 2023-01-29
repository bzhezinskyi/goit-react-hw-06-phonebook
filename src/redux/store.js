import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReduser,
  },
});
