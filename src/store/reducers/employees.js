import * as actionTypes from 'store/actions/actionTypes'; 

const initialState = {
  employees: []
}

function addEmployee (state, employeeControls) {
  const employee = {
    fname: employeeControls['fname'].value, 
    lname: employeeControls['lname'].value,
    mi: employeeControls['mi'].value,
    nickname: employeeControls['nickname'].value,
    email: employeeControls['email'].value,
    position: employeeControls['position'].value,
    working_arrangement: employeeControls['working_arrangement'].value
  }

  return {
    ...state,
    employees: state.employees.concat({...employee, id: state.employees.length + 1}) 
  }
} 


/*============================================
=              Start Reducer                =
=============================================*/
const reducer = (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.ADD_EMPLOYEE: return addEmployee(state, action.employeeControls)

  default:
    return state
  }
}
/*=====   End of Reducer  ======*/

export default reducer;
