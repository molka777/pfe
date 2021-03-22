import React, { Fragment, useEffect } from "react";
import "../../App.css";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  getExperienceDetails,
  clearErrors,
} from "../../actions/experienceActions";

const ExperienceDetails = ({ match }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, experience, error } = useSelector(
    (state) => state.experienceDetails
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getExperienceDetails(match.params.id));
  }, [dispatch, alert, error, match.params.id]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div>{experience.title}</div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ExperienceDetails;
