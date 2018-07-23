import * as actionTypes from './actionTypes';

export const inputChanged = (value) => {
  return {
    type: actionTypes.INPUT_CHANGED,
    value
  }
}