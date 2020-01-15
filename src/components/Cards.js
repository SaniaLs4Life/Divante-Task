import React from 'react';
import { Link } from 'react-router-dom';

import './Cards.scss';

export default function Cards() {
  return (
    <div className="card">
      <ul className="card__container">
        {new Array(8).fill(1).map((e, i) => (
          <Link to="/detail" key={i}>
            <li className="card__container--card">
              <img src="https://divante.com/blog/wp-content/uploads/2019/01/Blog-slider-top-10-ecommerce-trends.png" />
              <div className="card__container--card__container">
                <div className="card__container--card__container--card-title">
                  Title {i}
                </div>
                <p className="card__container--card__container--card-description">
                  Description
                </p>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
