import * as actionTypes from './actionTypes';

export const addContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    contact
  }
}