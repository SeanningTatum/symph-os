import {AUTH_SUCCESS, AUTH_LOGOUT} from 'store/actions/actionTypes';

const initialState = {
  profile: null,
  token: null
}


function authLogout(state) {
  return {
    ...state,
    profile: null, 
    token: null
  }
}

function authSuccess(state, action) {
  return {
    ...state,
    profile: action.profile,
    token: action.token
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS: return authSuccess(state, action);
    case AUTH_LOGOUT: return authLogout(state);
    default: return state;
  }
}
