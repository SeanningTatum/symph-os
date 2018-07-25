import * as actionTypes from './actionTypes';

// export const add = (tableName, formControls, urlName) => ({
//   type: actionTypes.ADD,
//   formControls,
//   tableName,
// });



export const add = (tableName, formControls, urlName) => {

  const data = {};

  for (const key in formControls) {
    data[key] = formControls[key].value;
  }

  console.log(data);

  const options = {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(data)
  }

  return dispatch => {
    fetch("http://localhost:8080/_ah/api/contacts-api/v1/create-contact", options)
      .then(data => console.log(data))
      .then(user => {
        console.log(user);
      })
  }
};

