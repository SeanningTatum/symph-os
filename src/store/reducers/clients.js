import * as actionTypes from 'store/actions/actionTypes';

const initState = {
  clients: []
}

const addClient = (state, client) => {
  return {
    ...state,
    clients: state.clients.concat({...client, client_id: 1})
  }
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_CLIENTS: return state;
    case actionTypes.ADD_CLIENT: return addClient(state, action.client);
    default: return state;
  }
}

export default reducer;