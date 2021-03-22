import { combineReducers } from 'redux';
import { experiencesReducers } from './experienceReducers';

const combineReducer = combineReducers({
  experiencesReducers,
});

export default combineReducer;
