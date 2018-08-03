import {
  ADD_ERROR, 
  ADD_SUCCESS, 
  GET_ALL_END, 
  GET_ALL_ERROR, 
  GET_ALL_START, 
  GET_ALL_SUCCESS
}  from './actionTypes';
import { showSnackbar, hideSnackbar } from './layout';

const url = "http://symph-operating-system-210700.appspot.com/_ah/api/";

/*=============================================
=                 Start ADD                 =
=============================================*/
export const addSuccess = (tableName, data) => ({
  type: ADD_SUCCESS,
  data,
  tableName,
});

export const addError = () => ({type: ADD_ERROR});

export function add(tableName, formControls, api, obj = {}) {
  let data = {};

  // get the data from given formControls
  for (const key in formControls) {
    if (typeof(formControls[key].value) !== 'number' ) {
      data[key] = formControls[key].value.trim();
    } else {
      data[key] = formControls[key].value;
    }
  }

  data = {...data, ...obj};

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

      dispatch(showSnackbar('Successfully Added!', 'success'));
      dispatch(addSuccess(tableName, data));
    } catch (error) {
      dispatch(showSnackbar(error.message, 'error'));

    } finally {
      setTimeout(() => dispatch(hideSnackbar()), 3000);

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

  const options = {
    headers: {
      "Content-Type": "application/json",        
      "Authorization": 'Bearer ' + localStorage.getItem('token')
    }
  }

  return async dispatch => {
    dispatch(getAllStart());
    try {
      const response = await fetch(url + `${api}/v1/get`, options);
      const dataArray = await response.json();
      console.log(dataArray)
      dispatch(getAllSuccess(tableName, dataArray[tableName]));
    } catch (error) {
      dispatch(getAllError());
      dispatch(showSnackbar('A server side error has occured', 'error'));
      setTimeout(() => dispatch(hideSnackbar()), 3000);

    } finally {
      dispatch(getAllEnd());

    }
  }
}
/*=====   End of getAll  ======*/




