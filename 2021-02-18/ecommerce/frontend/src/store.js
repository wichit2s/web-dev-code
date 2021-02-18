import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { productListReducer, productDetailReducer } from './reducers/product.js';
import { userSigninReducer } from './reducers/user.js';
import cookie from 'js-cookie';

const user = cookie.getJSON( 'user' ) || null;

const initialState = { userSignin: { user } };

const reducers = combineReducers({
  productList:   productListReducer,
  productDetail: productDetailReducer,
  userSignin:    userSigninReducer,
});

const store = createStore(reducers, initialState, compose(applyMiddleware(thunk)));

export default store;
