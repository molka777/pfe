import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../JS/actions/experienceActions";
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
const FourthStep = (props) => {
  const { experience } = props;
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: {
      city: experience.city,
      startHour: experience.startHour,
      endHour: experience.endHour,
    },
  });
  const onSubmit = () => {
    props.updateExperience({
      city: city,
      type: {
        ...experience.type,
        location: location,
        assemblyPoint: assemblyPoint,
      },
      endHour: endHour,
      startHour: startHour,
    });

    props.history.push("/fifth");
  };
  const [city, setCity] = useState("Ariana");
  const [location, setLocation] = useState(" ");
  const [assemblyPoint, setAssemblyPoint] = useState(" ");
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(0);

  return (
    <>
      <SideBar />
      <div className="main-content">
        <Container fluid>
          <div className="text-center">2 de 4</div>
          <Progress multi style={{ height: "21px" }}>
            <Progress bar value="50">
              40%
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
              <Col lg="6" md="10">
                <h2 style={{ color: "#32325d" }}>
                  <i className="fas fa-map-pin" style={{ padding: "2%" }} />
                  Lieu et heure de l'expérience
                </h2>
              </Col>
              <Form onSubmit={handleSubmit(onSubmit)}>
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
                          <i className="fas fa-search-location" /> Dans quelle
                          ville proposerez-vous votre expérience ?
                        </small>
                      </div>
                      <FormGroup>
                        <Col lg="5" md="6">
                          <Input
                            type="select"
                            name="city"
                            id="exampleSelect"
                            onChange={(e) => {
                              e.target.value
                                ? setCity(e.target.value)
                                : console.log(e.target.value);
                            }}
                          >
                            <option>Ariana</option>
                            <option>Béja</option>
                            <option>Ben Arous</option>
                            <option>Bizerte</option>
                            <option>Gabes</option>
                            <option>Gabes</option>
                            <option>Gafsa</option>
                            <option>Jendouba</option>
                            <option>Kairouan</option>
                            <option>Kasserine</option>
                            <option>Kebili</option>
                            <option>La Manouba</option>
                            <option>Le Kef</option>
                            <option>Mahdia</option>
                            <option>Médenine</option>
                            <option>Monastir</option>
                            <option>Nabeul</option>
                            <option>Sfax</option>
                            <option>Sidi Bouzid</option>
                            <option>Siliana</option>
                            <option>Sousse</option>
                            <option>Tataouine</option>
                            <option>Tozeur</option>
                            <option>Tunis</option>
                            <option>Zaghouan</option>
                          </Input>
                        </Col>
                      </FormGroup>

                      {experience.type.title === "en personne" ? (
                        <div>
                          <FormGroup>
                            <div>
                              <small className="font-weight-bold">
                                Où votre expérience se passera-t-elle?
                              </small>
                            </div>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                onChange={(e) => setLocation(e.target.value)}
                                placeholder="localisation"
                                type="string"
                                autoComplete="new-password"
                                name="location"
                                invalid={errors["location"]}
                                innerRef={register({
                                  required: "La localisation est obligatoire.",
                                })}
                              />
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <div>
                              <small className="font-weight-bold">
                                Indiquez le point de rassemblement des
                                participants?
                              </small>
                            </div>
                            <InputGroup className="input-group-alternative">
                              <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                  <i className="ni ni-caps-small" />
                                </InputGroupText>
                              </InputGroupAddon>
                              <Input
                                onChange={(e) =>
                                  setAssemblyPoint(e.target.value)
                                }
                                placeholder="Point de rassemblement"
                                type="string"
                                autoComplete="new-password"
                                name="assemblyPoint"
                                invalid={errors["assemblyPoint"]}
                                innerRef={register({
                                  required:
                                    "Le point de rassemblement est obligatoire.",
                                })}
                              />
                            </InputGroup>
                            <span
                              className="mr-2 text-sm"
                              style={{ color: "#2dce89" }}
                            >
                              <i className="ni ni-bulb-61" />
                              Assurez-vous que le point de rassemblement est
                              facile à trouver.
                            </span>
                          </FormGroup>
                        </div>
                      ) : (
                        <p></p>
                      )}
                    </FormGroup>
                    <FormGroup
                      className="mb-3 border"
                      style={{ padding: "2%" }}
                    >
                      <div>
                        <small className="font-weight-bold">
                          <i className="fas fa-hourglass-half" /> A quelle heure
                          proposerez-vous votre expérience ?
                        </small>
                      </div>
                      <Row className="icon-examples">
                        <Col lg="4" md="6">
                          <span className="mr-2 text-sm">L'heure de début</span>
                          <FormGroup>
                            <Input
                              type="time"
                              name="startHour"
                              id="exampleDatetime"
                              placeholder="datetime"
                              min="07:00"
                              max="19:00"
                              onChange={(e) => {
                                e.target.value
                                  ? setStartHour(e.target.value)
                                  : console.log(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4" md="6">
                          <span className="mr-2 text-sm">L'heure de fin</span>

                          <FormGroup>
                            <Input
                              type="time"
                              name="endHour"
                              id="exampleDatetime"
                              placeholder="datetime"
                              min="07:00"
                              max="19:00"
                              onChange={(e) => {
                                e.target.value
                                  ? setEndHour(e.target.value)
                                  : console.log(e.target.value);
                              }}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <span
                        className="mr-2 text-sm"
                        style={{ color: "rgb(94, 114, 228)" }}
                      >
                        <i className="far fa-calendar-check" /> Vous fixerez la
                        date de déroulement une fois l'expérience est validée.
                      </span>
                    </FormGroup>
                  </CardBody>
                </Card>
                <Button
                  className="mt-4"
                  style={{ color: "#5e72e4", backgroundColor: "#fff" }}
                  onClick={() => {
                    props.history.push("/Third");
                  }}
                >
                  Précédent
                </Button>
                {startHour !== 0 && endHour !== 0 ? (
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
              </Form>
            </div>
          </Col>
        </Container>
      </div>
    </>
  );
};

export default FourthStep;
