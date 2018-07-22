import * as actionTypes from './actionTypes';

export const getContacts = () => {
  return {
    type: actionTypes.GET_CONTACTS
  }
}


/**
 * @param {client_id, client_name, contact_name, legal_name, type} contact 
 */
export const addContact = (contact) => {
  return {
    type: actionTypes.ADD_CONTACT,
    contact
  }
}