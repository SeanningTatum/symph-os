import {
  INPUT_CHANGED,
  ON_BLUR,
  RESET_FORM,
  UPDATE_CONTROLS,
  CHECK_IS_FORM_VALID
} from 'store/actions/actionTypes';

import { clientControls } from 'utils/formControls/clientControls';
import { contactControls } from 'utils/formControls/contactControls';
import { employeeControls } from 'utils/formControls/employeeControls';
import { teamControls } from 'utils/formControls/teamControls';
import { updateObject, checkValidity } from 'utils/helperFunctions';

const initState = {
  clientControls,
  contactControls,
  employeeControls,
  teamControls,
  isFormValid: false
}
/*=============================================
=         Start checkIsFormValid             =
=============================================*/
const checkIsFormValid = (state, action) => {
  const {controlName} = action;

  for (const control in state[controlName]) {
    if (!state[controlName][control].valid) {
      return {...state, isFormValid: false}
    }
  }
  
  return {...state, isFormValid: true};
}
/*=====  End checkIsFormValid  ======*/

/*=============================================
=             Start updateControls             =
=============================================*/
const updateControls = (state, action) => {
  const { control, values } = action;
  let updatedControls = {...(state[control])};

  for (const value in values) {
    if (value !== 'key') {
      updatedControls[value] = updateObject(state[control][value], {
        value: values[value],
        valid: true
      });
    }    
  }

  return {
    ...state, 
    [control]: updatedControls
  };
}
/*=====  End updateControls  ======*/

/*=============================================
=             Start inputChanged             =
=============================================*/
const inputChanged = (state, action) => {
  const { value, controlName, control } = action;
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
const onBlur = (state, action) => {

  const { controlName, control } = action;

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
const resetForm = (state, action) => {
  const { controlName } = action;
  switch(controlName) {
    case 'clientControls': return { ...state, clientControls, isFormValid: true};
    case 'contactControls': return {...state, contactControls, isFormValid: true};
    case 'employeeControls': return {...state, employeeControls, isFormValid: true};
    default: return state;
  }
}
/*=====  End of resetForm  ======*/

/*=============================================
=                 REDUCER                    =
=============================================*/
const reducer = (state = initState, action) => {
  switch (action.type) {
    case INPUT_CHANGED: return inputChanged(state, action);
    case ON_BLUR: return onBlur(state, action);
    case RESET_FORM: return resetForm(state, action);
    case UPDATE_CONTROLS: return updateControls(state, action);
    case CHECK_IS_FORM_VALID: return checkIsFormValid(state, action);
    default: return state;
  }
}
/*=====  End of REDUCER ======*/
export default reducer;