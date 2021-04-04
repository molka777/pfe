import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../../JS/actions/experienceActions";
import Loader from "../layout/Loader";
import ExperienceModel from "./ExperienceModel";
import { Container, Col, Button } from "reactstrap";
const ExperiencesList = () => {
  const dispatch = useDispatch();
  const experiences = useSelector(
    (state) => state.experiencesReducers.experiences
  );

  const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  const error = useSelector((state) => state.experiences);
  useEffect(() => {
    if (error) {
      console.log(error);
    }
    dispatch(getExperiences());
  }, [dispatch, error]);

  return isLoading ? (
    <Loader />
  ) : experiences ? (
    <>
      <Container fluid>
        <div className="main-content" style={{ margin: "1%" }}>
          <Col lg="6" md="10">
            <h2 style={{ color: "#32325d" }}>Vos expériences</h2>
          </Col>
          <div
            className="header-body border"
            style={{ padding: "2%", margin: "1%" }}
          >
            <div style={{ backgroundColor: "#f8f9fe" }}>
              {experiences &&
                experiences.map((experience) => (
                  <ExperienceModel
                    key={experience._id}
                    experience={experience}
                  />
                ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  ) : (
    <h1>fail</h1>
  );
};

export default ExperiencesList;
