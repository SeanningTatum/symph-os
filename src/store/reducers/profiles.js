import {
  GET_SUCCESS, 
  RESET_PROFILE,
  GET_START,
  GET_END
} from 'store/actions/actionTypes';

const initialState = {
  profile: {},
  loading: false
}

function getStart(state) {
  return {
    ...state, 
    loading: true
  }
}

function getEnd(state) {
  return {
    ...state, 
    loading: false
  }
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
    case GET_START: return getStart(state);
    case GET_END: return getEnd(state);
    default: return state;
  }
}
