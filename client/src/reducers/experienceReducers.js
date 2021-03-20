import {
  ALL_EXPERIENCES_REQUEST,
  ALL_EXPERIENCES_SUCCESS,
  ALL_EXPERIENCES_FAIL,
  EXPERIENCE_DETAILS_REQUEST,
  EXPERIENCE_DETAILS_SUCCESS,
  EXPERIENCE_DETAILS_FAIL,
  CLEAR_ERRORS,
} from "../constants/experienceConstants";

export const experiencesReducers = (state = { experiences: [] }, action) => {
  switch (action.type) {
    case ALL_EXPERIENCES_REQUEST:
      return {
        loading: true,
        experiences: [],
      };
    case ALL_EXPERIENCES_SUCCESS:
      return {
        loading: false,
        experiences: action.payload.experiences,
        experiencesCount: action.payload.experiencesCount,
      };
    case ALL_EXPERIENCES_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
export const experienceDetailsReducer = (
  state = { experience: {} },
  action
) => {
  switch (action.type) {
    case EXPERIENCE_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case EXPERIENCE_DETAILS_SUCCESS:
      return {
        loading: false,
        experience: action.payload,
      };
    case EXPERIENCE_DETAILS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
