import React from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  CardText,
  CardLink,
} from "reactstrap";

const ExperienceModel = ({ experience }) => {
  return (
    <Row>
      <Col lg="6" xl="5" style={{ marginBottom: "1%" }}>
        <Col xl="5"></Col>
        <Card className="card-stats mb-4 mb-xl-0">
          <CardBody>
            <Row>
              <div className="col">
                {experience.isCreated ? (
                  <>
                    <small>
                      {" "}
                      <i
                        className="fas fa-circle"
                        style={{ paddingRight: "2%" }}
                      />
                      Créée
                    </small>

                    <CardText>{experience.title}</CardText>

                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Voir</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Demander la validation</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#f5365c " }}>
                      <Button
                        style={{
                          backgroundColor: "white",
                          boxShadow:
                            "0 4px 6px white, 0 0px 0px rgb(0 0 0 / 0%)",
                          border: "0px white",
                        }}
                      >
                        <small>Supprimer</small>
                      </Button>
                    </CardLink>
                  </>
                ) : experience.isBeingValidated ? (
                  <>
                    <small>
                      {" "}
                      <i
                        className="fas fa-circle"
                        style={{ paddingRight: "2%", color: "#ffd600 " }}
                      />
                      En cours de validation
                    </small>
                    <CardText>{experience.title}</CardText>

                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Voir</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Demander la validation</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#f5365c " }}>
                      <small>Supprimer</small>
                    </CardLink>
                  </>
                ) : experience.isValidated ? (
                  <>
                    <small>
                      {" "}
                      <i
                        className="fas fa-circle"
                        style={{ paddingRight: "2%", color: "#2dce89" }}
                      />
                      Acceptée
                    </small>
                    <CardText>{experience.title}</CardText>
                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Voir</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Publier</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#f5365c " }}>
                      <small>Supprimer</small>
                    </CardLink>
                  </>
                ) : (
                  <>
                    <small>
                      {" "}
                      <i
                        className="fas fa-circle"
                        style={{ paddingRight: "2%", color: "#f5365c" }}
                      />
                      Refusée
                    </small>

                    <CardText>{experience.title}</CardText>
                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Voir</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#525f7f" }}>
                      <small>Redemander la validation</small>
                    </CardLink>
                    <CardLink href="#" style={{ color: "#f5365c " }}>
                      <small>Supprimer</small>
                    </CardLink>
                  </>
                )}
              </div>
              <Col className="col-auto">
                {experience.type.title === "en ligne" ? (
                  <i className="ni ni-laptop" />
                ) : (
                  <i className="fas fa-users" />
                )}
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ExperienceModel;
