import axios from 'axios';
import cookie from 'js-cookie';

import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL
} from '../constants/user.js';

const signin = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: USER_SIGNIN_REQUEST });
    const { data } = await axios.post('/api/users/signin', { email, password });
    console.warn('data');
    console.warn(data);
    dispatch({ type: USER_SIGNIN_SUCCESS, payload: data }); // Error
    cookie.set('user', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: USER_SIGNIN_FAIL, payload: error.message });
  }
};

export {
  signin
};
