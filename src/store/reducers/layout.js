import {SHOW_SNACKBAR} from 'store/actions/actionTypes';

const initialState = {
  showSnackbar: false,
  type: '',
  message: ''
}

const showSnackbar = (state, action) => {
  const { message, msgType } = action;
  return {...state, type: msgType, message, showSnackbar: true};
}

export default (state = initialState, action) => {
    switch (action.type) {

    case SHOW_SNACKBAR: return showSnackbar(state, action);

    default: return state
  }
}
