import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addExperience } from "../../JS/actions/experienceActions";
import Loader from "../layout/Loader";
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
} from "reactstrap";
const NewExperience = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState(" ");
  const [type, setType] = useState(" ");
  const [category, setCategory] = useState(" ");
  const [activity, setActivity] = useState(" ");
  const [startHour, setStartHour] = useState(0);
  const [endHour, setEndHour] = useState(0);
  const [language, setLanguage] = useState(" ");
  const [city, setCity] = useState(" ");
  const [theme, setThemes] = useState(" ");
  const [difficulty, setDifficulty] = useState(" ");
  const [program, setProgram] = useState(" ");
  const [target, setTarget] = useState(" ");
  const [phobia, setPhobia] = useState(" ");
  const [eqIncluded, setEqIncluded] = useState(" ");
  const [eqExcluded, setEqExcluded] = useState(" ");
  const [price, setPrice] = useState(0);

  const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  const experience = useSelector(
    (state) => state.experiencesReducers.experience
  );
  const createExperience = (e) => {
    dispatch(
      addExperience({
        title,
        type,
        category,
        activity,
        startHour,
        endHour,
        language,
        city,
        theme,
        difficulty,
        program,
        target,
        phobia,

        price,
      })
    );
  };
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Col lg="6" md="8 center">
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <Form role="form">
                <FormGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="titre de l'expérience"
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="type de l'expérience"
                      type="text"
                      onChange={(e) => setType(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="La catégorie de l'expérience"
                      type="text"
                      onChange={(e) => setCategory(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="l'activité de l'expérience"
                      type="text"
                      onChange={(e) => setActivity(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="L'heure de début"
                      type="number"
                      onChange={(e) => setStartHour(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="L'heure de fin"
                      type="number"
                      onChange={(e) => setEndHour(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="La langue"
                      type="text"
                      onChange={(e) => setLanguage(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="la ville"
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="le thème"
                      type="text"
                      onChange={(e) => setThemes(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="le niveau de difficulté"
                      type="text"
                      onChange={(e) => setDifficulty(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="le programme"
                      type="text"
                      onChange={(e) => setProgram(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="la cible"
                      type="text"
                      onChange={(e) => setTarget(e.target.value)}
                    />
                  </InputGroup>
                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="la phobie"
                      type="text"
                      onChange={(e) => setPhobia(e.target.value)}
                    />
                  </InputGroup>

                  <InputGroup className="input-group-alternative mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-hat-3" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Prix"
                      type="number"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </InputGroup>
                </FormGroup>
                <div className="text-center">
                  <Button
                    className="mt-4"
                    color="primary"
                    type="button"
                    onClick={createExperience}
                  >
                    Enregistrer
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </Col>
      )}
    </>
  );
};

export default NewExperience;
