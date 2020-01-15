import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Product = memo(({ card }) => {
  return (
    <Link to={`/detail/${card.id}`}>
      <li className="card__container--card">
        <img src="https://divante.com/blog/wp-content/uploads/2019/01/Blog-slider-top-10-ecommerce-trends.png" />
        <div className="card__container--card__container">
          <div className="card__container--card__container--card-title">
            {card.name}
          </div>
          <p className="card__container--card__container--card-description">
            {card.description}
          </p>
        </div>
      </li>
    </Link>
  );
});

export default Product;

Product.propTypes = {
  card: PropTypes.object.isRequired
};
