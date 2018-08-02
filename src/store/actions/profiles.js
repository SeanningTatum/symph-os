import { 
  GET_SUCCESS, 
  RESET_PROFILE,
  GET_START,
  GET_END 
} from './actionTypes';

const url = "http://localhost:8080/_ah/api/";

const getStart = () => ({type: GET_START});
const getEnd = () => ({type: GET_END});


const getSuccess = (profile) => ({
  type: GET_SUCCESS,
  profile
});

export const resetProfile = () => ({
  type: RESET_PROFILE
})

export function get (api, id) {

  const options = {
    headers: { 
      "Authorization": "Bearer " + localStorage.getItem('token')
    },
  }

  return async dispatch => {
    dispatch(getStart());
    console.log(api);
    try {
      const response = await fetch(url + `${api}/v1/get/${id}`, options);
      const profile = await response.json();
      if (profile.error) throw new Error("No user found")

      dispatch(getSuccess(profile))

    } catch (error) {
      console.error(error.message);
    } finally {
        dispatch(getEnd());
    }

  }
}

/*=============================================
=                 Start Update                =
=============================================*/

export function update (api, id, data) {
  const options = {
    method: "PUT",
    headers: { 
      "Content-Type": "application/json",
      "Authorization": "Bearer " + localStorage.getItem('token')
    },
    body: JSON.stringify(data)
  }

  return async dispatch => {

    try {
      const response = await fetch(url + `${api}/v1/update/${id}`, options);
      const data = await response.json();
      
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
}

/*=====   End of update  ======*/