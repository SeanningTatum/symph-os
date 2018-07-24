import * as actionTypes from 'store/actions/actionTypes'; 

const initialState = {
  clients:[],
  contacts: [],
  employees: []
}

function add (state, tableName, formControls) {
  const newData = {};

  for (const key in formControls) {
    newData[key] = formControls[key].value;
  }

  return {
    ...state,
    [tableName]: [...(state[tableName] || []) , {...newData, id: state[tableName].length + 1}]
  }
} 


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
