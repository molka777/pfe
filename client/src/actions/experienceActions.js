import axios from "axios";
import {
  ALL_EXPERIENCES_REQUEST,
  ALL_EXPERIENCES_SUCCESS,
  ALL_EXPERIENCES_FAIL,
  EXPERIENCE_DETAILS_REQUEST,
  EXPERIENCE_DETAILS_SUCCESS,
  EXPERIENCE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/experienceConstants";

export const getExperiences = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_EXPERIENCES_REQUEST });
    const { data } = await axios.get("/api/experience");
    dispatch({
      type: ALL_EXPERIENCES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_EXPERIENCES_FAIL,
      payload: error.response.data.message,
    });
  }
};
export const getExperienceDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: EXPERIENCE_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/experience/${id}`);
    dispatch({
      type: EXPERIENCE_DETAILS_SUCCESS,
      payload: data.experience,
    });
  } catch (error) {
    dispatch({
      type: EXPERIENCE_DETAILS_FAIL,
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
