import {SHOW_SNACKBAR} from './actionTypes';

export const showSnackbar = (message, type) => ({
  type: SHOW_SNACKBAR,
  message,
  type
})