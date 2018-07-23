import * as actionTypes from 'store/actions/actionTypes';

const initState = {
  contacts: []
}

const addContact = (state, contact) => {
  return {
    ...state,
    contacts: state.contacts.concat({...contact, contact_id: 1})
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS: return state;
    case actionTypes.ADD_CONTACT: return addContact(state, action.contact);
    default: return state;
  }
}

export default reducer;