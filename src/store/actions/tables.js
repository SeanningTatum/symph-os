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

export const addError = () => ({type: actionTypes.ADD_ERROR});

export function add(tableName, formControls, api) {
  const data = {};

  for (const key in formControls) {
    data[key] = formControls[key].value;
  }

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  }

  return async dispatch => {
    try {
      const response = await fetch(url + `${api}/v1/add`, options);
      const data = await response.json();
      dispatch(addSuccess(tableName, data));
    } catch (error) {
      console.error(error);
    } 
  }
};
/*=====   End of add  ======*/

/*=============================================
=                 Start GETALL                =
=============================================*/
const getAllStart = () => ({ type: actionTypes.GET_ALL_START });
const getAllEnd = () => ({ type: actionTypes.GET_ALL_END });
const getAllSuccess = (tableName, dataArray) => ({
  type: actionTypes.GET_ALL_SUCCESS,
  tableName,
  dataArray
});
const getAllError = () => ({type: actionTypes.GET_ALL_ERROR})

export function getAll(tableName, api) {
  return async dispatch => {
    dispatch(getAllStart());
    try {
      const response = await fetch(url + `${api}/v1/get`);
      const dataArray = await response.json();

      dispatch(getAllSuccess(tableName, dataArray[tableName]));
    } catch (error) {
      dispatch(getAllError());
    } finally {
      dispatch(getAllEnd())
    }
  }
}
/*=====   End of getAll  ======*/




