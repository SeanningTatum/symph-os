import * as actionTypes from './actionTypes';

export const getClients = () => {
  return {
    type: actionTypes.GET_CLIENTS
  }
}


/**
 * @param {client_id, client_name, client_name, legal_name, type} client 
 */
export const addClient = (client) => {
  return {
    type: actionTypes.ADD_CLIENT,
    client
  }
}