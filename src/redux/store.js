import { configureStore } from '@reduxjs/toolkit';
// import { devToolsEnhancer } from '@redux-devtools/extension';
import { contactsReducer } from './reducer';

// const enhancer = devToolsEnhancer();
export const store = configureStore({ reducer: { contacts: contactsReducer } });
