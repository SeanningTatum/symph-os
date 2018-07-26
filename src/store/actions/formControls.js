import {
  INPUT_CHANGED, 
  ON_BLUR, 
  RESET_FORM, 
  UPDATE_CONTROLS
} from './actionTypes';

export const inputChanged = (value, controlName, control) => {
  return {
    type: INPUT_CHANGED,
    value,
    controlName,
    control
  }
}

export const blur = (controlName, control) => ({
  type: ON_BLUR,
  controlName,
  control
})

export const resetForm = (controlName) => ({
  type: RESET_FORM,
  controlName
})

export const updateControls = (controlName, control, values) => ({
  type: UPDATE_CONTROLS,
  controlName,
  control, 
  values
})