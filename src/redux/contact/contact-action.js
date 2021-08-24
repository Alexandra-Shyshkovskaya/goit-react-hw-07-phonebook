import types from './contact-types';
import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// eslint-disable-next-line
const addContacts = createAction(types.ADD, contactFormState => {
  return {
    payload: {
      id: uuidv4(),
      name: contactFormState.name,
      number: contactFormState.number,
    },
  };
});
// eslint-disable-next-line
const deleteContacts = createAction(types.DELETE);
const changeFilter = createAction(types.CHANGE_FILTER);
// eslint-disable-next-line
export default { addContacts, deleteContacts, changeFilter };