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

function isWhitelisted (email, whitelist) {
  for (let e in whitelist) {
    if (email === whitelist[e]) return true;
  }
  return false;
}

export function onAuth (response, whitelist) {
  return dispatch => {

    if (response.error) {
      console.error(response);
      dispatch(onAuthError())
      return;
    }

    // response.reloadAuthResponse()

    const {access_token, expires_in} = response.Zi;

    const extractProfile = ({ email, name, imageUrl }) => ({ email, name, imageUrl });
    const profile = extractProfile(response.profileObj);

    localStorage.setItem('response', JSON.stringify(response));
    localStorage.setItem('token', access_token);
    localStorage.setItem('profile', JSON.stringify(profile))
    localStorage.setItem('expiration_date', new Date(new Date().getTime() + expires_in * 1000));
    
    const email = profile.email;
    const userDomain = email.split('@');

    if (!(userDomain === whitelist.domains[0] || isWhitelisted(email, whitelist.emails))) {
      console.error('not a valid user');
      return;
    }

    dispatch(onAuthSuccess(profile, access_token));
  }
}



export function isLoggedIn(whitelist) {
  return dispatch => {
    const token = localStorage.getItem('token');
    if (!token) {
      dispatch(logout());
      return;
    }

    const email = JSON.parse(localStorage.getItem('profile')).email;
    const userDomain = email.split('@');

    if (!(userDomain === whitelist.domains[0] || isWhitelisted(email, whitelist.emails))) {
      console.error('not a valid user');
      return;
    }

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