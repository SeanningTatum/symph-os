import * as actionTypes from 'store/actions/actionTypes'; 

const initialState = {
  employees: []
}




/*============================================
=              Start Reducer                =
=============================================*/
const reducer = (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.ADD_EMPLOYEE:
    console.log('THIS WORKS')
    return { ...state }

  default:
    return state
  }
}
/*=====   End of Reducer  ======*/

export default reducer;
