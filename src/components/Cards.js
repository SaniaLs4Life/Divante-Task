import React from 'react';
import PropTypes from 'prop-types';

import './Card.scss';

export default function Cards({ item }) {
  return (
    <div className="card">
      <ul className="card__container">
        {new Array(8).fill(1).map((e, i) => (
          <a href="#" key={i}>
            <li className="card__container--card">
              <img src="https://divante.com/blog/wp-content/uploads/2019/01/Blog-slider-top-10-ecommerce-trends.png" />
              <div className="card__container--card__container">
                <div className="card__container--card__container--card-title">
                  Title {item}
                </div>
                <p className="card__container--card__container--card-description">
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

Cards.propTypes = {
  //   item: PropTypes.number will be changed!
};
