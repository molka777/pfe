import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  experiencesReducers,
  experienceDetailsReducer,
} from "./reducers/experienceReducers";

const reducer = combineReducers({
  experiences: experiencesReducers,
  experienceDetails: experienceDetailsReducer,
});

let initialState = {};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
