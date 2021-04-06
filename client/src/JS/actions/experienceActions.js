import axios from "axios";
import {
  FETCH_ALL_EXPERIENCES,
  FETCH_ALL_EXPERIENCES_SUCCESS,
  FETCH_ALL_EXPERIENCES_FAIL,
  FETCH_EXPERIENCE_DETAILS,
  FETCH_EXPERIENCE_DETAILS_SUCCESS,
  FETCH_EXPERIENCE_DETAILS_FAIL,
  ADD_EXPERIENCE,
  ADD_EXPERIENCE_SUCCESS,
  ADD_EXPERIENCE_FAIL,
  CLEAR_ERRORS,
  UPDATE_EXPERIENCE_FAIL,
  UPDATE_EXPERIENCE_SUCCESS,
  UPDATE_EXPERIENCE,
} from "../constants/experienceConstants";
export const addExperience = (newExperience) => async (dispatch) => {
  dispatch({
    type: ADD_EXPERIENCE,
  });
  try {
    const addRes = await axios.post("api/experience", newExperience);
    dispatch({
      type: ADD_EXPERIENCE_SUCCESS,
      payload: addRes.data,
    });
  } catch (error) {
    dispatch({
      type: ADD_EXPERIENCE_FAIL,
      payload: error.response.data,
    });
  }
};
export const getExperiences = () => async (dispatch) => {
  try {
    dispatch({ type: FETCH_ALL_EXPERIENCES });
    const { data } = await axios.get("/api/experience");
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
      "🚀 ~ file: experienceActions.js ~ line 38 ~ getExperienceDetails ~ error",
      error
    );
    dispatch({
      type: FETCH_EXPERIENCE_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
// //delete experience
// export const deleteExperience = (id) => async (dispatch) => {
//   dispatch({ type: DELETE_EXPERIENCE });
//   try {
//     const { data } = await axios.delete(`/api/experience/${id}`);
//     dispatch({
//       type: DELETE_EXPERIENCE_SUCCESS,
//       payload: data.success,
//     });
//   } catch (error) {
//     console.log(
//       "🚀 ~ file: experienceActions.js ~ line 38 ~ getExperienceDetails ~ error",
//       error
//     );
//     dispatch({
//       type: DELETE_EXPERIENCE_FAIL,
//       payload: error.response.data.message,
//     });
//   }
// };
export const updateExperience = (id, updatedExperience) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_EXPERIENCE,
    });

    const { data } = await axios.put(
      `/api/experience/${id}`,
      updatedExperience
    );
    dispatch({
      type: UPDATE_EXPERIENCE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_EXPERIENCE_FAIL,
    });
  }
};
//clear Errors
export const clearErrors = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
