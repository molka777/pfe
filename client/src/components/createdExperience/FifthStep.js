import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../JS/actions/experienceActions";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
  Label,
  Progress,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import SideBar from "../layout/SideBar";
const FifthStep = (props) => {
  const dispatch = useDispatch();
  const { experience } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const handleSubmit = (event) => {
    event.preventDefault();

    props.updateExperience({
      program: { ...program },
      excludedEq: { ...excludedEq },
      includedEq: { ...includedEq },
      isValidated: false,
      isBeingValidated: false,
      isPublished: false,
      isCreated: true,
    });
    console.log(experience.program);
    // if (
    //   experience.programm === program &&
    //   experience.excludedEq === excludedEq &&
    //   experience.includedEq === includedEq
    // ) {
    dispatch(addExperience(experience));
    //}
  };

  const [program, setProgram] = useState({});
  const [excludedEq, setExcludedEq] = useState({});
  const [includedEq, setIncludedEq] = useState({});
  //const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Container fluid>
          <div className="text-center">3 de 4</div>
          <Progress multi style={{ height: "21px" }}>
            <Progress bar value="70">
              70%
            </Progress>
          </Progress>
          <Col lg="10" md="12">
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
              <Col lg="7" md="10">
                <h2 style={{ color: "#32325d" }}>
                  <i class="far fa-file-alt" style={{ padding: "2%" }} />
                  Le programme de l'expérience
                </h2>
              </Col>
              <Form onSubmit={handleSubmit}>
                <Card className=" shadow border-0">
                  <CardHeader className="bg-transparent">
                    {experience.type.title === "en ligne" ? (
                      <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                        <i className="ni ni-laptop" />
                      </div>
                    ) : (
                      <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                        <i className="fas fa-users" />
                      </div>
                    )}
                    <span> Expérience {experience.type.title} </span>
                  </CardHeader>
                  <CardBody className="px-lg-5 py-lg-5">
                    <div
                      className=" shadow border-0"
                      style={{
                        padding: "5%",
                        color: "#5e72e4",
                      }}
                    >
                      <span className="mr-2">
                        <i
                          className="fas fa-grin-stars"
                          style={{ paddingRight: "1%" }}
                        />
                        Essayer de rédiger une description bref de l'expérience
                        pour inspirer les participants.
                      </span>
                      <br />
                      <br />
                      <span className="mr-2">
                        <i class="fas fa-medal" /> Décrivez pourquoi votre
                        expérience se démarque t-elle des autres du même genre.
                      </span>{" "}
                      <br />
                      <br />
                      <span className="mr-2">
                        <i className="far fa-gem" /> Indiquez ce que les
                        participants vont tirez de votre expérience.
                      </span>
                    </div>

                    <Col lg="12" md="12">
                      <p
                        for="exampleText"
                        className="h3 font-weight-bold mb-0"
                        style={{ paddingTop: "2%" }}
                      >
                        <i
                          className="fas fa-align-justify"
                          style={{ paddingRight: "1%" }}
                        />
                        Description générale
                      </p>
                      <FormGroup>
                        <Input
                          type="textarea"
                          name="text"
                          id="exampleText"
                          rows="7"
                          onChange={(e) =>
                            setProgram({
                              ...program,
                              generalDesc: e.target.value,
                            })
                          }
                          placeholder="Rédiger ici.."
                        />
                        <span
                          className="mr-2 text-sm"
                          style={{ color: "#2dce89" }}
                        >
                          <i className="ni ni-bulb-61" />
                          Votre description doit donner envie de participer à
                          votre expérience. Imaginez qu'elle raconte une
                          histoire, avec un début, un milieu et une fin.{" "}
                        </span>
                      </FormGroup>
                    </Col>
                    <h3
                      className="font-weight-bold mb-0"
                      style={{ padding: "2%" }}
                    >
                      {" "}
                      Les équipements inclus
                    </h3>
                    <Row>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{ padding: "5%" }}>
                            <Row>
                              <div className="col" style={{ paddingTop: "5%" }}>
                                <CardTitle className=" mb-0">
                                  A manger
                                </CardTitle>
                              </div>

                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-utensils" />{" "}
                                </div>
                              </Col>
                            </Row>

                            <div style={{ paddingTop: "3%" }}>
                              <FormGroup>
                                <Input
                                  onChange={(e) =>
                                    setIncludedEq({
                                      ...includedEq,
                                      food: e.target.value,
                                    })
                                  }
                                  placeholder="Entrez ici la nourriture"
                                  type="textarea"
                                  name="nourriture"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{ padding: "5%" }}>
                            <Row>
                              <div className="col" style={{ paddingTop: "5%" }}>
                                <CardTitle className="mb-0">A boire</CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-wine-bottle" />{" "}
                                </div>
                              </Col>
                            </Row>
                            <div style={{ paddingTop: "3%" }}>
                              <FormGroup>
                                <Input
                                  onChange={(e) =>
                                    setIncludedEq({
                                      ...includedEq,
                                      drink: e.target.value,
                                    })
                                  }
                                  placeholder="Entrez ici les boissons"
                                  type="textarea"
                                  name="drink"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{ padding: "5%" }}>
                            <Row>
                              <div className="col" style={{ paddingTop: "5%" }}>
                                <CardTitle className=" mb-0">
                                  Matériels
                                </CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-archive" />{" "}
                                </div>
                              </Col>
                            </Row>
                            <div style={{ paddingTop: "3%" }}>
                              <FormGroup>
                                <Input
                                  onChange={(e) =>
                                    setIncludedEq({
                                      ...includedEq,
                                      material: e.target.value,
                                    })
                                  }
                                  placeholder="Entrez ici le matériel"
                                  type="textarea"
                                  name="matériel"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <span className="mr-2 text-sm" style={{ color: "#2dce89" }}>
                      <i className="ni ni-bulb-61" />
                      Si vous allez offrir quoique ce soit aux participants
                      précisez le ici{" "}
                    </span>
                    <br />
                    <small className="mr-2 " style={{ color: "grey" }}>
                      <i
                        className="fas fa-info-circle"
                        style={{ paddingRight: "1%" }}
                      />
                      Cette partie est facultative{" "}
                    </small>
                    <h3
                      className="font-weight-bold mb-0"
                      style={{ padding: "2%" }}
                    >
                      {" "}
                      Les équipements exclus
                    </h3>
                    <Row>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{ padding: "5%" }}>
                            <Row>
                              <div className="col" style={{ paddingTop: "5%" }}>
                                <CardTitle className=" mb-0">
                                  A manger
                                </CardTitle>
                              </div>

                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-utensils" />{" "}
                                </div>
                              </Col>
                            </Row>

                            <div style={{ paddingTop: "3%" }}>
                              <FormGroup>
                                <Input
                                  onChange={(e) =>
                                    setExcludedEq({
                                      ...excludedEq,
                                      food: e.target.value,
                                    })
                                  }
                                  placeholder="Entrez ici la nourriture"
                                  type="textarea"
                                  name="nourriture"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{ padding: "5%" }}>
                            <Row>
                              <div className="col" style={{ paddingTop: "5%" }}>
                                <CardTitle className="mb-0">A boire</CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-wine-bottle" />{" "}
                                </div>
                              </Col>
                            </Row>
                            <div style={{ paddingTop: "3%" }}>
                              <FormGroup>
                                <Input
                                  onChange={(e) =>
                                    setExcludedEq({
                                      ...excludedEq,
                                      drink: e.target.value,
                                    })
                                  }
                                  placeholder="Entrez ici les boissons"
                                  type="textarea"
                                  name="drink"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                      <Col lg="6" xl="4">
                        <Card className="card-stats mb-4 mb-xl-0">
                          <CardBody style={{ padding: "5%" }}>
                            <Row>
                              <div className="col" style={{ paddingTop: "5%" }}>
                                <CardTitle className=" mb-0">
                                  Matériels
                                </CardTitle>
                              </div>
                              <Col className="col-auto">
                                <div className="icon icon-shape rounded-circle shadow">
                                  <i className="fas fa-archive" />{" "}
                                </div>
                              </Col>
                            </Row>
                            <div style={{ paddingTop: "3%" }}>
                              <FormGroup>
                                <Input
                                  onChange={(e) =>
                                    setExcludedEq({
                                      ...excludedEq,
                                      material: e.target.value,
                                    })
                                  }
                                  placeholder="Entrez ici le matériel"
                                  type="textarea"
                                  name="matériel"
                                />
                              </FormGroup>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>
                    <span className="mr-2 text-sm" style={{ color: "#2dce89" }}>
                      <i className="ni ni-bulb-61" />
                      Si les participants ont besoin d'apporter quoique ce soit
                      pour profitez de l'expérience précisez le ici{" "}
                    </span>
                    <br />
                    <small className="mr-2 " style={{ color: "grey" }}>
                      <i
                        className="fas fa-info-circle"
                        style={{ paddingRight: "1%" }}
                      />
                      Cette partie est facultative{" "}
                    </small>
                  </CardBody>
                </Card>
                <Button
                  className="mt-4"
                  style={{ color: "#5e72e4", backgroundColor: "#fff" }}
                  onClick={() => {
                    props.history.push("/fourth");
                  }}
                >
                  Précédent
                </Button>
                <Button className="mt-4" color="primary" type="submit">
                  enregistrer
                </Button>
              </Form>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default FifthStep;
