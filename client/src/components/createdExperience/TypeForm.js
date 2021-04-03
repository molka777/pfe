import React from "react";
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
const TypeForm = () => {
  return (
    <>
      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle className="h3 font-weight-bold mb-0">
                          Les personnes participent en ligne à travers Zoom
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="ni ni-laptop" />
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-3 mb-0 text-muted text-sm">
                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
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
                      <Card className="card-stats mb-4 mb-xl-0">
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle className="mb-0 text-sm">
                                <span
                                  className="mr-2 font-weight-bold"
                                  style={{ color: "#f5365c" }}
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
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle className="h3 font-weight-bold mb-0">
                          Les personnes participent directement à l'expérience
                        </CardTitle>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    <div className="mt-3 mb-0 text-muted text-sm">
                      <button
                        className="btn-icon-clipboard"
                        id="tooltip982655500"
                        type="button"
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
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default TypeForm;
