import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    state.push(action.payload);
  },
  [deleteContact]: (state, action) => {
    const index = state.findIndex(
      contact => contact.contactId === action.payload
    );
    state.splise(index, 1);
  },
});
//     (state = contactsInitialState, action) => {
//   switch (action.type) {
//     case 'contact/addContact':
//       return [...state, action.payload];
//     case 'contact/deleteContact':
//       return state.filter(task => task.id !== action.payload);
//     default:
//       return state;
//   }
// };

// const filterInitialState = '';

// const filterReducer = (state = filterInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//       };
//     default:
//       return state;
//   }
// };

// export const rootReducer = combineReducers({
//   contacts: contactsReducer,
//     filter: filterReducer,
// });
