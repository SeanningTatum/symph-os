import * as actionTypes from 'store/actions/actionTypes';

const initState = {
  contacts: []
}

/*============================================
=              Start addContact              =
=============================================*/
const addContact = (state, contactControls) => {

  const contact = {
    'contact_name': contactControls['contact_name'].value,
    'contact_nickname': contactControls['contact_nickname'].value,
    'contact_number': contactControls['contact_number'].value,
    'contact_email': contactControls['contact_email'].value,
    'contact_company': contactControls['contact_company'].value,
    'contact_position': contactControls['contact_position'].value
  }

  return {
    ...state,
    contacts: state.contacts.concat({...contact, contact_id: 1})
  }
}
/*=====   End of addContact  ======*/


/*============================================
=               Start reducer                =
=============================================*/
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CONTACTS: return state;
    case actionTypes.ADD_CONTACT: return addContact(state, action.contactControls);
    default: return state;
  }
}
/*=====   End of reducer  ======*/

export default reducer;