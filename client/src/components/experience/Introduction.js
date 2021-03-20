import React, { Fragment } from "react";
import Rate from "../layout/Rate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons";
const Introduction = () => {
  return (
    <Fragment>
      <h1 className="my-4">Titre de l'expérience</h1>
      {/* Portfolio Item Row */}
      <div className="row">
        <div className="col-md-7">
          <img className="img-fluid" src="http://placehold.it/750x500" alt="" />
        </div>
        <div className="col-md-4 border border-2">
          <h3 className="my-3">Type de l'expérience</h3>
          <p>Thèmes</p>
          <p>ville</p>
          <div className="row">
            <p className="col-md-5">Heure début</p>
            <p className="col-md-5">Heure fin</p>
          </div>

          <h3 className="my-3">Activité</h3>
          <p>nom de l'activité</p>
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
            <p class="col-md-5">Prix</p>
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
  );
};

export default Introduction;
