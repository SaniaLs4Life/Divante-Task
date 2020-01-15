import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import ErrorBoundary from './ErrorBoundry';
import Navbar from './Navbar';
import Items from './Items';
import Cart from './Cart';
import CardDetail from './CardDetail';

// Styles
import './Dashboard.scss';

export default function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
        <div className="dashboard__container">
          <Cart />
          <Switch>
            <Route exact path="/" component={Items} />
            <Route exact path="/detail/:id" component={CardDetail} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
}
