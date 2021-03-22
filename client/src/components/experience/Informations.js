import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Loader from "../layout/Loader";

const Informations = () => {
  const { loading, experience } = useSelector(
    (state) => state.experienceDetails
  );

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <section id="tabs" className="project-tab">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav>
                  <div
                    className="nav nav-tabs nav-fill"
                    id="nav-tab"
                    role="tablist"
                  >
                    <a
                      className="nav-item nav-link active"
                      id="nav-home-tab"
                      data-toggle="tab"
                      href="#nav-home"
                      role="tab"
                      aria-controls="nav-home"
                      aria-selected="true"
                    >
                      Au programme
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-profile-tab"
                      data-toggle="tab"
                      href="#nav-profile"
                      role="tab"
                      aria-controls="nav-profile"
                      aria-selected="false"
                    >
                      La charte de l'expérience
                    </a>
                    <a
                      className="nav-item nav-link"
                      id="nav-contact-tab"
                      data-toggle="tab"
                      href="#nav-contact"
                      role="tab"
                      aria-controls="nav-contact"
                      aria-selected="false"
                    >
                      Les avis
                    </a>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-home"
                    role="tabpanel"
                    aria-labelledby="nav-home-tab"
                  >
                    au programme
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="nav-profile-tab"
                    role="tabpanel"
                    aria-labelledby="nav-profile-tab"
                  >
                    charte
                  </div>
                  <div
                    className="tab-pane fade show active"
                    id="nav-contact-tab"
                    role="tabpanel"
                    aria-labelledby="nav-contact-tab"
                  >
                    avis
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default Informations;
