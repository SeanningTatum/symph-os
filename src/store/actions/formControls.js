import * as actionTypes from './actionTypes';

export const inputChanged = (value, controlName, control) => {
  return {
    type: actionTypes.INPUT_CHANGED,
    value,
    controlName,
    control
  }
}

export const blur = (controlName, control) => ({
  type: actionTypes.ON_BLUR,
  controlName,
  control
})

export const resetForm = (controlName) => ({
  type: actionTypes.RESET_FORM,
  controlName
})