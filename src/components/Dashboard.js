import React from 'react';
import Cards from './Cards';
import './Dashboard.scss';
import Cart from './Cart';

export default function Dashboard() {
  return (
    <div className="dashboard__container">
      <Cart />
      <Cards />
    </div>
  );
}
