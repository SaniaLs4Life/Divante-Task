import React from 'react';

import './CardDetail.scss';

export default function CardDetail() {
  return (
    <div className="card-detail__container">
      <div className="card-detail__container--image">
        <img src="https://divante.com/blog/wp-content/uploads/2019/01/Blog-slider-top-10-ecommerce-trends.png" />
      </div>
      <div className="card-detail__container--bottom">
        <div className="card-detail__container--bottom__left">
          <div className="card-detail__container--bottom__left--title">
            Title
          </div>
          <div className="card-detail__container--bottom__left--description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </div>
        </div>
        <div className="card-detail__container--bottom__right">
          <div className="card-detail__container--bottom__right--button">
            Add to Cart
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}
