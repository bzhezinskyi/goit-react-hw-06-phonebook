import { configureStore } from '@reduxjs/toolkit';
import { contactsReduser } from './contactsSlice';
import { filterReduser } from './filterSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistContactsConfig = {
  key: 'contacts',
  storage,
};
const persistedContactsReducer = persistReducer(
  persistContactsConfig,
  contactsReduser
);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filter: filterReduser,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
