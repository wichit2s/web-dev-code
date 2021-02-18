import { 
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL
} from '../constants/user.js';

function userSigninReducer(state={ user: {} }, action) {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { loading: true }
    case USER_SIGNIN_SUCCESS:
      return { loading: false, user: action.payload }
    case USER_SIGNIN_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state;
  }
}

export { userSigninReducer };
