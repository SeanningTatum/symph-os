import * as actionTypes from './actionTypes';

const url = "http://localhost:8080/_ah/api/";

export const addSuccess = (tableName, data) => ({
  type: actionTypes.ADD_SUCCESS,
  data,
  tableName,
});

export const add = (tableName, formControls, urlName) => {

  const data = {};

  for (const key in formControls) {
    data[key] = formControls[key].value;
  }

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }

  return dispatch => {
    fetch("http://localhost:8080/_ah/api/contacts-api/v1/create", options)
      .then(response => response.json())
      .then(data => {
        dispatch(addSuccess(tableName, data))
      })
      .catch(error => {
        console.error('INTERNAL SERVER ERROR')
      });
  }
};


const getStart = () => ({type: actionTypes.GET_START});
const getEnd = () => ({type: actionTypes.GET_END})

const getSuccess = (tableName, dataArray) => ({
  type: actionTypes.GET_SUCCESS,
  tableName,
  dataArray
})

export const get = (tableName, api) => {
  return dispatch => {
    dispatch(getStart());
    console.log('starting')
    setTimeout(() => dispatch(getEnd()), 5000)

    // fetch(url + `${api}/v1/get`)
    //   .then(response => response.json())
    //   .then(dataArray => {
    //     dispatch(getSuccess(tableName, dataArray[tableName]))
    //     dispatch(getEnd())
    //   })
    //   .catch(error => {
    //     console.error('INTERNAL SERVER ERROR')
    //     getEnd();
    //   });
  }

}

