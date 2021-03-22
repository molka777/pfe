import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import combineReducer from './reducers';

let initialState = {};

const middleware = [thunk];
const store = createStore(
  combineReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
