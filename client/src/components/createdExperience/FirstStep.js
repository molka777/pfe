import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
  Button,
  Form,
  Progress,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useForm } from "react-hook-form";
import SideBar from "../layout/SideBar";
import Alerte from "./Alerte";
const FirstStep = (props) => {
  const { handleSubmit } = useForm({});
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const onSubmit = () => {
    props.updateExperience({ type: { title: type } });
    props.history.push("/second");
  };
  const { experience } = props;

  const [type, setType] = useState(" ");
  return (
    <>
      <div style={{ backgroundColor: "#f8f9fe" }}>
        <SideBar />
        <div className="main-content">
          <Container fluid>
            <div className="text-center">1 de 4</div>
            <Progress style={{ height: "21px" }} value="15">
              10%
            </Progress>

            <Form onSubmit={handleSubmit(onSubmit)}>
              <div
                className="header-body border"
                style={{ padding: "2%", margin: "1%" }}
              >
                <Button
                  onClick={toggle}
                  style={{
                    padding: "0.5% 0.5% 0%",
                    float: "right",
                  }}
                >
                  <i className="ni ni-fat-remove" />
                </Button>
                <Modal isOpen={modal} toggle={toggle}>
                  <ModalHeader toggle={toggle}>
                    Abandonner la création ?
                  </ModalHeader>
                  <ModalBody>
                    Si vous abandonner la création, vous perderz toutes les
                    informations saisies.
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={toggle}>
                      Continuer
                    </Button>{" "}
                    <Button color="secondary" onClick={toggle}>
                      Abandonner
                    </Button>
                  </ModalFooter>
                </Modal>
                <Col lg="5" md="10">
                  <h2 style={{ color: "#32325d" }}>
                    <i className="fas fa-users-cog" style={{ padding: "2%" }} />
                    Le type de l'expérience
                  </h2>
                </Col>

                <Row>
                  <Col lg="6" xl="5">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle className="h4 font-weight-bold mb-0 text-muted">
                              Les personnes participent en ligne à travers Zoom
                            </CardTitle>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                              <i className="ni ni-laptop" />
                            </div>
                          </Col>
                        </Row>
                        <div className="mt-3 mb-0 text-muted text-sm">
                          {type == "en ligne" ? (
                            <button
                              className="btn-icon-clipboard"
                              style={{
                                backgroundColor: "white",
                                boxShadow:
                                  "rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 16px",
                              }}
                              id="tooltip982655500"
                              type="button"
                              onClick={() => setType("en ligne")}
                            >
                              <div>
                                <i className="ni ni-active-40" />
                                <span
                                  className="font-weight-bold"
                                  style={{ color: "#32325d" }}
                                >
                                  En ligne
                                </span>
                              </div>
                            </button>
                          ) : (
                            <button
                              className="btn-icon-clipboard"
                              id="tooltip982655500"
                              type="button"
                              onClick={() => setType("en ligne")}
                            >
                              <div>
                                <i className="ni ni-active-40" />
                                <span
                                  className="font-weight-bold"
                                  style={{ color: "#32325d" }}
                                >
                                  En ligne
                                </span>
                              </div>
                            </button>
                          )}
                          <Card className="card-stats mb-4 mb-xl-0">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle className="mb-0 text-sm">
                                    <span
                                      className="mr-2 font-weight-bold"
                                      style={{ color: "rgb(17 205 239)" }}
                                    >
                                      De quoi as-tu besoin ?
                                    </span>
                                  </CardTitle>
                                </div>
                              </Row>
                              <div className="mt-3 mb-0 text-muted text-sm font-weight-bold">
                                <span className="text-nowrap">
                                  <i className="ni ni-bold-right" />
                                  Un bon éclairage
                                </span>
                                <br />
                                <span className="text-nowrap">
                                  <i className="ni ni-bold-right" />
                                  Une connexion internet
                                </span>
                                <br />
                                <span className="text-nowrap">
                                  <i className="ni ni-bold-right" />
                                  Un son clair
                                </span>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                  <Col lg="6" xl="5">
                    <Card className="card-stats mb-4 mb-xl-0">
                      <CardBody>
                        <Row>
                          <div className="col">
                            <CardTitle className="h4 font-weight-bold mb-0 text-muted">
                              Les personnes participent en présentiel
                            </CardTitle>
                          </div>
                          <Col className="col-auto">
                            <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                              <i className="fas fa-users" />
                            </div>
                          </Col>
                        </Row>
                        <div className="mt-3 mb-0 text-muted text-sm">
                          {type == "en personne" ? (
                            <button
                              className="btn-icon-clipboard"
                              id="tooltip982655500"
                              type="button"
                              onClick={() => setType("en personne")}
                              style={{
                                backgroundColor: "white",
                                boxShadow:
                                  "rgb(0 0 0 / 10%) 0px 0px 0px 1px, rgb(0 0 0 / 10%) 0px 4px 16px",
                              }}
                            >
                              <div>
                                <i className="ni ni-active-40" />
                                <span
                                  className="font-weight-bold"
                                  style={{ color: "#32325d" }}
                                >
                                  En personne
                                </span>
                              </div>
                            </button>
                          ) : (
                            <button
                              className="btn-icon-clipboard"
                              id="tooltip982655500"
                              type="button"
                              onClick={() => setType("en personne")}
                            >
                              <div>
                                <i className="ni ni-active-40" />
                                <span
                                  className="font-weight-bold"
                                  style={{ color: "#32325d" }}
                                >
                                  En personne
                                </span>
                              </div>
                            </button>
                          )}

                          <Card className="card-stats mb-4 mb-xl-0">
                            <CardBody>
                              <Row>
                                <div className="col">
                                  <CardTitle className="mb-0 text-sm">
                                    <span
                                      className="mr-2 font-weight-bold"
                                      style={{ color: "#ffd600" }}
                                    >
                                      De quoi as-tu besoin ?
                                    </span>
                                  </CardTitle>
                                </div>
                              </Row>
                              <div className="mt-3 mb-0 text-muted text-sm font-weight-bold">
                                <span className="text-nowrap">
                                  <i className="ni ni-bold-right" />
                                  Savoir établir des liens
                                </span>
                                <br />
                                <span className="text-nowrap">
                                  <i className="ni ni-bold-right" />
                                  Un accueil de qualité
                                </span>
                                <br />
                                <span className="text-nowrap">
                                  <i className="ni ni-bold-right" />
                                  Un sens d'organisation
                                </span>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                      </CardBody>
                    </Card>
                  </Col>
                </Row>
              </div>
              <div>
                {type == undefined || type == " " ? (
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    disabled
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button className="mt-4" color="primary" type="submit">
                    Suivant
                  </Button>
                )}
              </div>
            </Form>
          </Container>
        </div>
      </div>
    </>
  );
};

export default FirstStep;
