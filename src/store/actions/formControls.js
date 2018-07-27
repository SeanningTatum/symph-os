import {
  INPUT_CHANGED, 
  ON_BLUR, 
  RESET_FORM, 
  UPDATE_CONTROLS,
  CHECK_IS_FORM_VALID
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

export const updateControls = (control, values) => ({
  type: UPDATE_CONTROLS,
  control, 
  values
});

export const checkIsFormValid = (controlName) => ({
  type: CHECK_IS_FORM_VALID,
  controlName
})