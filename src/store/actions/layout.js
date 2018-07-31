import {SHOW_SNACKBAR, HIDE_SNACKBAR} from './actionTypes';

export const showSnackbar = (message, msgType) => ({
  type: SHOW_SNACKBAR,
  message,
  msgType
});

export const hideSnackbar = () => ({
  type: HIDE_SNACKBAR
})