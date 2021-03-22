import React, { Fragment } from "react";
import Rate from "../layout/Rate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader";

const Introduction = () => {
  const { loading, experience } = useSelector(
    (state) => state.experienceDetails
  );
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <h1 className="my-4">{experience["title"]}</h1>
          <div className="row">
            <div className="col-md-7">
              <img
                className="img-fluid"
                src="http://placehold.it/750x500"
                alt=""
              />
            </div>
            <div className="col-md-4 border border-2">
              <h3 className="my-3">
                {experience["type"]["title"] == "online" ? (
                  <span>Expérience en ligne</span>
                ) : (
                  <span>Expérience en personne</span>
                )}
              </h3>
              <p>
                <small>
                  {experience["themes"][0]}, {experience["themes"][1]}
                </small>
              </p>
              <p>ville : {experience.ville}</p>
              <div className="row">
                <p className="col-md-5">Heure début : {experience.heure_d}h</p>
                <p className="col-md-5">Heure fin : {experience.heure_f}h</p>
              </div>

              <h3 className="my-3">Activité</h3>
              <p>{experience.activite}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <Rate />
                </div>
                <FontAwesomeIcon
                  style={{ color: "red", marginRight: "5%" }}
                  icon={faHeart}
                />
              </div>
              <div className="row" style={{ marginTop: "11%" }}>
                <p class="col-md-5">{experience.prix} TND</p>
                <button type="button" class="btn btn-warning col-md-5">
                  Participer
                </button>
              </div>
            </div>
          </div>
          {/* /.row */}
          {/* Related Projects Row */}
          <div className="row" style={{ marginTop: "2%" }}>
            <div className="col-md-4 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>

            <div className="col-md-4 col-sm-6 mb-4">
              <a href="#">
                <img
                  className="img-fluid"
                  src="http://placehold.it/500x300"
                  alt=""
                />
              </a>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Introduction;
