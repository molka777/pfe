import React, { Fragment } from "react";

const FourCards = () => {
  return (
    <Fragment>
      <div style={{ padding: "4rem 2rem" }}>
        <div className="row w-100">
          <div className="col-md-3">
            <div className="card border-info mx-sm-1 p-3">
              <div className="card border-info shadow text-info p-3 my-card">
                <span className="fa fa-car" aria-hidden="true" />
              </div>
              <div className="text-info text-center mt-3">
                <h4>cibles</h4>
              </div>
              <div className="text-info text-center mt-2">
                <p>cibles</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-success mx-sm-1 p-3">
              <div className="card border-success shadow text-success p-3 my-card">
                <span className="fa fa-eye" aria-hidden="true" />
              </div>
              <div className="text-success text-center mt-3">
                <h4>langue</h4>
              </div>
              <div className="text-success text-center mt-2">
                <p> langue</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-danger mx-sm-1 p-3">
              <div className="card border-danger shadow text-danger p-3 my-card">
                <span className="fa fa-heart" aria-hidden="true" />
              </div>
              <div className="text-danger text-center mt-3">
                <h4>Difficulté</h4>
              </div>
              <div className="text-danger text-center mt-2">
                <p>niveau</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card border-warning mx-sm-1 p-3">
              <div className="card border-warning shadow text-warning p-3 my-card">
                <span className="fa fa-inbox" aria-hidden="true" />
              </div>
              <div className="text-warning text-center mt-3">
                <h4>phobies</h4>
              </div>
              <div className="text-warning text-center mt-2">
                <p>aucune</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default FourCards;
