import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Refs from '../components/Refs';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Index</Link>
          </li>
          <li>
            <Link to="/refs">Refs</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" exact={ true } />
      <Route path="/refs/" component={ Refs } />
    </div>
  </Router>
);

export default App;
