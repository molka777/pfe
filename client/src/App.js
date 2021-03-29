import { BrowserRouter as Router, Route } from 'react-router-dom';
import ExperienceDetails from './components/experience/ExperienceDetails';
import Home from './components/Home';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Route path='/' component={Home} exact />
        <Route
          path='/experience/:id'
          render={(props) => <ExperienceDetails {...props} />}
          exact
        />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
