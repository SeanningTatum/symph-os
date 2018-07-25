import * as actionTypes from './actionTypes';

const url = "http://localhost:8080/_ah/api/";

/*=============================================
=                 Start ADD                 =
=============================================*/
export const addSuccess = (tableName, data) => ({
  type: actionTypes.ADD_SUCCESS,
  data,
  tableName,
});

export function add (tableName, formControls, api) {
  const data = {};

  for (const key in formControls) {
    data[key] = formControls[key].value;
  }

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }

  return async dispatch => {
    try {
      const response = await fetch(url + `${api}/v1/create`, options);
      const data = await response.json();
      dispatch(addSuccess(tableName, data));
    } catch (error) {
      console.error(error);
    } finally {

    }
  }
};
/*=====   End of add  ======*/

/*=============================================
=                 Start GET                 =
=============================================*/
const getStart = () => ({type: actionTypes.GET_START});
const getEnd = () => ({type: actionTypes.GET_END});
const getSuccess = (tableName, dataArray) => ({
  type: actionTypes.GET_SUCCESS,
  tableName,
  dataArray
});

export function get(tableName, api) {
  return async dispatch => {
    dispatch(getStart());

    try {
      const response = await fetch(url + `${api}/v1/get`);
      const dataArray = await response.json();
      dispatch(getSuccess(tableName, dataArray[tableName]));
    } catch (error) {
      console.error(error);
    } finally {
      dispatch(getEnd());
    }
  }
}
/*=====   End of get  ======*/



