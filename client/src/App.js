import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CreatedExperienceListAd from "./components/CreatedExperienceListAd";
import ExperienceDetails from "./components/experience/ExperienceDetails";
import Home from "./components/Home";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FirstStep from "./components/createdExperience/FirstStep";
import SecondStep from "./components/createdExperience/SecondStep";
import SideBar from "./components/layout/SideBar";
import React, { useState } from "react";
import ThirdStep from "./components/createdExperience/ThirdStep";
import FourthStep from "./components/createdExperience/FourthStep";
import FifthStep from "./components/createdExperience/FifthStep";
import ExperiencesList from "./components/createdExperience/ExperiencesList";
import FirstStep2 from "./components/createdExperience/FirstStep2";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/experience/:id" component={ExperienceDetails} />
          <Route path="/experiences" component={ExperiencesList} exact />
          <Route path="/first" component={FirstStep} exact />
          <Route path="/first/:id" component={FirstStep2} />
          <Route path="/second/:id" component={SecondStep} />
          <Route path="/third/:id" component={ThirdStep} />
          <Route path="/fourth/:id" component={FourthStep} />
          <Route path="/fifth/:id" component={FifthStep} />
          <Route path="/admin" component={CreatedExperienceListAd} />
          <Route path="/sidebar" component={SideBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
