import axios from 'axios';
import {
  FETCH_ALL_EXPERIENCES,
  FETCH_ALL_EXPERIENCES_SUCCESS,
  FETCH_ALL_EXPERIENCES_FAIL,
  FETCH_EXPERIENCE_DETAILS,
  FETCH_EXPERIENCE_DETAILS_SUCCESS,
  FETCH_EXPERIENCE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from '../constants/experienceConstants';

export const getExperiences = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_EXPERIENCES });
    const { data } = await axios.get('/api/experience');
    dispatch({
      type: FETCH_ALL_EXPERIENCES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_ALL_EXPERIENCES_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getExperienceDetails = (id) => async (dispatch) => {
  dispatch({ type: FETCH_EXPERIENCE_DETAILS });
  try {
    const { data } = await axios.get(`/api/experience/${id}`);
    dispatch({
      type: FETCH_EXPERIENCE_DETAILS_SUCCESS,
      payload: data.experience,
    });
  } catch (error) {
    console.log(
      '🚀 ~ file: experienceActions.js ~ line 38 ~ getExperienceDetails ~ error',
      error
    );
    dispatch({
      type: FETCH_EXPERIENCE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

//clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
