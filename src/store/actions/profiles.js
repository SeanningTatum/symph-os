
const url = "http://localhost:8080/_ah/api/";

export const get = (api, id) => {
  return async dispatch => {
    try {
      const response = await fetch(url + `${api}/v1/get/${id}`);
      const data = await response.json();
      
      if (data.error) throw new Error("No user found")

    } catch (error) {
      console.error(error.message);
    }

  }
}