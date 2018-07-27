import {GET_SUCCESS, RESET_PROFILE} from 'store/actions/actionTypes';

const initialState = {
  profile: {}
}

function getSuccess(state, action) {
  return {
    ...state,
    profile: {...action.profile}
  }
}

function resetProfile(state) {
  return {
    ...state,
    profile: {}
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case GET_SUCCESS: return getSuccess(state, action);
    case RESET_PROFILE: return resetProfile(state);

    default: return state;
  }
}
