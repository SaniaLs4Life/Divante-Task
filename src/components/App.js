import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import ErrorBoundary from './ErrorBoundry';
import Navbar from './Navbar';
import Items from './Items';
import CardDetail from './CardDetail';
import About from './About';
import Contact from './Contact';

// Styles
import './Global.scss';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Items} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/detail/:id" component={CardDetail} />
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}
