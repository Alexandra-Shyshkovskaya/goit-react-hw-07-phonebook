import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import action from './contact-action';

const items = createReducer([], {
  [action.addContacts]: (state, { payload }) =>
    state.find(({ name }) => name === payload.name)
      ? alert(`${state.name} is already in contacts`)
      : [payload, ...state],
  [action.deleteContacts]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [action.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});