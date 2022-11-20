import { addContact, deleteContact, setNameFilter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const contactsInitialState = [
  { id: 0, name: 'Rosie Simpson', number: '459-12-56' },
];
export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) => {
    return state.filter(contact => contact.id !== action.payload);
  },
});

const filtersInitialState = {
  name: null,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setNameFilter]: (state, action) => {
    state.name = action.payload;
  },
});
