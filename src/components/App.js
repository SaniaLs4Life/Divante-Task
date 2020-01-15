import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import ErrorBoundary from './ErrorBoundry';
import Navbar from './Navbar';
import Dashboard from './Dashboard';
import Cart from './Cart';

import './Dashboard.scss';
import CardDetail from './CardDetail';

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="dashboard__container">
        <Cart />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/detail" component={CardDetail} />
        </Switch>
      </div>
    </Router>
  );
}
