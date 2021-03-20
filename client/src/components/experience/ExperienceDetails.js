import React, { Fragment } from "react";

import "../../App.css";
import FourCards from "./FourCards";
import Informations from "./Informations";
import Introduction from "./Introduction";
const ExperienceDetails = () => {
  return (
    <Fragment>
      <div>
        {/* Page Content */}
        <div className="container">
          {/* Heading */}
          <Introduction />
          {/* Heading */}
          {/* /FourCards */}
          <FourCards />
          {/* /.FourCards */}
        </div>
      </div>
      <Informations />
    </Fragment>
  );
};

export default ExperienceDetails;
