import * as actionTypes from './actionTypes';

export const getClients = () => {
  return {
    type: actionTypes.GET_CLIENTS
  }
}

export const addClient = (clientControls, history) => {
  return {
    type: actionTypes.ADD_CLIENT,
    clientControls,
    history
  }
}