import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer, filtersReducer } from './reducer';

// const dataReducer = createReducer(0, {});

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});
