import {
  ADD_ERROR, 
  ADD_SUCCESS, 
  GET_ALL_END, 
  GET_ALL_ERROR, 
  GET_ALL_START, 
  GET_ALL_SUCCESS
}  from './actionTypes';
import { showSnackbar } from './layout';

const url = "http://localhost:8080/_ah/api/";

/*=============================================
=                 Start ADD                 =
=============================================*/
export const addSuccess = (tableName, data) => ({
  type: ADD_SUCCESS,
  data,
  tableName,
});

export const addError = () => ({type: ADD_ERROR});

export function add(tableName, formControls, api, tags) {
  const data = {};

  // get the data from given formControls
  for (const key in formControls) {
    data[key] = formControls[key].value;
  }

  // get the data from given tags and convert it to array
  for (const key in tags) {
    data['members'] = [...(data['members']) || [], tags[key].value];
  }

  console.log(data);

  const options = {
    method: "POST",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }

  return async dispatch => {
    try {
      const response = await fetch(url + `${api}/v1/add`, options);
      const data = await response.json();
      dispatch(showSnackbar('Successfully Added!', 'success'))
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
const getAllStart = () => ({ type: GET_ALL_START });
const getAllEnd = () => ({ type: GET_ALL_END });
const getAllSuccess = (tableName, dataArray) => ({
  type: GET_ALL_SUCCESS,
  tableName,
  dataArray
});
const getAllError = () => ({type: GET_ALL_ERROR})

export function getAll(tableName, api) {
  return async dispatch => {
    dispatch(getAllStart());
    try {
      const response = await fetch(url + `${api}/v1/get`, {
        headers: {
          "Content-Type": "application/json",        
          "Authorization": 'Bearer ' + localStorage.getItem('token')
        }
      });
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




