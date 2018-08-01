import {
  GET_ALL_START,
  GET_ALL_END,
  GET_ALL_SUCCESS,
  ADD_SUCCESS,
} from 'store/actions/actionTypes';

const initialState = {
  clients: [],
  contacts: [],
  employees: [],
  teams: [],
  projects: [],
  loading: false
}

/*============================================
=                Start of get              =
=============================================*/
function getStart(state) {
  return {
    ...state,
    loading: true
  }
}

function getEnd(state) {
  return {
    ...state,
    loading: false
  }
}

function getAll(state, action) {
  const { tableName, dataArray } = action;

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
    case GET_ALL_START: return getStart(state);
    case GET_ALL_END: return getEnd(state);
    case GET_ALL_SUCCESS: return getAll(state, action);
    case ADD_SUCCESS: return add(state, action);

    default: return state
  }
}
/*=====   End of Reducer  ======*/

export default reducer;
