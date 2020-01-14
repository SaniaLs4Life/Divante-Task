import React from 'react';
import './Dashboard.scss';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <ul className="dashboard__container">
        {new Array(5).fill(1).map((e, i) => (
          <a href="#" key={i}>
            <li className="dashboard__container--card">
              <img src="https://divante.com/blog/wp-content/uploads/2019/01/Blog-slider-top-10-ecommerce-trends.png" />
              <div className="dashboard__container--card__container">
                <div className="dashboard__container--card__container--card-title">
                  Title
                </div>
                <p className="dashboard__container--card__container--card-description">
                  Description
                </p>
              </div>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}
