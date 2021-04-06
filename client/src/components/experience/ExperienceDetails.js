import React, { useEffect, useState } from "react";
import "../../App.css";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import {
  getExperienceDetails,
  updateExperience,
} from "../../JS/actions/experienceActions";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Col,
  Media,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { Link } from "react-router-dom";
import Carrousel from "../layout/Carrousel";

const ExperienceDetails = ({
  match: {
    params: { id },
  },
}) => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  useEffect(() => {
    console.log(`object`);
    dispatch(getExperienceDetails(id));
  }, [dispatch, id]);

  const handleValidation = (e) => {
    e.preventDefault();

    dispatch(
      updateExperience(experience._id, {
        ...experience,
        isBeingValidated: true,
        isCreated: false,
      })
    );

    console.log("votre expérience a été envoyé pour la validation");
  };
  const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  const experience = useSelector(
    (state) => state.experiencesReducers.experience
  );

  console.log(
    "🚀 ~ file: ExperienceDetails.js ~ line 38 ~ ExperienceDetails ~ experience.langue",
    experience
  );
  return isLoading ? (
    <Loader />
  ) : experience ? (
    <>
      {/* Modal */}
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Demander la validation?</ModalHeader>
        <ModalBody>
          Si vous envoyer votre demande de validation, vous ne pouvez plus ni la
          modifier ni la supprimer.
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={(e) => {
              toggle();
              handleValidation(e);
            }}
          >
            <Link
              className="btn btn-sm btn-outline-secondary"
              to={`/experiences`}
            >
              Envoyer
            </Link>
          </Button>
          <Button color="secondary" onClick={toggle}>
            Abandonner
          </Button>
        </ModalFooter>
      </Modal>
      {/* endModal */}
      <div>
        <Col lg="7" md="8" className="center">
          <Card className="bg-white shadow border-">
            <CardHeader className="bg-white">
              <div className="text-muted mt-2 mb-4">
                <small>
                  {experience.type.title === "en ligne" ? (
                    <i className="ni ni-laptop" />
                  ) : (
                    <i className="fas fa-users" />
                  )}{" "}
                  Expérience {experience.type.title}
                </small>
                <h1 style={{ margin: "0%" }}>{experience.title}</h1>
                <small>{experience.city}, Tunisie</small>
                <Row>
                  <Col lg="10" md="8">
                    <h3 style={{ paddingTop: "2%" }}>
                      Expérience {experience.type.title} organisée par Molka
                      Allani
                    </h3>
                  </Col>
                  <Col>
                    <Media className="align-items-center">
                      <span className="avatar avatar-sm rounded-circle">
                        <img
                          alt="..."
                          src={
                            require("../../assets/img/theme/team-4-800x800.jpg")
                              .default
                          }
                        />
                      </span>
                    </Media>
                  </Col>
                </Row>
              </div>
              <Card className="bg-white border-1">
                <CardHeader className="bg-white">
                  <Row className="icon-examples">
                    <Col lg="6" md="6">
                      <p>
                        {" "}
                        <i
                          className="far fa-clock"
                          style={{ paddingRight: "3%" }}
                        />
                        {experience.startHour} - {experience.endHour}
                      </p>
                    </Col>
                    <Col lg="6" md="6">
                      <p>
                        {" "}
                        <i
                          className="fas fa-users"
                          style={{ paddingRight: "3%" }}
                        />{" "}
                        Jusqu'à {experience.limitParticipants} personnes
                      </p>
                    </Col>
                    <Col lg="6" md="6">
                      <p>
                        <i
                          style={{ paddingRight: "3%" }}
                          className="far fa-comments"
                        />{" "}
                        Proposé en {experience.language}
                      </p>
                    </Col>
                    <Col lg="6" md="6">
                      <p>
                        <i
                          style={{ paddingRight: "3%" }}
                          className="fas fa-wallet"
                        />{" "}
                        {experience.price}TND
                      </p>
                    </Col>
                    <Col lg="6" md="6">
                      <p>
                        {" "}
                        <i
                          className="fas fa-street-view"
                          style={{ paddingRight: "4%" }}
                        />
                        {experience.target[0]} {"  "}
                        {experience.target[1] ? (
                          <span> et {experience.target[1]}</span>
                        ) : (
                          ""
                        )}
                      </p>
                    </Col>
                    <Col lg="6" md="6">
                      <p>
                        {" "}
                        <i
                          className="fas fa-bolt"
                          style={{ paddingRight: "3%" }}
                        />
                        niveau {experience.difficulty}{" "}
                      </p>
                    </Col>
                    {experience.phobia.length !== 0 ? (
                      <Col lg="6" md="6">
                        <p>
                          <i
                            className="fas fa-users-slash"
                            style={{ paddingRight: "3%" }}
                          />
                          {experience.phobia}{" "}
                        </p>
                      </Col>
                    ) : (
                      <></>
                    )}
                  </Row>{" "}
                </CardHeader>
              </Card>
              <Card className="bg-white border-0">
                <CardBody style={{ paddingBottom: "0%" }}>
                  <h4 style={{ marginBottom: "0%" }}>L'activité</h4>
                  <small>{experience.themes}</small> <br />
                  <small>{experience.program.activityDesc}</small>
                </CardBody>
              </Card>
            </CardHeader>

            <CardBody className="px-lg-5">
              <h4>Au programme</h4>
              <small>{experience.program.generalDesc}</small>
            </CardBody>
            {experience.includedEq || experience.excludedEq ? (
              <CardBody className="px-lg-5">
                <Card className="bg-white border-1">
                  <CardHeader className="bg-white">
                    <Row className="icon-examples">
                      {experience.includedEq ? (
                        <Col lg="6" md="6">
                          <h4>Les équipements inclus</h4>
                          {experience.includedEq.drink ? (
                            <p>
                              {"   "} <i className="fas fa-wine-bottle" />{" "}
                              {experience.includedEq.drink}
                            </p>
                          ) : (
                            <></>
                          )}
                          {experience.includedEq.food ? (
                            <p>
                              {"   "} <i className="fas fa-utensils" />{" "}
                              {experience.includedEq.food}
                            </p>
                          ) : (
                            <></>
                          )}
                          {experience.includedEq.material ? (
                            <p>
                              <i className="fas fa-archive" />
                              {"   "}
                              {experience.includedEq.material}
                            </p>
                          ) : (
                            <></>
                          )}
                        </Col>
                      ) : (
                        <></>
                      )}

                      {experience.excludedEq ? (
                        <Col lg="6" md="6">
                          <h4>Les équipements exclus</h4>
                          {experience.excludedEq.drink ? (
                            <p>
                              {"   "} <i className="fas fa-wine-bottle" />{" "}
                              {experience.excludedEq.drink}
                            </p>
                          ) : (
                            <></>
                          )}
                          {experience.excludedEq.food ? (
                            <p>
                              {"   "} <i className="fas fa-utensils" />{" "}
                              {experience.excludedEq.food}
                            </p>
                          ) : (
                            <></>
                          )}
                          {experience.excludedEq.material ? (
                            <p>
                              <i className="fas fa-archive" />
                              {"   "}
                              {experience.excludedEq.material}
                            </p>
                          ) : (
                            <></>
                          )}
                        </Col>
                      ) : (
                        <></>
                      )}
                    </Row>
                  </CardHeader>
                </Card>
              </CardBody>
            ) : (
              ""
            )}
            <div style={{ padding: "2%" }}>
              <Carrousel />
            </div>
            <Col lg="10" md="8">
              {experience.isBeingValidated === true ? (
                <Link to={`/experiences`}>Retour</Link>
              ) : (
                <Row>
                  <Button onClick={toggle}>Demander la validation</Button>
                  <Link to={`/create`}>Modifier</Link>
                </Row>
              )}
            </Col>
          </Card>
        </Col>
      </div>
    </>
  ) : (
    <small>...</small>
  );
};
export default ExperienceDetails;
