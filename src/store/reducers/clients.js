import * as actionTypes from 'store/actions/actionTypes';

const initState = {
  clients: []
}

const addClient = (state, clientControls, history) => {
  
  const client = {
    client_name: clientControls['client_name'].value,
    legal_name: clientControls['legal_name'].value,
    type: clientControls['type'].value
  }

  history.push('/clients');

  return {
    ...state,
    clients: state.clients.concat({...client, client_id: 1})
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CLIENTS: return state;
    case actionTypes.ADD_CLIENT: return addClient(state, action.clientControls, action.history);
    default: return state;
  }
}

export default reducer;