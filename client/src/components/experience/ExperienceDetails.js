import React, { Fragment, useEffect } from "react";
import "../../App.css";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  getExperienceDetails,
  clearErrors,
} from "../../JS/actions/experienceActions";


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
  const isLoading = useSelector(state => state.experiencesReducers.isLoading)
  const experience = useSelector(state => state.experiencesReducers.experience)
  const error = useSelector(state => state.experiencesReducers.error)

  console.log("🚀 ~ file: ExperienceDetails.js ~ line 38 ~ ExperienceDetails ~ experience.langue", experience)
  return (

    isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <div>{experience.title}</div>


      </Fragment>
    )

  );
};
export default ExperienceDetails;
