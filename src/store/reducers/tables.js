import * as actionTypes from 'store/actions/actionTypes'; 

const initialState = {
  clients:[],
  contacts: [],
  employees: []
}
/*============================================
=                Start of Add               =
=============================================*/
function add (state, tableName, formControls) {
  const newData = {};

  for (const key in formControls) {
    newData[key] = formControls[key].value;
  }

  return {
    ...state,
    [tableName]: state[tableName].concat({...newData, id: state[tableName].length + 1})
  }
} 
/*=====   End of Add  ======*/

/*============================================
=              Start Reducer                =
=============================================*/
const reducer = (state = initialState, action) => {
  switch (action.type) {

  case actionTypes.ADD: return add(state, action.tableName, action.formControls)

  default:
    return state
  }
}
/*=====   End of Reducer  ======*/

export default reducer;
