import { AUTH_SUCCESS , AUTH_ERROR, AUTH_LOGOUT } from './actionTypes';

const onAuthError= () => ({type: AUTH_ERROR})

const onAuthSuccess = (profile, token) => ({
  type: AUTH_SUCCESS, 
  profile, 
  token
});

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('expiration_date');
  localStorage.removeItem('profile');
  return {type: AUTH_LOGOUT};
}

export function onAuth (response) {
  return dispatch => {

    if (response.error) {
      console.error(response);
      dispatch(onAuthError())
      return;
    }

    const {access_token, expires_in, expires_at, id_token} = response.Zi;

    const extractProfile = ({ email, name, imageUrl }) => ({ email, name, imageUrl });
    const profile = extractProfile(response.profileObj);

    localStorage.setItem('token', id_token);
    localStorage.setItem('profile', JSON.stringify(profile))
    localStorage.setItem('expiration_date', new Date(new Date().getTime() + expires_in * 1000));

    dispatch(onAuthSuccess(profile, id_token));
  }
}

export function isLoggedIn() {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem('expiration_date'));
      console.log(expirationDate);

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const profile = JSON.parse(localStorage.getItem('profile'));
        dispatch(onAuthSuccess(profile, token));
      }
    }
  }
}