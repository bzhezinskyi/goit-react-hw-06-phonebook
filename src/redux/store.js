import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlise';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};
const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReduser
);

const persistFilterConfig = {
  key: 'filter',
  storage,
};
const persistedFilterReducer = persistReducer(
  persistFilterConfig,
  filterReduser
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: persistedFilterReducer,
  },
});

export const persistor = persistStore(store);
