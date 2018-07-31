import {SHOW_SNACKBAR, HIDE_SNACKBAR} from 'store/actions/actionTypes';

const initialState = {
  showSnackbar: false,
  type: '',
  message: ''
}

const showSnackbar = (state, action) => {
  const { message, msgType } = action;
  return {...state, type: msgType, message, showSnackbar: true};
}

const hideSnackbar = (state) => ({...state, showSnackbar: false});

export default (state = initialState, action) => {
    switch (action.type) {

    case SHOW_SNACKBAR: return showSnackbar(state, action);
    case HIDE_SNACKBAR: return hideSnackbar(state);

    default: return state
  }
}
