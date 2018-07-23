import * as actionTypes from 'store/actions/actionTypes';
import { clientControls } from 'utils/formControls/clientControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

const initState = {
  clientControls
}

const inputChanged = (state, value, controlName, control) => {
  const errorObj = checkValidity(value, state[control][controlName].validation);
  const updatedControls = updateObject(state[control], {
    [controlName]: updateObject(state[control][controlName], {
      value: value,
      valid: errorObj.isValid,
      errorMessages: errorObj.errorMessages,
      touched: true,
    })
  });

  return {
    ...state,
    [control]: updatedControls
  }
}

const onBlur = (state, controlName, control) => {
  const updatedControls = updateObject(state[control], {
    [controlName]: updateObject(state[control][controlName], {
      dirty: true
    })
  });

  console.log("IM HERE");

  return {
    ...state,
    [control]: updatedControls
  }
}


const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGED: return inputChanged(state, action.value, action.controlName, action.control);
    case actionTypes.ON_BLUR: return onBlur(state, action.controlName, action.control);
    default: return state;
  }
}

export default reducer;