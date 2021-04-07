import React, { useState, useEffect } from "react";

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
  Progress,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import { useForm } from "react-hook-form";
import SideBar from "../layout/SideBar";
import { updateExperience } from "../../JS/actions/experienceActions";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const SecondStep = () => {
  const [modal, setModal] = useState(false);
  const experience = useSelector(
    (state) => state.experiencesReducers.experience
  );
  const toggle = () => setModal(!modal);
  const { register, handleSubmit, errors } = useForm({
    // defaultValues: {
    //   titre: experienceP.title,
    //   activity: experienceP.activity,
    // },
  });
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    dispatch(
      updateExperience(experience._id, {
        ...experience,
        title: title,
        themes: [...theme],
        activity: activity,
        price: price,
      })
    );
    console.log(data);
  };
  const addTheme = (e) => {
    if (e.target.checked) {
      setTheme([...theme, e.target.name]);
    } else {
      console.log(e.target.checked);
    }
  };
  const [title, setTitle] = useState(" ");
  const [theme, setTheme] = useState([]);
  const [activity, setActivity] = useState(" ");
  const [price, setPrice] = useState(0);

  return (
    <>
      <SideBar />
      <div className="main-content">
        <Container fluid>
          <div className="text-center">2 de 4</div>
          <Progress multi style={{ height: "21px" }}>
            <Progress bar value="20">
              20%
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
                    <i className="ni ni-collection" style={{ padding: "2%" }} />{" "}
                    Les informations de base
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
                          Donnez un titre à votre expérience
                        </small>
                      </div>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-caps-small" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setTitle(e.target.value)}
                          placeholder="Titre"
                          type="string"
                          autoComplete="new-password"
                          name="titre"
                          invalid={errors["titre"]}
                          innerRef={register({
                            required: "Le titre est obligatoire.",
                          })}
                        />
                      </InputGroup>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Le titre de l'expérience doit etre court et attirant
                      </span>
                      <br />
                      {errors.titre && (
                        <span
                          className="mr-2 text-sm"
                          style={{ color: "#dd3a4a" }}
                        >
                          {errors.titre.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          Choisissez le thème qui décrit le mieux l'activité
                          principale de votre expérience
                        </small>
                      </div>
                      <Row className="icon-examples">
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customNature"
                              type="checkbox"
                              name="Nature"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customNature"
                            >
                              <span className="text-muted">Nature </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customBien"
                              type="checkbox"
                              name="Bien-etre"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customBien"
                            >
                              <span className="text-muted">Bien-etre</span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCulture"
                              type="checkbox"
                              name="art et culture"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customCulture"
                            >
                              <span className="text-muted">Art et culture</span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customSport"
                              type="checkbox"
                              name="Sport"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customSport"
                            >
                              <span className="text-muted">Sport </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customCuisine"
                              type="checkbox"
                              name="cuisine"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customCuisine"
                            >
                              <span className="text-muted">Cuisine </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customEtude"
                              type="checkbox"
                              name="Etude"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customEtude"
                            >
                              <span className="text-muted">Etude </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customAutes"
                              type="checkbox"
                              name="Animaux"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customAutes"
                            >
                              <span className="text-muted">Animaux </span>
                            </label>
                          </div>
                        </Col>
                        <Col lg="6" md="6">
                          <div className="custom-control custom-control-alternative custom-checkbox">
                            <input
                              className="custom-control-input"
                              id=" customAnimaux"
                              type="checkbox"
                              name="Autres"
                              onChange={(e) => {
                                addTheme(e);
                              }}
                            />
                            <label
                              className="custom-control-label"
                              htmlFor=" customAnimaux"
                            >
                              <span className="text-muted">Autres </span>
                            </label>
                          </div>
                        </Col>
                      </Row>

                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Les expériences les plus uniques ont plusieurs thèmes
                      </span>
                    </FormGroup>
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          Donnez l'activité principale de votre expérience
                        </small>
                      </div>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="ni ni-air-baloon" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setActivity(e.target.value)}
                          placeholder="L'activité de l'expérience"
                          type="string"
                          autoComplete="new-password"
                          name="activity"
                          invalid={errors["activity"]}
                          innerRef={register({
                            required: "L'activité est obligatoire.",
                          })}
                        />
                      </InputGroup>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Une activité réussie a un role de transmission de
                        savoir, divertissement ou initiation à une discipline
                      </span>
                      <br />
                      {errors.activity && (
                        <span
                          className="mr-2 text-sm"
                          style={{ color: "#dd3a4a" }}
                        >
                          {errors.activity.message}
                        </span>
                      )}
                    </FormGroup>
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          Fixez un prix à votre expérience
                        </small>
                      </div>
                      <InputGroup className="input-group-alternative">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="fas fa-wallet" />
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          onChange={(e) => setPrice(e.target.value)}
                          placeholder="Le prix de l'expérience"
                          type="number"
                          autoComplete="new-password"
                          name="price"
                          invalid={errors["price"]}
                          innerRef={register({
                            required: "Le prix est obligatoire.",
                          })}
                        />
                      </InputGroup>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "#2dce89" }}
                      >
                        <i className="ni ni-bulb-61" />
                        Un conseil sur le prix
                      </span>
                      <br />
                      {errors.price && (
                        <span
                          className="mr-2 text-sm"
                          style={{ color: "#dd3a4a" }}
                        >
                          {errors.price.message}
                        </span>
                      )}
                    </FormGroup>
                  </CardBody>
                </Card>

                <Link
                  className="mt-4"
                  style={{ color: "#5e72e4", backgroundColor: "#fff" }}
                  to={`/first`}
                >
                  Précédent
                </Link>
                {title !== " " && theme !== [] && activity !== " " ? (
                  <Link
                    className="mt-4"
                    color="primary"
                    type="submit"
                    to={`/Third`}
                  >
                    Suivant
                  </Link>
                ) : (
                  <Link className="mt-4" color="primary" type="submit" disabled>
                    Suivant
                  </Link>
                )}
              </div>
            </Form>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default SecondStep;
