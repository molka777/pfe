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

function App() {
  const [experience, setExperience] = useState({});

  const updateExperience = (data) => {
    setExperience((prevExp) => ({ ...prevExp, ...data }));
  };

  // const resetExperience = () => {
  //   setExperience({});
  // };
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/experience/:id" component={ExperienceDetails} />
          <Route path="/experiences" component={ExperiencesList} exact />

          <Route
            render={(props) => (
              <FirstStep
                {...props}
                experience={experience}
                updateExperience={updateExperience}
              />
            )}
            path="/first"
            exact
          />
          <Route
            render={(props) => (
              <SecondStep
                {...props}
                experience={experience}
                updateExperience={updateExperience}
              />
            )}
            path="/second"
            exact
          />
          <Route
            render={(props) => (
              <ThirdStep
                {...props}
                experience={experience}
                updateExperience={updateExperience}
              />
            )}
            path="/third"
            exact
          />
          <Route
            render={(props) => (
              <FourthStep
                {...props}
                experience={experience}
                updateExperience={updateExperience}
              />
            )}
            path="/fourth"
            exact
          />
          <Route
            render={(props) => (
              <FifthStep
                {...props}
                experience={experience}
                updateExperience={updateExperience}
              />
            )}
            path="/fifth"
            exact
          />

          <Route path="/admin" component={CreatedExperienceListAd} />
          <Route path="/sidebar" component={SideBar} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
