import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../src/pages/Home';
import About from '../src/pages/About';
import Projects from '../src/pages/Projects';
import Contact from '../src/pages/Contact';

function App() {
  return (
    <Router>
      <div className="App">

        {/* setup router */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/contact" component={Contact} />
        </Switch>

        <div className="navigation">
          {/* <img src={logo} className="logo" alt="Logo" /> */}
          <div className="navigation-sub">

            {/* setup links */}
            <Link to="/" className="item">Home</Link>
            <Link to="/about" className="item">About</Link>
            <Link to="/projects" className="item">Projects</Link>
            <Link to="/contact" className="item">Contact</Link>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
