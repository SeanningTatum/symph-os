import {SHOW_SNACKBAR} from './actionTypes';

export const showSnackbar = (message, msgType) => ({
  type: SHOW_SNACKBAR,
  message,
  msgType
})