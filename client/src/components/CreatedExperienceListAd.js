import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../JS/actions/experienceActions";
import CreatedExperienceAd from "./CreatedExperienceAd";
import Loader from "./layout/Loader";
import { useAlert } from "react-alert";

import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Container,
  Row,
  Col,
} from "reactstrap";
const CreatedExperienceListAd = () => {
  const alert = useAlert();

  const dispatch = useDispatch();
  const experiences = useSelector(
    (state) => state.experiencesReducers.experiences
  );

  const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  const error = useSelector((state) => state.experiences);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getExperiences());
  }, [dispatch, alert, error]);
  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="8">
            <Card className="shadow">
              <CardHeader className="border-0">
                <Row className="align-items-center">
                  <div className="col">
                    <h3 className="mb-0">Les expériences créées</h3>
                  </div>
                  <div className="col text-right">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      Voir tout
                    </Button>
                  </div>
                </Row>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Titre</th>
                    <th scope="col">Type</th>
                    <th scope="col">Activité</th>
                  </tr>
                </thead>
                <tbody>
                  {experiences &&
                    experiences.map((experience) => (
                      <CreatedExperienceAd
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                </tbody>
              </Table>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default CreatedExperienceListAd;
