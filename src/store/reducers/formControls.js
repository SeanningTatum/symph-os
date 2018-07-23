import * as actionTypes from 'store/actions/actionTypes';
import { clientControls } from 'utils/formControls/clientControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

const initState = {
  clientControls
}

const inputChanged = (state, value, controlName) => {
  const errorObj = checkValidity(event.target.value, state.controls[controlName].validation);
  const updatedControls = updateObject(state.controls, {
    [controlName]: updateObject(state.controls[controlName], {
      value: value,
      valid: errorObj.isValid,
      errorMessages: errorObj.errorMessages,
      touched: true,
    })
  });
  return {
    ...state,
    [controlName]: updatedControls
  }
}


const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGED: return inputChanged(state, action.value, controlName);
    default: return state;
  }
}

export default reducer;