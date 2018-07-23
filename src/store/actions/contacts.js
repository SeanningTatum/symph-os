import * as actionTypes from './actionTypes';

export const addContact = (contactControls) => {
  return {
    type: actionTypes.ADD_CONTACT,
    contactControls
  }
}