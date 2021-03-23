import React, { Fragment, useEffect } from "react";
import MetaData from "./layout/MetaData";
import { useDispatch, useSelector } from "react-redux";
import { getExperiences } from "../JS/actions/experienceActions";
import Experience from "./experience/Experience";
import Loader from "./layout/Loader";
import { useAlert } from "react-alert";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const experiences = useSelector((state) => state.experiencesReducers.experiences);
  const isLoading = useSelector((state) => state.experiencesReducers.isLoading);
  const error = useSelector((state) => state.experiences);

  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getExperiences());
  }, [dispatch, alert, error]);
  return (

    isLoading ? (
      <Loader />
    ) : (
      <Fragment>
        <MetaData title={"Create and Live the Best Experiences"} />
        <div>
          <h1>Home page</h1>
          <main>
            <div className="album py-5 bg-light">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                  {experiences &&
                    experiences.map((experience) => (
                      <Experience
                        key={experience._id}
                        experience={experience}
                      />
                    ))}
                </div>
              </div>
            </div>
          </main>
        </div>
      </Fragment>
    )
  )
};

export default Home;
