import * as actionTypes from './actionTypes';

export const getContacts = () => {
  return {
    type: actionTypes.GET_CONTACTS
  }
}

export const addContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    contact
  }
}