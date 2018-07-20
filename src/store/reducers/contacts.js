import * as actionTypes from 'store/actions/actionTypes';

const initState = {
  contacts: []
}

const addContact = (state, contact) => {
  console.log("IM HERE");
  console.log(contact);
  return {
    ...state,
    contacts: state.contacts.concat({...contact, client_id: 1})
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT: return addContact(state, action.contact);
    default: return state;
  }
}

export default reducer;