import * as actionTypes from 'store/actions/actionTypes';
import { clientControls } from 'utils/formControls/clientControls';
import { contactControls } from 'utils/formControls/contactControls';
import { employeeControls } from 'utils/formControls/employeeControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

const initState = {
  clientControls,
  contactControls,
  employeeControls
}

/*=============================================
=             Start inputChanged             =
=============================================*/
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
/*=====  End inputChanged  ======*/

/*=============================================
=                Start onBlur               =
=============================================*/
const onBlur = (state, controlName, control) => {
  const updatedControls = updateObject(state[control], {
    [controlName]: updateObject(state[control][controlName], {
      dirty: true
    })
  });

  return {
    ...state,
    [control]: updatedControls
  }
}
/*=====  End of onBlur  ======*/

/*=============================================
=              Start resetForm               =
=============================================*/
const resetForm = (state, controlName) => {
  switch(controlName) {
    case 'clientControls': return { ...state, clientControls };
    case 'contactControls': return {...state, contactControls};
    case 'employeeControls': return {...state, employeeControls};
    default: return state;
  }
}
/*=====  End of resetForm  ======*/

/*=============================================
=                 REDUCER                    =
=============================================*/
const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.INPUT_CHANGED: return inputChanged(state, action.value, action.controlName, action.control);
    case actionTypes.ON_BLUR: return onBlur(state, action.controlName, action.control);
    case actionTypes.RESET_FORM: return resetForm(state, action.controlName)
    default: return state;
  }
}
/*=====  End of REDUCER ======*/
export default reducer;