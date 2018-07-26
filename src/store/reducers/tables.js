import * as actionTypes from 'store/actions/actionTypes';

const initialState = {
  clients: [],
  contacts: [],
  employees: [],
  loading: false
}

/*============================================
=                Start of get              =
=============================================*/
function getStart(state, action) {
  return {
    ...state,
    loading: true
  }
}

function getEnd(state, action) {
  return {
    ...state,
    loading: false
  }
}

function get(state, action) {
  const { tableName, dataArray } = action;
  console.log(dataArray);
  return {
    ...state,
    [tableName]: dataArray || []
  }
}
/*=====   End of get  ======*/


/*============================================
=                Start of add               =
=============================================*/
function add(state, action) {
  const { tableName, data } = action;
  return {
    ...state,
    [tableName]: [...(state[tableName]) || [], data]
  }
}
/*=====   End of add  ======*/

/*============================================
=              Start Reducer                =
=============================================*/
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_START: return getStart(state, action);
    case actionTypes.GET_ALL_END: return getEnd(state, action);
    case actionTypes.GET_ALL_SUCCESS: return get(state, action);
    case actionTypes.ADD_SUCCESS: return add(state, action);

    default: return state
  }
}
/*=====   End of Reducer  ======*/

export default reducer;
