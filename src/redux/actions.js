import { nanoid } from 'nanoid';
import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contact/addContact', (name, number) => {
  return {
    payload: {
      name,
      number,
      id: nanoid(),
    },
  };
});

export const deleteContact = createAction('contacts/deleteContact');

export const setNameFilter = createAction('filters/setNameFilter');
