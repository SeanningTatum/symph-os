import { GET_SUCCESS } from './actionTypes';

const url = "http://localhost:8080/_ah/api/";

const getSuccess = (profile) => ({
  type: GET_SUCCESS,
  profile
});

export function get (api, id) {
  return async dispatch => {
    try {
      const response = await fetch(url + `${api}/v1/get/${id}`);
      const profile = await response.json();
      if (profile.error) throw new Error("No user found")

      dispatch(getSuccess(profile))
    } catch (error) {
      console.error(error.message);
    }

  }
}