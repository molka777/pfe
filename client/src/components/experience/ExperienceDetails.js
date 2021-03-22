import React, { Fragment, useEffect } from "react";
import "../../App.css";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  getExperienceDetails,
  clearErrors,
} from "../../actions/experienceActions";

const ExperienceDetails = ({ match: { params: { id } } }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(`object`)
    dispatch(getExperienceDetails(id));
  }, [dispatch, id]);
  // const { loading, experience, error } = useSelector(
  //   (state) => state.experienceDetails
  // );
  const isLoading = useSelector(state => state.experienceDetails.loading)
  const experience = useSelector(state => state.experienceDetails.experience)
  const error = useSelector(state => state.experienceDetails.error)

  console.log("🚀 ~ file: ExperienceDetails.js ~ line 38 ~ ExperienceDetails ~ experience.langue", experience)
  return (
    <Fragment>
      {isLoading ? (
        <Loader />
      ) : (
        <p>Hello </p>
        // <Fragment>
        //   <div>{experience.title}</div>
        //   <div>{experience.langue}</div>
        //   <div>{!experience.cibles.isEmpty() && experience.cibles[0]}</div>

        // </Fragment>
      )}
    </Fragment>
  );
};
export default ExperienceDetails;
