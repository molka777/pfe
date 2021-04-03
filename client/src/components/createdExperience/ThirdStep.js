import React, { useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
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
import { useForm } from "react-hook-form";
import SideBar from "../layout/SideBar";

const ThirdStep = (props) => {
  const { experience } = props;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      select: experience.language,
    },
  });
  const onSubmit = () => {
    props.updateExperience({
      target: target,
      difficulty: difficulty,

      language: language,
    });
    props.history.push("/fourth");
  };
  const [target, setTarget] = useState([]);
  const [difficulty, setDifficulty] = useState(" ");
  const [language, setLanguage] = useState("Arabe");
  const [phobia, setPhobia] = useState([]);
  const addPhobia = (e) => {
    if (e.target.checked) {
      setPhobia([...phobia, e.target.name]);
    } else {
      console.log(e.target.checked);
    }
  };
  return (
    <>
      <SideBar />
      <div className="main-content">
        <Container fluid>
          <div className="text-center">2 de 4</div>
          <Progress multi style={{ height: "21px" }}>
            <Progress bar value="30">
              30%
            </Progress>
          </Progress>
          <Col lg="10" md="12">
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
                <Col lg="6" md="10">
                  <h2 style={{ color: "#32325d" }}>
                    {" "}
                    <i
                      className="fas fa-street-view"
                      style={{ padding: "2%" }}
                    />{" "}
                    La cible de l'expérience
                  </h2>
                </Col>
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
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          Qui peut participer à votre expérience ?
                        </small>
                      </div>
                      <Row className="icon-examples">
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customEnfant"
                              type="checkbox"
                              name="enfant"
                              onChange={(e) => {
                                e.target.checked
                                  ? setTarget([...target, e.target.name])
                                  : console.log(e.target.check);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customEnfant"
                            >
                              <span className="text-muted">Enfant </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customAdulte"
                              type="checkbox"
                              name="adulte"
                              onChange={(e) => {
                                e.target.checked
                                  ? setTarget([...target, e.target.name])
                                  : console.log(e.target.check);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customAdulte"
                            >
                              <span className="text-muted">Adulte</span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Les enfants doivent etre accompagnés par le tuteur légal
                      </span>
                    </FormGroup>
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          Quel niveau de difficulté les participants doivent-ils
                          attendre de l'activité ?
                        </small>
                      </div>
                      <Row className="icon-examples">
                        <Col lg="3" md="6">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio2"
                                onChange={(e) => {
                                  e.target.checked
                                    ? setDifficulty("Léger")
                                    : console.log(e.target.check);
                                }}
                              />
                              <span className="mr-2 text-sm">Léger</span>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col lg="3" md="6">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio2"
                                onChange={(e) => {
                                  e.target.checked
                                    ? setDifficulty("Modéré")
                                    : console.log(e.target.check);
                                }}
                              />{" "}
                              <span className="mr-2 text-sm">Modéré</span>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col lg="3" md="6">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio2"
                                onChange={(e) => {
                                  e.target.checked
                                    ? setDifficulty("Intense")
                                    : console.log(e.target.check);
                                }}
                              />{" "}
                              <span className="mr-2 text-sm">Intense</span>
                            </Label>
                          </FormGroup>
                        </Col>
                        <Col lg="3" md="6">
                          <FormGroup check>
                            <Label check>
                              <Input
                                type="radio"
                                name="radio2"
                                onChange={(e) => {
                                  e.target.checked
                                    ? setDifficulty("Extrème")
                                    : console.log(e.target.check);
                                }}
                              />
                              <span className="mr-2 text-sm">Extrème</span>
                            </Label>
                          </FormGroup>
                        </Col>
                      </Row>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Les enfants doivent etre accompagnés par le tuteur légal
                      </span>
                    </FormGroup>
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          Est ce que votre expérience n'est pas recommandée aux
                          personnes qui présentent une de ses phobies ? Si oui
                          précisez-les.
                        </small>
                      </div>
                      <Row className="icon-examples">
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" hauteur"
                              type="checkbox"
                              name="Acrophobie (Hauteur)"
                              onChange={(e) => {
                                addPhobia(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" hauteur"
                            >
                              <span className="text-muted">
                                Acrophobie (Hauteur){" "}
                              </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" claustrophobie"
                              type="checkbox"
                              name="Claustrophobie"
                              onChange={(e) => {
                                addPhobia(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" claustrophobie"
                            >
                              <span className="text-muted">
                                Claustrophobie (les espaces confinés)
                              </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" agoraphobie"
                              type="checkbox"
                              name="Agoraphobie"
                              onChange={(e) => {
                                addPhobia(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" agoraphobie"
                            >
                              <span className="text-muted">
                                Agoraphobie (les espaces ouverts)
                              </span>
                            </label>
                          </div>
                        </Col>
                      </Row>
                      <small className="mr-2 " style={{ color: "grey" }}>
                        <i
                          className="fas fa-info-circle"
                          style={{ paddingRight: "1%" }}
                        />
                        Cette partie est facultative{" "}
                      </small>
                    </FormGroup>

                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <small className="font-weight-bold">
                        En quelle langue proposerez-vous votre expérience ?
                      </small>
                      <Col lg="3" md="6">
                        <Input
                          type="select"
                          name="select"
                          id="exampleSelect"
                          onChange={(e) => {
                            e.target.value
                              ? setLanguage(e.target.value)
                              : console.log(e.target.value);
                          }}
                        >
                          <option>Arabe</option>
                          <option>Français</option>
                          <option>Anglais</option>
                        </Input>
                      </Col>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Sélectionnez la langue dans laquelle vous vous sentez
                        suffisamment à l'aise pour parler aux participants.
                      </span>
                    </FormGroup>
                  </CardBody>
                </Card>
                <Button
                  className="mt-4"
                  style={{ color: "#5e72e4", backgroundColor: "#fff" }}
                  onClick={() => {
                    props.history.push("/second");
                  }}
                >
                  Précédent
                </Button>
                {target !== [] && difficulty !== " " ? (
                  <Button className="mt-4" color="primary" type="submit">
                    Suivant
                  </Button>
                ) : (
                  <Button
                    className="mt-4"
                    color="primary"
                    type="submit"
                    disabled
                  >
                    Suivant
                  </Button>
                )}
              </div>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default ThirdStep;
