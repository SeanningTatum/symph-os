import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
  profile: {}
}

function getSuccess(state, action) {
  return {
    ...state,
    profile: {...action.profile}
  }
}

export default (state = initialState, action) => {
  switch (action.type) {

    case actionTypes.GET_SUCCESS: return getSuccess(state, action);

    default: return state;
  }
}
